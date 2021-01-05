import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VenueDetails from './VenueDetails.jsx';
import Heading from './heading.jsx';
import PhotoHeading from './photoHeading.jsx';
import DetailsSub from './detailsSubheading.jsx';
import PhotoBase from './photoBase.jsx';
import Menu from './menu.jsx';
import MenuFooter from './menuFooter.jsx';

const axios = require('axios');

class Eatery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      description: '',
      menuOne: '',
      menuTwo: '',
      menuThree: '',
      menuFour: '',
      menuFive: '',
      cross_street: '',
      neighborhood: '',
      hours: '',
      style: '',
      dress: '',
      parking: '',
      transit: '',
      payment: '',
      chef: '',
      details: '',
      url: '',
      phone: '',
      parties: '',
      party_contact: '',
      special: '',
      reviewNum: '0 reviews',
      starAvg: 0,
      tags: [],
      cost: '$30 and under',
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/wild', { crossdomain: true })
      .then((res) => {
        var restaurantID = res.data.ID;
        this.setState({
          ID: res.data.ID,
          name: res.data.name,
          description: res.data.description,
          menuOne: res.data.menuOne,
          menuTwo: res.data.menuTwo,
          menuThree: res.data.menuThree,
          menuFour: res.data.menuFour,
          menuFive: res.data.menuFive,
          cross_street: res.data.cross_street,
          neighborhood: res.data.neighborhood,
          hours: res.data.hours,
          style: res.data.style,
          dress: res.data.dress,
          parking: res.data.parking,
          transit: res.data.transit,
          payment: res.data.payment,
          chef: res.data.chef,
          details: res.data.details,
          url: res.data.url,
          phone: res.data.phone,
          parties: res.data.parties,
          party_contact: res.data.party_contact,
          special: res.data.special,
        });
        window.history.pushState('string', 'Title', `/restaurants/${restaurantID}`);
        return restaurantID;
      })
    .then(restaurantID => axios.get(`http://localhost:1337/api/unique/reviews?${restaurantID}`, {crossdomain: true}))
    .then(res => {
      var totalRev = res.data.length;
      var revText = '';
      if (totalRev === 0) {
        revText = 'No reviews';
      } else if (totalRev === 1) {
        revText = '1 review';
      } else if (totalRev > 1) {
        revText = totalRev.toString() + ' reviews';
      };
      var starSum = 0;
      var tagStash = {};
      res.data.forEach(element => {
        starSum += element.overallScore;
      });
      var avgStars = starSum / totalRev;
      res.data.forEach(element => {
        var tagParse = element.tags.split(', ');
        tagParse.forEach(item => {
          if (Object.keys(tagStash).length < 1) {
            tagStash[item] = 1;
          } else {
            if (tagStash.hasOwnProperty(item)) {
              tagStash[item] = tagStash[item] + 1;
            } else {
              tagStash[item] = 1;
            }
          }
        });
      });
      var tagsRender = [];
      if (Object.keys(tagStash).length > 0 && Object.keys(tagStash).length < 4) {
        for (var key in tagStash) {
          tagsRender.push(tagParse[key]);
        }
      } else if (Object.keys(tagStash).length > 3) {
        var tagSort = [];
        for (var item in tagStash) {
          tagSort.push([item, tagStash[item]]);
        }
        tagSort.sort(function(a, b) {
          return (a[1] - b[1]);
        })
        for (var x = 0; x < 3; x++) {
          tagsRender.push(tagSort[x][0]);
        }
      };
      this.setState({
        reviewNum: revText,
        starAvg: avgStars,
        tags: tagsRender,
      });
    })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const minutiae = {
      cross_street: this.state.cross_street,
      neighborhood: this.state.neighborhood,
      hours: this.state.hours,
      style: this.state.style,
      dress: this.state.dress,
      parking: this.state.parking,
      transit: this.state.transit,
      payment: this.state.payment,
      chef: this.state.chef,
      details: this.state.details,
      url: this.state.url,
      phone: this.state.phone,
      parties: this.state.parties,
      party_contact: this.state.party_contact,
      special: this.state.special,
    };
    return (
      <Container fluid>
        <Heading />
        <PhotoHeading />
        <Navbar bg="light">
          <Nav className="mr-auto">
            <Nav.Link href="/">Overview</Nav.Link>
            <Nav.Link href="#photos">Photos</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#review">Review</Nav.Link>
            <Nav.Link href="#twitter">Twitter</Nav.Link>
          </Nav>
        </Navbar>
        <hr />
        <Row>
          <Col xs="8"><h1 className="mt-4">{this.state.name}</h1></Col>
          <hr />
        </Row>
        <DetailsSub
          rev={this.state.reviewNum}
          starz={this.state.starAvg}
          tagz={this.state.tags}
          fare={this.state.style}
          />
        <Row>
          <Col xs="8"><p className="display-4">{this.state.description}
            </p></Col>
        </Row>
        <PhotoBase />
        <Row><h2>Menu</h2></Row>
        <hr></hr>
        <Row>
          <Col xs="8">
            <Menu
              menu1={this.state.menuOne}
              menu2={this.state.menuTwo}
              menu3={this.state.menuThree}
              menu4={this.state.menuFour}
              menu5={this.state.menuFive}
            />
          </Col>
          <Col xs="4">
            <VenueDetails {...minutiae} />
          </Col>
        </Row>
        <MenuFooter />
      </Container>
    );
  }
}

export default Eatery;
