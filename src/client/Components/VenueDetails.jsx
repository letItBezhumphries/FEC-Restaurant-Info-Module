import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function VenueDetails({
  cross_street, neighborhood, hours, cuisine, style,
  dress, parking, transit, payment, chef, special, url, phone, details,
  parties, party_contact,
}) {
  return (
    <Container>
      <Row>
        <Col xs="12">
          <Card>
            <Card.Body>
              <Card.Title>Cross street</Card.Title>
              <Card.Text>{cross_street}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Neighborhood</Card.Title>
              <Card.Text>{neighborhood}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Hours of operation</Card.Title>
              <Card.Text>{hours}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Cuisines</Card.Title>
              <Card.Text>{cuisine}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Dining Style</Card.Title>
              <Card.Text>{style}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Dress Code</Card.Title>
              <Card.Text>{dress}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Parking</Card.Title>
              <Card.Text>{parking}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Transit</Card.Title>
              <Card.Text>{transit}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Payment options</Card.Title>
              <Card.Text>{payment}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Executive chef</Card.Title>
              <Card.Text>{chef}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Additional</Card.Title>
              <Card.Text>{special}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Website</Card.Title>
              <Card.Text>{url}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Phone number</Card.Title>
              <Card.Text>{phone}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Catering</Card.Title>
              <Card.Text>{details}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Private party facilities</Card.Title>
              <Card.Text>{parties}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Private party contact</Card.Title>
              <Card.Text>{party_contact}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default VenueDetails;
