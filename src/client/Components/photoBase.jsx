import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PhotoBase() {
  return (
    <Container>
      <Row>
        <Col sm={1}>
          <p>Picture 1</p>
          <p>Picture 2</p>
        </Col>
        <Col sm={2}>
          <p>Picture 3</p>
        </Col>
        <Col sm={1}>
          <p>Picture 4</p>
          <p>Picture 5</p>
          <p>Picture 6</p>
        </Col>
        <Col sm={1}>
          <p>Picture 7</p>
          <p>Picture 8</p>
          <p>Picture 9</p>
        </Col>
      </Row>
    </Container>
  );
}

export default PhotoBase;
