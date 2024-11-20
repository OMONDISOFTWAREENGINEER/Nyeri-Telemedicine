// src/pages/Dashboard.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaVideo, FaCalendarAlt, FaFileAlt, FaUser, FaHeadset } from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      
      <Container className="dashboard-content">
        <Row className="justify-content-between mb-5 header-section">
          <Col lg={8}>
            <h2 className="welcome-text">Welcome to Your Healthcare Portal</h2>
            <p className="subtitle">Manage your healthcare journey with ease</p>
          </Col>
          <Col lg={4} className="text-end d-flex align-items-center justify-content-end">
            <Button variant="outline-light" className="logout-btn" onClick={handleLogout}>
              Sign Out
            </Button>
          </Col>
        </Row>

        <Row className="dashboard-cards">
          <Col lg={4} md={6} className="mb-4">
            <Card className="dashboard-card">
              <Card.Body>
                <div className="card-icon">
                  <FaVideo />
                </div>
                <Card.Title>Video Consultation</Card.Title>
                <Card.Text>
                  Connect with healthcare providers through secure video calls
                </Card.Text>
                <Button className="card-button" onClick={() => navigate('/video-consultation')}>
                  Start Session
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <Card className="dashboard-card">
              <Card.Body>
                <div className="card-icon">
                  <FaCalendarAlt />
                </div>
                <Card.Title>Appointments</Card.Title>
                <Card.Text>
                  Schedule and manage your upcoming appointments
                </Card.Text>
                <Button className="card-button" onClick={() => navigate('/appointments')}>
                  View Calendar
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <Card className="dashboard-card">
              <Card.Body>
                <div className="card-icon">
                  <FaFileAlt />
                </div>
                <Card.Title>Medical Records</Card.Title>
                <Card.Text>
                  Access your complete medical history securely
                </Card.Text>
                <Button className="card-button" onClick={() => navigate('/medical-records')}>
                  View Records
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <Card className="dashboard-card">
              <Card.Body>
                <div className="card-icon">
                  <FaUser />
                </div>
                <Card.Title>Profile Settings</Card.Title>
                <Card.Text>
                  Manage your personal information and preferences
                </Card.Text>
                <Button className="card-button" onClick={() => navigate('/profile')}>
                  Update Profile
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <Card className="dashboard-card">
              <Card.Body>
                <div className="card-icon">
                  <FaHeadset />
                </div>
                <Card.Title>24/7 Support</Card.Title>
                <Card.Text>
                  Get immediate assistance from our support team
                </Card.Text>
                <Button className="card-button" onClick={() => navigate('/support')}>
                  Get Help
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;