// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaPhoneAlt, FaStethoscope } from 'react-icons/fa';

const Header = () => (
  <Navbar expand="lg" sticky="top" style={{ background: 'linear-gradient(45deg, #4a90e2, #1e3a8a)', padding: '1rem 0' }}>
    <Container>
      <Navbar.Brand as={Link} to="/" style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#fff' }}>
        Outspan National Hospital 
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" style={navLinkStyles}>
            <FaHome className="me-1" /> Home
          </Nav.Link>
          <Nav.Link as={Link} to="/services" style={navLinkStyles}>
            <FaStethoscope className="me-1" /> Services
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" style={navLinkStyles}>
            <FaPhoneAlt className="me-1" /> Contact
          </Nav.Link>
        </Nav>
        {/* Uncomment these lines to show Login and Sign Up buttons */}
        {/* <Button as={Link} to="/login" variant="outline-light" className="me-2 custom-button">Login</Button>
        <Button as={Link} to="/register" variant="light" className="custom-button">Sign Up</Button> */}
      </Navbar.Collapse>
    </Container>
    <style>
      {`
        .custom-button {
          background-color: rgba(255, 255, 255, 0.1);
          border: 1px solid #fff;
          color: #fff;
          transition: all 0.3s ease;
        }
        .custom-button:hover {
          background-color: #ffffff;
          color: #4a90e2;
        }
      `}
    </style>
  </Navbar>
);

const navLinkStyles = {
  color: '#ffffff',
  fontSize: '1.1rem',
  fontWeight: '500',
  padding: '0.5rem 1rem',
  transition: 'color 0.3s ease',
};

export default Header;
