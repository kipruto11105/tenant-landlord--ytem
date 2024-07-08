// Payments.js
import React, { useState } from 'react';
import { Table, Button, Form, Row, Col } from 'react-bootstrap';

const Payments = ({ payments, setPayments }) => {
  const [tenant, setTenant] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('Not Paid');

  const addPayment = () => {
    setPayments([...payments, { tenant, amount, status }]);
    setTenant('');
    setAmount('');
    setStatus('Not Paid');
  };

  const removePayment = (index) => {
    setPayments(payments.filter((_, i) => i !== index));
  };

  const updatePaymentStatus = (index, newStatus) => {
    const updatedPayments = payments.map((payment, i) => i === index ? { ...payment, status: newStatus } : payment);
    setPayments(updatedPayments);
  };

  return (
    <div>
      <h2 className="navFont mb-4">Payments</h2>
      <Form className="mb-3">
        <Row>
          <Col md={4}>
            <Form.Control
              type="text"
              placeholder="Tenant Name"
              value={tenant}
              onChange={(e) => setTenant(e.target.value)}
            />
          </Col>
          <Col md={4}>
            <Form.Control
              type="text"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Col>
          <Col md={4}>
            <Button onClick={addPayment} className="w-100">Add Payment</Button>
          </Col>
        </Row>
      </Form>
      <Table striped bordered hover className="shadow">
        <thead>
          <tr>
            <th>#</th>
            <th>Tenant</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{payment.tenant}</td>
              <td>{payment.amount}</td>
              <td>{payment.status}</td>
              <td>
                <Button
                  variant={payment.status === 'Paid' ? 'success' : 'warning'}
                  onClick={() => updatePaymentStatus(index, payment.status === 'Paid' ? 'Not Paid' : 'Paid')}
                  className="me-2"
                >
                  {payment.status === 'Paid' ? 'Mark as Unpaid' : 'Mark as Paid'}
                </Button>
                <Button variant="danger" onClick={() => removePayment(index)}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Payments;