import React, { useState } from 'react';
import { Table, Button, Form, Row, Col } from 'react-bootstrap';

const TenantList = ({ tenants, setTenants }) => {
  const [tenantName, setTenantName] = useState('');
  const [houseDetails, setHouseDetails] = useState('');

  const addTenant = () => {
    setTenants([...tenants, { name: tenantName, house: houseDetails, status: 'Not Paid' }]);
    setTenantName('');
    setHouseDetails('');
  };

  const removeTenant = (index) => {
    setTenants(tenants.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2 className="navFont mb-4">Tenants</h2>
      <Form className="mb-3">
        <Row>
          <Col md={4}>
            <Form.Control
              type="text"
              placeholder="Tenant Name"
              value={tenantName}
              onChange={(e) => setTenantName(e.target.value)}
            />
          </Col>
          <Col md={4}>
            <Form.Control
              type="text"
              placeholder="House Details"
              value={houseDetails}
              onChange={(e) => setHouseDetails(e.target.value)}
            />
          </Col>
          <Col md={4}>
            <Button onClick={addTenant} className="w-100">Add Tenant</Button>
          </Col>
        </Row>
      </Form>
      <Table striped bordered hover className="shadow">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>House Details</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tenants.map((tenant, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{tenant.name}</td>
              <td>{tenant.house}</td>
              <td>{tenant.status}</td>
              <td>
                <Button variant="danger" onClick={() => removeTenant(index)}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TenantList;