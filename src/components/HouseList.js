//HouseList.js
import React, { useState } from 'react';
import { Table, Button, Form, Row, Col } from 'react-bootstrap';

const HouseList = ({ houses, setHouses }) => {
  const [houseDetails, setHouseDetails] = useState('');

  const addHouse = () => {
    setHouses([...houses, { details: houseDetails }]);
    setHouseDetails('');
  };

  const removeHouse = (index) => {
    setHouses(houses.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2 className="navFont mb-4">Houses</h2>
      <Form className="mb-3">
        <Row>
          <Col md={8}>
            <Form.Control
              type="text"
              placeholder="House Details"
              value={houseDetails}
              onChange={(e) => setHouseDetails(e.target.value)}
            />
          </Col>
          <Col md={4}>
            <Button onClick={addHouse} className="w-100">Add House</Button>
          </Col>
        </Row>
      </Form>
      <Table striped bordered hover className="shadow">
        <thead>
          <tr>
            <th>#</th>
            <th>Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((house, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{house.details}</td>
              <td>
                <Button variant="danger" onClick={() => removeHouse(index)}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default HouseList;