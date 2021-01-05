import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Provided from '../provided_by.png';

// class Menu extends Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedKey: 1,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(id) {
//     this.setState({
//       selectedKey: id
//     });
//   }

function Menu({
  menu1, menu2
}) {
  return (
    <Container>
      <Nav
        // onSelect={selectedKey => handleClick({ selectedKey })}
      >
        <Nav.Item>
          <Nav.Link eventKey="1" href="/home">Lunch</Nav.Link>
          {menu1}
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2">Dinner</Nav.Link>
          {menu2}
        </Nav.Item>
      </Nav>
      <hr />
      <Row>
        <Col sm={8}>
          <p>Last updated:</p>
        </Col>
        <Col sm={4}>
          <img src={Provided} width="200" alt=''/>
        </Col>
      </Row>
    </Container>
  );
}
// }


export default Menu;
