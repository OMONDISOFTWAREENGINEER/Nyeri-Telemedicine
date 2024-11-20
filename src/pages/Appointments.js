// src/pages/Appointments.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Badge } from 'react-bootstrap';
import { FaCalendarAlt, FaClock, FaUserMd, FaNotesMedical } from 'react-icons/fa';

const Appointments = () => {
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("Your appointment has been scheduled successfully!");
    setDoctor('');
    setDate('');
    setTime('');
    setReason('');
  };

  return (
    <Container fluid className="py-5 bg-light">
      <Row className="justify-content-center mb-4">
        <Col md={8} className="text-center">
          <h2 className="mb-3 text-primary">
            <FaCalendarAlt className="me-2" />
            Schedule Appointment
          </h2>
          <p className="text-muted mb-4">
            Book a consultation with our experienced healthcare providers
          </p>
          {successMessage && (
            <div className="alert alert-success d-flex align-items-center" role="alert">
              <FaCalendarAlt className="me-2" />
              {successMessage}
            </div>
          )}
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="border-0 shadow-lg">
            <Card.Header className="bg-primary text-white p-4">
              <h4 className="mb-0">Appointment Details</h4>
            </Card.Header>
            <Card.Body className="p-4">
              <Form onSubmit={handleAppointmentSubmit}>
                <Form.Group controlId="formDoctor" className="mb-4">
                  <Form.Label className="d-flex align-items-center">
                    <FaUserMd className="me-2" />
                    Select Doctor
                  </Form.Label>
                  <Form.Select 
                    value={doctor} 
                    onChange={(e) => setDoctor(e.target.value)} 
                    required
                    className="form-control-lg"
                  >
                    <option value="">Choose a doctor...</option>
                    <option value="Dr. Smith">Dr. Smith - Cardiologist</option>
                    <option value="Dr. Jane Doe">Dr. Jane Doe - Pediatrician</option>
                    <option value="Dr. Robert Brown">Dr. Robert Brown - General Physician</option>
                  </Form.Select>
                </Form.Group>

                <Row className="mb-4">
                  <Col md={6}>
                    <Form.Group controlId="formDate">
                      <Form.Label className="d-flex align-items-center">
                        <FaCalendarAlt className="me-2" />
                        Appointment Date
                      </Form.Label>
                      <Form.Control 
                        type="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        required
                        className="form-control-lg"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formTime">
                      <Form.Label className="d-flex align-items-center">
                        <FaClock className="me-2" />
                        Appointment Time
                      </Form.Label>
                      <Form.Control 
                        type="time" 
                        value={time} 
                        onChange={(e) => setTime(e.target.value)} 
                        required
                        className="form-control-lg"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="formReason" className="mb-4">
                  <Form.Label className="d-flex align-items-center">
                    <FaNotesMedical className="me-2" />
                    Reason for Visit
                  </Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={4} 
                    placeholder="Please describe your symptoms or reason for consultation" 
                    value={reason} 
                    onChange={(e) => setReason(e.target.value)} 
                    required 
                    className="form-control-lg"
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    type="submit" 
                    className="py-3"
                  >
                    Schedule Appointment
                  </Button>
                </div>
              </Form>
            </Card.Body>
            <Card.Footer className="bg-light p-4">
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">
                  <FaClock className="me-2" />
                  Available Hours: 9:00 AM - 5:00 PM
                </small>
                <Badge bg="primary">Online Booking</Badge>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Appointments;