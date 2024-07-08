import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col, Tabs, Tab, Table } from 'react-bootstrap';
import { AuthContext } from '../contexts/AuthContext';

const TenantDashboard = () => {
  const { user } = useContext(AuthContext);
  const [payments, setPayments] = useState([]);
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    if (user) {
      const allPayments = JSON.parse(localStorage.getItem('payments')) || [];
      const allHouses = JSON.parse(localStorage.getItem('houses')) || [];
      setPayments(allPayments.filter(payment => payment.tenant === user.username));
      setHouses(allHouses.filter(house => house.tenant === user.username));
    }
  }, [user]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Tenant Dashboard</h1>
        </Col>
      </Row>
      <Tabs defaultActiveKey="houses" id="tenant-dashboard-tabs">
        <Tab eventKey="houses" title="Houses">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {houses.map((house, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
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
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{payment.amount}</td>
                  <td>{payment.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default TenantDashboard;
