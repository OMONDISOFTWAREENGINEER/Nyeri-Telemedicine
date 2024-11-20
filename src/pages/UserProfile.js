// src/pages/UserProfile.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { FaUserCircle, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit, FaSave } from 'react-icons/fa';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({});

  // Fetch the user data on component mount
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`/api/users/${userId}/profile`);
        setUser(response.data);
        setUpdatedUser(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [userId]);

  // Toggle edit mode
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setUpdatedUser(user); // Reset edits if cancelled
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prev) => ({ ...prev, [name]: value }));
  };

  // Save changes
  const handleSave = async () => {
    try {
      const response = await axios.put(`/api/users/${userId}/profile`, updatedUser);
      setUser(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <Container fluid className="py-5 min-vh-100" style={{ background: 'linear-gradient(135deg, #f3f9ff 0%, #e0f4f9 100%)' }}>
      <Row className="justify-content-center">
        <Col md={8} lg={6} xl={5}>
          <Card className="border-0 shadow-sm" style={{ background: 'rgba(255, 255, 255, 0.85)', borderRadius: '16px' }}>
            <Card.Header className="bg-white text-center p-4 border-0">
              <FaUserCircle className="text-primary mb-3" size={45} />
              <h2>User Profile</h2>
            </Card.Header>
            <Card.Body className="p-4">
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={3}><FaUserCircle className="me-2" />Name</Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      name="name"
                      value={isEditing ? updatedUser.name : user.name}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={3}><FaEnvelope className="me-2" />Email</Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="email"
                      name="email"
                      value={isEditing ? updatedUser.email : user.email}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={3}><FaPhone className="me-2" />Phone</Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={isEditing ? updatedUser.phone : user.phone}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={3}><FaMapMarkerAlt className="me-2" />Address</Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      name="address"
                      value={isEditing ? updatedUser.address : user.address}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </Col>
                </Form.Group>
              </Form>
              <div className="d-grid gap-2">
                {isEditing ? (
                  <Button variant="primary" onClick={handleSave}>
                    <FaSave className="me-2" /> Save
                  </Button>
                ) : (
                  <Button variant="outline-primary" onClick={handleEditToggle}>
                    <FaEdit className="me-2" /> Edit Profile
                  </Button>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
