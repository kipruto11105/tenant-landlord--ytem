// LandlordList.js
import React, { useState } from 'react';
import { Table, Button, Form, Row, Col } from 'react-bootstrap';

const LandlordList = ({ landlords, setLandlords }) => {
  const [landlordName, setLandlordName] = useState('');

  const addLandlord = () => {
    setLandlords([...landlords, landlordName]);
    setLandlordName('');
  };

  const removeLandlord = (index) => {
    setLandlords(landlords.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2 className="navFont mb-4">Landlords</h2>
      <Form className="mb-3">
        <Row>
          <Col md={8}>
            <Form.Control
              type="text"
              placeholder="Add Landlord"
              value={landlordName}
              onChange={(e) => setLandlordName(e.target.value)}
            />
          </Col>
          <Col md={4}>
            <Button onClick={addLandlord} className="w-100">Add Landlord</Button>
          </Col>
        </Row>
      </Form>
      <Table striped bordered hover className="shadow">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {landlords.map((landlord, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{landlord}</td>
              <td>
                <Button variant="danger" onClick={() => removeLandlord(index)}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default LandlordList;