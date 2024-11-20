// src/pages/Register.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const navigate = useNavigate();

  const checkPasswordStrength = (pass) => {
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
    const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    
    if (strongRegex.test(pass)) {
      setPasswordStrength('strong');
    } else if (mediumRegex.test(pass)) {
      setPasswordStrength('medium');
    } else {
      setPasswordStrength('weak');
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Enhanced validation
    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if (passwordStrength === 'weak') {
      setError("Please choose a stronger password.");
      return;
    }

    // Clear any previous error messages
    setError('');

    try {
      // Send a POST request to the registration endpoint
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        username,
        email,
        password
      });

      // If registration is successful, show a success toast and navigate to login
      toast.success('Registration successful! You can now log in.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      
      // Wait for toast to finish, then navigate
      setTimeout(() => navigate('/login'), 3500);

    } catch (error) {
      // If there's an error, show an error toast
      toast.error('Registration failed. Please try again.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      console.error('Error during registration:', error);
    }
  };

  const getPasswordStrengthColor = () => {
    switch(passwordStrength) {
      case 'strong': return 'success';
      case 'medium': return 'warning';
      case 'weak': return 'danger';
      default: return 'secondary';
    }
  };

  return (
    <Container fluid className="py-5 bg-light min-vh-100">
      <ToastContainer /> {/* Ensure ToastContainer is rendered here */}
      
      <Row className="justify-content-center">
        <Col md={8} lg={6} xl={5}>
          <Card className="border-0 shadow-lg">
            <Card.Header className="bg-primary text-white text-center p-4">
              <h2 className="mb-0">Create Account</h2>
              <p className="mt-2 mb-0">Join our healthcare community</p>
            </Card.Header>
            <Card.Body className="p-4">
              {error && (
                <Alert variant="danger" className="d-flex align-items-center">
                  <FaExclamationTriangle className="me-2" />
                  {error}
                </Alert>
              )}
              <Form onSubmit={handleRegister}>
              
                <Form.Group controlId="formEmail" className="mb-4">
                  <Form.Label className="d-flex align-items-center">
                    <FaEnvelope className="me-2" />
                    Email Address
                  </Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control-lg"
                  />
                </Form.Group>
                <Form.Group controlId="formUsername" className="mb-4">
                  <Form.Label className="d-flex align-items-center">
                    <FaUser className="me-2" />
                    Username
                  </Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Choose a username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control-lg"
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-4">
                  <Form.Label className="d-flex align-items-center">
                    <FaLock className="me-2" />
                    Password
                  </Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Create a password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="form-control-lg"
                  />
                  {password && (
                    <div className="mt-2">
                      <small className={`text-${getPasswordStrengthColor()}`}>
                        Password Strength: {passwordStrength.charAt(0).toUpperCase() + passwordStrength.slice(1)}
                      </small>
                      <div className="progress" style={{ height: '5px' }}>
                        <div 
                          className={`progress-bar bg-${getPasswordStrengthColor()}`}
                          style={{ width: passwordStrength === 'strong' ? '100%' : passwordStrength === 'medium' ? '66%' : '33%' }}
                        />
                      </div>
                    </div>
                  )}
                </Form.Group>

                <Form.Group controlId="formConfirmPassword" className="mb-4">
                  <Form.Label className="d-flex align-items-center">
                    <FaCheckCircle className="me-2" />
                    Confirm Password
                  </Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="form-control-lg"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Check 
                    type="checkbox"
                    id="termsCheck"
                    label="I agree to the Terms & Conditions and Privacy Policy"
                    required
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button 
                    variant="primary" 
                    type="submit" 
                    size="lg"
                    className="py-3"
                  >
                    Create Account
                  </Button>
                </div>
              </Form>
            </Card.Body>
            <Card.Footer className="bg-light text-center p-4">
              <p className="mb-0">
                Already have an account?{' '}
                <Link to="/login" className="text-primary text-decoration-none">
                  Sign In
                </Link>
              </p>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
