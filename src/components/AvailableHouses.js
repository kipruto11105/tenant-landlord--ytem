import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

// Import your images
import apartment1 from '../images/apartment1.jpeg';
import house1 from '../images/house1.jpg';
import house13 from '../images/house2.jpg';  
import house2 from '../images/house3.jpg';
import house3 from '../images/house4.jpg';
import house4 from '../images/house5.jpg';
import house5 from '../images/house6.jpg';
import house6 from '../images/house7.jpg';
import house7 from '../images/house8.jpg';
import house8 from '../images/house9.jpg';
import house9 from '../images/house10.jpg';
import house10 from '../images/house11.jpg';
import house11 from '../images/house12.jpg';
import house12 from '../images/house13.jpg';



const mockHouses = [
  { id: 1, title: "Cozy Apartment", description: "A lovely 1-bedroom apartment", price: 1000, image: apartment1 },
  { id: 2, title: "Spacious House", description: "3-bedroom house with a garden", price: 1500, image: house1 },
  { id: 4, title: "Studio Loft", description: "Modern studio in downtown", price: 800, image: house2 },
  { id: 5, title: "Studio Loft", description: "Modern studio in downtown", price: 800, image: house3 },
  { id: 6, title: "Studio Loft", description: "Modern studio in downtown", price: 800, image: house4 },
  { id: 7, title: "Studio Loft", description: "Modern studio in downtown", price: 800, image: house5 },
  { id: 8, title: "Studio Loft", description: "Modern studio in downtown", price: 800, image: house6 },
  { id: 9, title: "Studio Loft", description: "Modern studio in downtown", price: 800, image: house7 },
  { id: 10, title: "Studio Loft", description: "Modern studio in downtown", price: 800, image: house8 },
  { id: 11, title: "Studio Loft", description: "Modern studio in downtown", price: 800, image: house9 },
  { id: 12, title: "Studio Loft", description: "Modern studio in downtown", price: 800, image: house10 },

];


function AvailableHouses() {
  return (
    <div id="available-houses">
      <h2 className="page-title">Available Houses</h2>
      <Row>
        {mockHouses.map(house => (
          <Col key={house.id} md={4} className="mb-4">
            <Card className="card-hover">
              <Card.Img variant="top" src={house.image} />
              <Card.Body>
                <Card.Title>{house.title}</Card.Title>
                <Card.Text>{house.description}</Card.Text>
                <Card.Text>
                  <strong>${house.price}</strong> per month
                </Card.Text>
                <Button variant="primary" className="btn-custom">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default AvailableHouses;