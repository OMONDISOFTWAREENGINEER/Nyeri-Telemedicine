// src/pages/LandingPage.js
import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaVideo, FaCalendarCheck, FaFileAlt, FaUserMd, FaClock, FaLock } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section position-relative">
        <div className="hero-overlay"></div>
        <Container className="hero-content text-center py-5">
          <Row className="justify-content-center">
            <Col lg={8} className="text-white">
              <h1 className="display-4 fw-bold mb-4" data-aos="fade-up">
                Welcome to Nyeri Telemedicine
              </h1>
              <p className="lead mb-4" data-aos="fade-up" data-aos-delay="100">
                Experience healthcare from the comfort of your home. Professional medical care is just a click away.
              </p>
              <div className="hero-buttons" data-aos="fade-up" data-aos-delay="200">
                <Button as={Link} to="/register" variant="primary" size="lg" className="me-3 rounded-pill">
                  Get Started
                </Button>
                <Button as={Link} to="/login" variant="primary" size="lg" className="rounded-pill">
                  Login
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title" data-aos="fade-up">Why Choose Us?</h2>
              <p className="text-muted" data-aos="fade-up" data-aos-delay="100">
                Experience the future of healthcare with our cutting-edge telemedicine platform
              </p>
            </Col>
          </Row>
          <Row>
            {[
              {
                icon: <FaClock className="feature-icon" />,
                title: '24/7 Availability',
                description: 'Access healthcare services anytime, anywhere',
              },
              {
                icon: <FaUserMd className="feature-icon" />,
                title: 'Expert Doctors',
                description: 'Consult with certified healthcare professionals',
              },
              {
                icon: <FaLock className="feature-icon" />,
                title: 'Secure Platform',
                description: 'Your health data is protected with top-tier security',
              },
            ].map((feature, index) => (
              <Col md={4} key={index} className="mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="feature-card h-100 border-0 shadow-sm">
                  <Card.Body className="text-center p-4">
                    <div className="feature-icon-wrapper mb-3">
                      {feature.icon}
                    </div>
                    <h4 className="feature-title mb-3">{feature.title}</h4>
                    <p className="text-muted mb-0">{feature.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="services-section py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title" data-aos="fade-up">Our Services</h2>
              <p className="text-muted" data-aos="fade-up" data-aos-delay="100">
                Comprehensive healthcare solutions at your fingertips
              </p>
            </Col>
          </Row>
          <Row>
            {[
              {
                icon: <FaVideo />,
                title: 'Video Consultation',
                description: 'Connect with doctors through secure HD video calls',
              },
              {
                icon: <FaCalendarCheck />,
                title: 'Easy Scheduling',
                description: 'Book and manage appointments with just a few clicks',
              },
              {
                icon: <FaFileAlt />,
                title: 'Digital Records',
                description: 'Access your medical history and prescriptions anytime',
              },
            ].map((service, index) => (
              <Col md={4} key={index} className="mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="service-card h-100 border-0 shadow-sm">
                  <Card.Body className="text-center p-4">
                    <div className="service-icon mb-3">
                      {service.icon}
                    </div>
                    <h4 className="service-title mb-3">{service.title}</h4>
                    <p className="text-muted mb-0">{service.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section text-white text-center py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="mb-4" data-aos="fade-up">Ready to Get Started?</h2>
              <p className="lead mb-4" data-aos="fade-up" data-aos-delay="100">
                Join thousands of patients who trust our platform for their healthcare needs.
              </p>
              <Button 
                as={Link} 
                to="/register" 
                variant="light" 
                size="lg" 
                className="rounded-pill"
                data-aos="fade-up" 
                data-aos-delay="200"
              >
                Sign Up Now
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default LandingPage;