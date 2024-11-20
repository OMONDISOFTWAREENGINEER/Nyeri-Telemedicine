// src/pages/VideoConsultation.js
import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Form, Badge } from 'react-bootstrap';
import { FaVideo, FaMicrophone, FaPhoneSlash, FaMicrophoneSlash, FaClock, FaNotesMedical, FaUser, FaCommentDots } from 'react-icons/fa';
// Import Simple-Peer or any WebRTC-based package here
// import SimplePeer from 'simple-peer';

const VideoConsultation = () => {
  const [isCallStarted, setIsCallStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [notes, setNotes] = useState('');
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  
  const doctorVideoRef = useRef(null);
  const patientVideoRef = useRef(null);

  // Timer for the call duration
  useEffect(() => {
    let interval;
    if (isCallStarted) {
      interval = setInterval(() => setTimer(prev => prev + 1), 1000);
    } else if (!isCallStarted && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isCallStarted, timer]);

  // Start WebRTC-based video call
  const handleStartCall = () => {
    setIsCallStarted(true);
    // Example of using SimplePeer for WebRTC setup
    // const peer = new SimplePeer({ initiator: true, stream: localStream });
    // peer.on('signal', data => {
    //   // Signal data for establishing connection
    // });
    // peer.on('stream', stream => {
    //   // Display the doctor’s stream in doctorVideoRef.current
    //   if (doctorVideoRef.current) doctorVideoRef.current.srcObject = stream;
    // });
  };

  const handleEndCall = () => {
    setIsCallStarted(false);
    setTimer(0);
    // Logic to clean up video streams and stop the call
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
    // Toggle microphone mute functionality
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatMessage) {
      setChatHistory([...chatHistory, { message: chatMessage, sender: 'You' }]);
      setChatMessage('');
    }
  };

  return (
    <Container fluid className="py-5" style={{ backgroundColor: "#f7f9fc" }}>
      {/* Header Section */}
      <Row className="justify-content-center mb-4">
        <Col md={10} className="text-center">
          <h2 className="mb-3 text-primary">
            <FaVideo className="me-2" />
            Video Consultation
          </h2>
          <p className="text-muted">
            Connect securely with your healthcare provider in a virtual consultation.
          </p>
        </Col>
      </Row>

      {/* Main Content Row */}
      <Row className="justify-content-center">
        {/* Video Feed Section on Left */}
        <Col md={7}>
          <Card className="border-0 shadow-sm mb-4">
            <Card.Body className="p-4 text-center">
              <Row>
                {/* Doctor Video Feed */}
                <Col md={6} className="mb-4">
                  <div className="video-feed bg-light rounded-3 mb-2 border" ref={doctorVideoRef} style={{ height: '200px' }}>
                    {/* Doctor Video Stream Placeholder */}
                    {!isCallStarted && <p className="text-muted">Waiting for Doctor...</p>}
                  </div>
                  <h5 className="text-secondary">Doctor</h5>
                </Col>

                {/* Patient Video Feed */}
                <Col md={6} className="mb-4">
                  <div className="video-feed bg-light rounded-3 mb-2 border" ref={patientVideoRef} style={{ height: '200px' }}>
                    {/* Patient Video Stream Placeholder */}
                    {!isCallStarted && <p className="text-muted">Your Video Feed</p>}
                  </div>
                  <h5 className="text-secondary">You</h5>
                </Col>
              </Row>

              {/* Controls Section */}
              <div className="d-flex justify-content-center gap-3 mt-4">
                {!isCallStarted ? (
                  <Button variant="primary" size="lg" onClick={handleStartCall} className="px-4">
                    <FaVideo className="me-2" /> Start Call
                  </Button>
                ) : (
                  <Button variant="danger" size="lg" onClick={handleEndCall} className="px-4">
                    <FaPhoneSlash className="me-2" /> End Call
                  </Button>
                )}
                <Button
                  variant={isMuted ? 'secondary' : 'primary'}
                  size="lg"
                  onClick={handleMuteToggle}
                  className="px-4"
                >
                  {isMuted ? <FaMicrophoneSlash /> : <FaMicrophone />}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Chat and Notes Section on Right */}
        <Col md={5}>
          {/* Chat Section */}
          <Card className="border-0 shadow-sm mb-4" style={{ backgroundColor: "#ffffff" }}>
            <Card.Header className="bg-info text-white">
              <FaCommentDots className="me-2" /> Chat
            </Card.Header>
            <Card.Body className="p-3" style={{ maxHeight: '250px', overflowY: 'auto' }}>
              {chatHistory.map((chat, index) => (
                <div key={index} className="mb-2">
                  <strong>{chat.sender}: </strong>{chat.message}
                </div>
              ))}
            </Card.Body>
            <Card.Footer className="p-2 bg-light">
              <Form onSubmit={handleChatSubmit} className="d-flex">
                <Form.Control
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="me-2"
                />
                <Button variant="info" type="submit">Send</Button>
              </Form>
            </Card.Footer>
          </Card>

          {/* Notes Section */}
          <Card className="border-0 shadow-sm" style={{ backgroundColor: "#ffffff" }}>
            <Card.Header className="bg-info text-white">
              <FaNotesMedical className="me-2" /> Notes
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={6}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Take notes here..."
                  className="p-3"
                />
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoConsultation;
