import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <div className="splashPage1">
        <div className="logo shadow">
          <h2 className="centerLogo">Tenant-Landlord Management</h2>
          
          <Button as={Link} to="/login" className="enterButton">Enter</Button>
        </div>
      </div>
      <div className="splashPage2">
        <h3 className='centerlogo'>Simple and elegant</h3>
      </div>
    </>
  );
};

export default Home;