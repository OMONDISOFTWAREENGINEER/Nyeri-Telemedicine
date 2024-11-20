import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FaComment } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Chatbot = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Email: ${email} and Message: ${message}`);
    setEmail('');
    setMessage('');
    handleClose();
  };

  return (
    <div className="chatbot">
      <Button
        variant="primary"
        size="lg"
        className="chatbot-btn rounded-circle"
        onClick={handleShow}
      >
        <FaComment size={30} />
      </Button>

      {/* Modal for Chatbot */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Telemedicine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Hi! How can I assist you today? Please provide your email and any questions.</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="How can we help you?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <style jsx>{`
        .chatbot-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background-color: #4CAF50; /* Telemedicine green */
          border: none;
          color: white;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
        .chatbot-btn:hover {
          background-color: #45a049; /* Darker green on hover */
        }
        .modal-header {
          background-color: #007bff; /* Telemedicine blue */
          color: white;
        }
        .modal-body {
          background-color: #f0f8ff; /* Light blue for a calming feel */
        }
        .form-control {
          border-radius: 20px; /* Rounded inputs for a soft look */
        }
      `}</style>
    </div>
  );
};

export default Chatbot;
