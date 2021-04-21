import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Radium from "radium";
import Tabs from "./tabs.jsx";
import VenueDetails from "./VenueDetails.jsx";
import Heading from "./heading.jsx";
import PhotoHeading from "./photoHeading.jsx";
import DetailsSub from "./detailsSubheading.jsx";
import Popular from "./popular.jsx";
import PhotoBase from "./photoBase.jsx";
import MenuSection from "./menuSection.jsx";
import Reviews from './reviews.jsx';
import Description from './description.jsx';
import TitleHeading from './titleHeading.jsx';
import TagsSubheading from './tagsSubheading.jsx';
import Reservations from './reservations.jsx';
import Orders from './orders.jsx';
const axios = require("axios");

class Eatery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: "",
      name: "",
      description: "",
      cuisine: "",
      menuOne: "",
      menuTwo: "",
      menuThree: "",
      menuFour: "",
      menuFive: "",
      cross_street: "",
      neighborhood: "",
      hours: "",
      style: "",
      dress: "",
      parking: "",
      transit: "",
      payment: "",
      chef: "",
      details: "",
      url: "",
      phone: "",
      parties: "",
      party_contact: "",
      special: "",
      reviewNum: "0 reviews",
      starAvg: 0,
      tags: [],
      cost: "$30 and under",
    };
  }

  componentDidMount() {
    axios
      .get(process.env.DEV_RESTAURANT_URL, { crossdomain: true })
      .then((res) => {
        // console.log('in EATERY:', res.data);
        var restaurantID = res.data.ID;
        this.setState({
          ID: restaurantID,
          name: res.data.name,
          description: res.data.description,
          cuisine: res.data.cuisine,  
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
        window.history.pushState("string", "Title", `/restaurants/${restaurantID}`);
        return restaurantID;
      })
      .then(
        (restaurantID) =>
          axios.get(process.env.DEV_REVIEWS_URL + restaurantID + '/reviews', {
            crossdomain: true,
          })
      )
      .then((res) => {
        console.log('reviews api response:', res.data);
        var totalRev = res.data.length;
        var revText = "";
        if (totalRev === 0) {
          revText = "No reviews";
        } else if (totalRev === 1) {
          revText = "1 review";
        } else if (totalRev > 1) {
          revText = totalRev.toString() + " Reviews";
        }
        var starSum = 0;
        var tagStash = {};
        res.data.forEach((element) => {
          starSum += element.overallScore;
        });
        var avgStars = starSum / totalRev;
        res.data.forEach((element) => {
          var tagParse = element.tags.split(", ");
          tagParse.forEach((item) => {
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
          tagSort.sort(function (a, b) {
            return a[1] - b[1];
          });
          for (var x = 0; x < 3; x++) {
            tagsRender.push(tagSort[x][0]);
          }
        }
        this.setState({
          reviewNum: revText,
          starAvg: avgStars,
          tags: tagsRender
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
      cuisine: this.state.cuisine,
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

    const mainPageStyles = {
      transform: "translateY(-50px)", 
      minWidth: "100%", 
      backgroundColor: "transparent", 
      display: "flex",
      justifyContent: "space-between",
      zIndex: "100",
    };

    const restaurantPageStyles = {
      // backgroundColor: "red",
      width: "50%",
      flex: "1 1 50%",
      marginLeft: "75px",
      marginRight: "75px",
    };

    const venueColumnStyles = {
      flex: "1 1 25%",
      marginRight: "75px",
    };


    return (
      <Container fluid="true">
        <Heading />
        <PhotoHeading className="position-relative"/>
        <Container style={mainPageStyles} fluid="true">
          <Container style={restaurantPageStyles}>
            <Tabs>
              <div label="Overview" href="#overview" eventKey="1">Overview</div>
              <div label="Photos" href="#photos" eventKey="2">Photos</div>
              <div label="Popular dishes" href="#popular" eventKey="3">Popular dishes</div>
              <div label="Menu" href="#menu" eventKey="4">Menu</div>
              <div label="Reviews" href="#reviews" eventKey="5">Reviews</div>   
            </Tabs>
            <Container fluid="true" data-bs-spy="scroll" data-bs-target="#restaurant-page-nav" data-bs-offset="0" tabIndex="0">
              <Container style={{ margin: "10px 8px 16px 8px" }} fluid="true">
                <TitleHeading name={this.state.name} />
                <DetailsSub rev={this.state.reviewNum} starz={this.state.starAvg} tagz={this.state.tags} cuisine={this.state.cuisine} />
                <TagsSubheading tagz={this.state.tags} fare={this.state.style} />
              </Container> 
              <Description description={this.state.description} />
              <PhotoBase />
              <Popular />
              <MenuSection 
                menu1={this.state.menuOne} 
                menu2={this.state.menuTwo} 
                menu3={this.state.menuThree} 
                menu4={this.state.menuFour} 
                menu5={this.state.menuFive}   
                />
              <Reviews />
            </Container>
          </Container>

          <Container style={venueColumnStyles}>
            <Reservations />
            <Orders />
            <VenueDetails {...minutiae} />
          </Container>
        </Container>
      </Container>
    );
  }
}

export default Radium(Eatery);