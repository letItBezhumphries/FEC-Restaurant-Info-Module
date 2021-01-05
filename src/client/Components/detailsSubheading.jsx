import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Comment from '../comment.png';
import Price from '../priceIcon.png';
import Utensils from '../utensilIcon.png';

function DetailsSub() {
  return (
    <Container>
      <Row>
        <Col xs="2"><p>Stars Placeholder</p></Col>
        <Col xs="2">
          <p>
            <img src={Comment} height="24" width="24"  alt=''/>
Reviews
          </p>
        </Col>
        <Col xs="2">
          <p>
            <img src={Price} height="24" width="24"  alt=''/>
            {' '}
Price
          </p>
        </Col>
        <Col xs="2">
          <p>
            <img src={Utensils} height="24" width="24"  alt=''/>
            {' '}
Cuisine
          </p>
        </Col>
      </Row>
      <Row>
        <p>Top Tags</p>
        <ButtonToolbar className="p-2">
          <Button variant="outline-secondary" href="/">Tag1</Button>
          <Button variant="outline-secondary" href="/">Tag2</Button>
          <Button variant="outline-secondary" href="/">Tag3</Button>
        </ButtonToolbar>
      </Row>
    </Container>
  );
}

export default DetailsSub;
