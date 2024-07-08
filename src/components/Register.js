import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('tenant'); // Default role is tenant
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some((u) => u.username === username);
    
    if (userExists) {
      alert('Username already exists');
    } else {
      const newUser = { username, password, role };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registration successful');
      navigate('/login');
    }
  };

  return (
    <Container>
      <div className="login-form">
        <h2>Register</h2>
        <Form onSubmit={handleRegister}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formRole">
            <Form.Label>Role</Form.Label>
            <Form.Control as="select" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="tenant">Tenant</option>
              <option value="landlord">Landlord</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Register;
