// src/pages/Support.js
import React, { useRef } from 'react';
import { Container, Row, Col, Card, Button, Form, Badge } from 'react-bootstrap';
import { FaHeadset, FaPhoneAlt, FaEnvelope, FaClock, FaUserMd } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Support = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ebp62no', 'template_gk7ekym', form.current, 'Su9XMyETgOapE2iIl')
      .then(
        () => {
          toast.success('Your message has been sent successfully!');
          form.current.reset();
        },
        (error) => {
          toast.error('Failed to send the message. Please try again later.');
          console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <Container fluid className="py-5 bg-light min-vh-100">
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Row className="justify-content-center mb-4">
        <Col md={8} className="text-center">
          <h2 className="mb-3 text-primary">
            <FaHeadset className="me-2" />
            24/7 Support
          </h2>
          <p className="text-muted mb-4">
            Get immediate assistance from our support team. We're here to help you anytime!
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="border-0 shadow-lg">
            <Card.Header className="bg-primary text-white p-4">
              <h4 className="mb-0">Contact Support</h4>
            </Card.Header>
            <Card.Body className="p-4">
              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group controlId="formName" className="mb-4">
                  <Form.Label className="d-flex align-items-center">
                    <FaUserMd className="me-2" />
                    Your Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                    name="user_name"
                    className="form-control-lg"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-4">
                  <Form.Label className="d-flex align-items-center">
                    <FaEnvelope className="me-2" />
                    Email Address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email address"
                    name="user_email"
                    className="form-control-lg"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-4">
                  <Form.Label className="d-flex align-items-center">
                    <FaPhoneAlt className="me-2" />
                    Message
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Describe your issue or question"
                    name="message"
                    className="form-control-lg"
                    required
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    className="py-3"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </Card.Body>
            <Card.Footer className="bg-light p-4">
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">
                  <FaClock className="me-2" />
                  Available 24/7
                </small>
                <Badge bg="primary">Support Team</Badge>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Support;
