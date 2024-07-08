import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Tabs, Tab, Table, Form, Button } from 'react-bootstrap';
import './LandlordDashboard.css'; // Make sure to create this CSS file

const LandlordDashboard = () => {
  const [tenants, setTenants] = useState(JSON.parse(localStorage.getItem('tenants')) || []);
  const [houses, setHouses] = useState(JSON.parse(localStorage.getItem('houses')) || []);
  const [payments, setPayments] = useState(JSON.parse(localStorage.getItem('payments')) || []);

  const [houses, setHouses] = useState(JSON.parse(localStorage.getItem('houses')) || [
    { id: 1, details: "House 1", imageUrl: "/path/to/house1.jpg" },
    { id: 2, details: "House 2", imageUrl: "/path/to/house2.jpg" },
    
  ]);
  const [newTenant, setNewTenant] = useState({ name: '', house: '', username: '', password: '' });

  useEffect(() => {
    localStorage.setItem('tenants', JSON.stringify(tenants));
    localStorage.setItem('houses', JSON.stringify(houses));
    localStorage.setItem('payments', JSON.stringify(payments));
  }, [tenants, houses, payments]);

  const handleAddTenant = (e) => {
    e.preventDefault();
    setTenants([...tenants, { ...newTenant, status: 'Not Paid' }]);
    setNewTenant({ name: '', house: '', username: '', password: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTenant({ ...newTenant, [name]: value });
  };

  return (
    <Container className="dashboard-container">
      <h1 className="dashboard-title">Landlord Dashboard</h1>
      <Tabs defaultActiveKey="tenants" id="landlord-dashboard-tabs" className="mb-3">
        <Tab eventKey="tenants" title="Tenants">
          <Form onSubmit={handleAddTenant} className="add-tenant-form">
            <Row>
              <Col md={3}>
                <Form.Control type="text" placeholder="Name" name="name" value={newTenant.name} onChange={handleInputChange} />
              </Col>
              <Col md={3}>
                <Form.Control type="text" placeholder="House" name="house" value={newTenant.house} onChange={handleInputChange} />
              </Col>
              <Col md={2}>
                <Form.Control type="text" placeholder="Username" name="username" value={newTenant.username} onChange={handleInputChange} />
              </Col>
              <Col md={2}>
                <Form.Control type="password" placeholder="Password" name="password" value={newTenant.password} onChange={handleInputChange} />
              </Col>
              <Col md={2}>
                <Button type="submit" className="w-100">Add Tenant</Button>
              </Col>
            </Row>
          </Form>
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>House</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tenants.map((tenant, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{tenant.name}</td>
                  <td>{tenant.house}</td>
                  <td>{tenant.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="houses" title="Houses">
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Image</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      {houses.map((house, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>
            {house.imageUrl && (
              <img 
                src={house.imageUrl} 
                alt={`House ${index + 1}`} 
                style={{width: '100px', height: 'auto'}} 
              />
            )}
          </td>
          <td>{house.details}</td>
        </tr>
      ))}
    </tbody>
  </Table>
</Tab>
        <Tab eventKey="payments" title="Payments">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Tenant</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{payment.amount}</td>
                  <td>{payment.date}</td>
                  <td>{payment.tenant}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default LandlordDashboard;