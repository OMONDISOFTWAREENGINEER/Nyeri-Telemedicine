// src/pages/Login.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Alert, Toast } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaExclamationTriangle, FaHeartbeat } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false); // State for controlling the toast
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: username,
        password: password,
      });

      const token = response.data.user.token;

      if (token) {
        login(token);
        navigate('/dashboard');
      } else {
        setErrorMessage('No token received.');
        setShowToast(true); // Show toast on error
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
      setShowToast(true); // Show toast on error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container fluid className="py-5 min-vh-100" style={{ 
      background: 'linear-gradient(135deg, #f6f9fc 0%, #e9f1f9 100%)',
      animation: 'gradientAnimation 15s ease infinite'
    }}>
      <Row className="justify-content-center">
        <Col md={8} lg={6} xl={4}>
          <Card className="border-0 shadow-sm" style={{ 
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(8px)'
          }}>
            <Card.Header className="bg-white text-center p-4 border-0">
              <FaHeartbeat className="text-primary mb-3" style={{ color: '#4a90e2' }} size={35} />
              <h2 className="mb-0" style={{ color: '#2c3e50' }}>Welcome Back</h2>
              <p className="mt-2 mb-0" style={{ color: '#7f8c8d' }}>Access your healthcare portal</p>
            </Card.Header>

            <Card.Body className="p-4">
              {errorMessage && (
                <Alert variant="danger" className="d-flex align-items-center bg-light-danger">
                  <FaExclamationTriangle className="me-2" />
                  {errorMessage}
                </Alert>
              )}

              <Form onSubmit={handleLogin} className="login-form">
                <Form.Group controlId="formUsername" className="mb-4">
                  <Form.Label className="d-flex align-items-center">
                    <FaEnvelope className="me-2" style={{ color: '#4a90e2' }} />
                    Email Address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control-lg"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-4">
                  <Form.Label className="d-flex align-items-center">
                    <FaLock className="me-2" style={{ color: '#4a90e2' }} />
                    Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control-lg"
                    required
                  />
                </Form.Group>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <Form.Check
                    type="checkbox"
                    id="rememberMe"
                    label="Remember me"
                    style={{ color: '#7f8c8d' }}
                  />
                  <Link to="/forgot-password" className="text-decoration-none" style={{ color: '#4a90e2' }}>
                    Forgot Password?
                  </Link>
                </div>

                <div className="d-grid gap-2">
                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    className="py-3 custom-button"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Signing In...' : 'Sign In'}
                  </Button>
                </div>
              </Form>
            </Card.Body>

            <Card.Footer className="bg-white text-center p-4 border-0">
              <p className="mb-0" style={{ color: '#7f8c8d' }}>
                Don't have an account?{' '}
                <Link to="/register" className="text-decoration-none" style={{ color: '#4a90e2' }}>
                  Create Account
                </Link>
              </p>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      {/* Toast component for showing error messages */}
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          minWidth: '200px',
          backgroundColor: '#f8d7da',
          color: '#721c24',
        }}
      >
        <Toast.Header closeButton={false}>
          <strong className="me-auto">Login Error</strong>
        </Toast.Header>
        <Toast.Body>{errorMessage}</Toast.Body>
      </Toast>

      <style>
        {`
          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .login-form .form-control {
            border-radius: 10px;
            border: 1px solid #e0e6ed;
            background: rgba(255, 255, 255, 0.9);
            transition: all 0.3s ease;
            padding: 12px 16px;
            color: #2c3e50;
          }
          .login-form .form-control:focus {
            box-shadow: 0 0 0 0.25rem rgba(74, 144, 226, 0.1);
            border-color: #4a90e2;
            background: #ffffff;
          }
          .custom-button {
            background: linear-gradient(45deg, #4a90e2, #5ca5ff);
            border: none;
            border-radius: 10px;
            transition: all 0.3s ease;
            font-weight: 500;
          }
          .custom-button:hover {
            background: linear-gradient(45deg, #3a80d2, #4a90e2);
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(74, 144, 226, 0.15);
          }
          .custom-button:active {
            transform: translateY(0);
          }
          .card {
            border-radius: 16px;
            transition: all 0.3s ease;
          }
          .card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          }
          .bg-light-danger {
            background-color: rgba(255, 235, 238, 0.8) !important;
            border: 1px solid rgba(220, 53, 69, 0.1);
            color: #dc3545;
          }
          .form-check-input:checked {
            background-color: #4a90e2;
            border-color: #4a90e2;
          }
        `}
      </style>
    </Container>
  );
};

export default Login;
