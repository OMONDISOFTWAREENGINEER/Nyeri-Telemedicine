// src/pages/ForgotPassword.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
      toast.success('Password reset link has been sent to your email.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setEmail('');
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred. Please try again.');
      toast.error('Failed to send reset link. Please check your email and try again.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container fluid className="py-5 min-vh-100" style={{
      background: 'linear-gradient(135deg, #f6f9fc 0%, #e9f1f9 100%)',
      animation: 'gradientAnimation 15s ease infinite'
    }}>
      <ToastContainer />
      <Row className="justify-content-center">
        <Col md={8} lg={6} xl={4}>
          <Card className="border-0 shadow-sm" style={{
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(8px)',
            borderRadius: '16px',
          }}>
            <Card.Header className="bg-white text-center p-4 border-0">
              <FaEnvelope className="text-primary mb-3" style={{ color: '#4a90e2' }} size={35} />
              <h2 className="mb-0" style={{ color: '#2c3e50' }}>Forgot Password</h2>
              <p className="mt-2 mb-0" style={{ color: '#7f8c8d' }}>Enter your email to reset your password</p>
            </Card.Header>

            <Card.Body className="p-4">
              {error && (
                <Alert variant="danger" className="d-flex align-items-center bg-light-danger">
                  {error}
                </Alert>
              )}
              <Form onSubmit={handleForgotPassword}>
                <Form.Group controlId="formEmail" className="mb-4">
                  <Form.Label className="d-flex align-items-center">
                    <FaEnvelope className="me-2" style={{ color: '#4a90e2' }} />
                    Email Address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control-lg"
                    required
                  />
                </Form.Group>
                
                <div className="d-grid gap-2">
                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    className="py-3 custom-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Reset Link'}
                    <FaPaperPlane className="ms-2" />
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <style>
        {`
          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .custom-button {
            background: linear-gradient(45deg, #4a90e2, #5ca5ff);
            border: none;
            border-radius: 10px;
            font-weight: 500;
          }
          .custom-button:hover {
            background: linear-gradient(45deg, #3a80d2, #4a90e2);
          }
          .card {
            transition: all 0.3s ease;
          }
          .card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          }
        `}
      </style>
    </Container>
  );
};

export default ForgotPassword;
