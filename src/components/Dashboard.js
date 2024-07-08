
//Dashboard.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import TenantList from './TenantList';
import LandlordList from './LandlordList';
import HouseList from './HouseList';
import Payments from './Payments';

const Dashboard = () => {
  const [tenants, setTenants] = useState(JSON.parse(localStorage.getItem('tenants')) || []);
  const [landlords, setLandlords] = useState(JSON.parse(localStorage.getItem('landlords')) || []);
  const [houses, setHouses] = useState(JSON.parse(localStorage.getItem('houses')) || []);
  const [payments, setPayments] = useState(JSON.parse(localStorage.getItem('payments')) || []);

  useEffect(() => {
    localStorage.setItem('tenants', JSON.stringify(tenants));
  }, [tenants]);

  useEffect(() => {
    localStorage.setItem('landlords', JSON.stringify(landlords));
  }, [landlords]);

  useEffect(() => {
    localStorage.setItem('houses', JSON.stringify(houses));
  }, [houses]);

  useEffect(() => {
    localStorage.setItem('payments', JSON.stringify(payments));
  }, [payments]);

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Dashboard</h1>
        </Col>
      </Row>
      <Tabs defaultActiveKey="tenants" id="dashboard-tabs">
        <Tab eventKey="tenants" title="Tenants">
          <TenantList tenants={tenants} setTenants={setTenants} />
        </Tab>
        <Tab eventKey="landlords" title="Landlords">
          <LandlordList landlords={landlords} setLandlords={setLandlords} />
        </Tab>
        <Tab eventKey="houses" title="Houses">
          <HouseList houses={houses} setHouses={setHouses} />
        </Tab>
        <Tab eventKey="payments" title="Payments">
          <Payments payments={payments} setPayments={setPayments} />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Dashboard;
