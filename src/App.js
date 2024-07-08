import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import LandlordDashboard from './components/LandlordDashboard';
import TenantDashboard from './components/TenantDashboard';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { AuthContextProvider, AuthContext } from './contexts/AuthContext';

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Navigation />
        <Container className="my-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<DashboardRoute />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </AuthContextProvider>
  );
};

const DashboardRoute = () => {
  const { user } = React.useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return user.role === 'landlord' ? <LandlordDashboard /> : <TenantDashboard />;
};

export default App;
