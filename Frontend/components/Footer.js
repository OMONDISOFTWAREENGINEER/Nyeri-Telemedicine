// src/components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-dark text-white py-4">
    <Container className="text-center">
      <p>&copy; {new Date().getFullYear()} Outspan National Hospital Telemedicine. All Rights Reserved.</p>
    </Container>
  </footer>
);

export default Footer;
