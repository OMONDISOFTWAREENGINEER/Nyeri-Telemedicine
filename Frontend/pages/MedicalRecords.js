// src/pages/MedicalRecords.js
import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Badge, Tab, Nav, Form } from 'react-bootstrap';
import { 
  FaFileMedical, 
  FaDownload, 
  FaUpload, 
  FaSearch, 
  FaCalendarAlt,
  FaFileAlt,
  FaNotesMedical,
  FaFilePrescription
} from 'react-icons/fa';

const MedicalRecords = () => {
  const records = [
    {
      id: 1,
      type: 'Blood Test',
      date: 'Jan 10, 2023',
      doctor: 'Dr. Sarah Johnson',
      category: 'lab',
      status: 'Complete'
    },
    {
      id: 2,
      type: 'X-Ray Report',
      date: 'Mar 5, 2023',
      doctor: 'Dr. Michael Chen',
      category: 'imaging',
      status: 'Pending'
    },
    {
      id: 3,
      type: 'Prescription',
      date: 'Jul 20, 2023',
      doctor: 'Dr. Emily Wilson',
      category: 'prescription',
      status: 'Complete'
    },
    {
      id: 4,
      type: 'Annual Check-up',
      date: 'Aug 15, 2023',
      doctor: 'Dr. James Brown',
      category: 'general',
      status: 'Complete'
    }
  ];

  const filterRecordsByCategory = (category, records) => {
    if (category === 'all') return records;
    return records.filter(record => record.category === category);
  };

  return (
    <Container fluid className="py-4" style={{ backgroundColor: '#f8f9fa' }}>
      <Row className="justify-content-center mb-4">
        <Col lg={10}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <Row className="align-items-center mb-4">
                <Col>
                  <h2 className="mb-1" style={{ color: '#2c3e50' }}>
                    <FaFileMedical className="me-2" style={{ color: '#3498db' }}/>
                    Medical Records
                  </h2>
                  <p className="text-muted mb-0">
                    Access and manage your medical history securely
                  </p>
                </Col>
                <Col xs="auto">
                  <Button variant="primary" className="me-2">
                    <FaUpload className="me-2" /> Upload Record
                  </Button>
                  <Button variant="outline-primary">
                    <FaSearch className="me-2" /> Search Records
                  </Button>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col>
                  <Form.Control
                    type="search"
                    placeholder="Search records..."
                    className="border-0 bg-light"
                  />
                </Col>
              </Row>

              <Tab.Container defaultActiveKey="all">
                <Nav variant="pills" className="mb-4">
                  <Nav.Item>
                    <Nav.Link eventKey="all" className="px-4">
                      All Records
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="lab" className="px-4">
                      Lab Results
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="imaging" className="px-4">
                      Imaging
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="prescription" className="px-4">
                      Prescriptions
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  {['all', 'lab', 'imaging', 'prescription'].map((category) => (
                    <Tab.Pane key={category} eventKey={category}>
                      <ListGroup>
                        {filterRecordsByCategory(category, records).map((record) => (
                          <ListGroup.Item 
                            key={record.id}
                            className="border-0 mb-2 rounded"
                            style={{ backgroundColor: '#f8f9fa' }}
                          >
                            <Row className="align-items-center">
                              <Col xs="auto">
                                {record.category === 'lab' && <FaNotesMedical size={24} className="text-primary" />}
                                {record.category === 'imaging' && <FaFileAlt size={24} className="text-info" />}
                                {record.category === 'prescription' && <FaFilePrescription size={24} className="text-success" />}
                                {record.category === 'general' && <FaFileMedical size={24} className="text-warning" />}
                              </Col>
                              <Col>
                                <h6 className="mb-0">{record.type}</h6>
                                <small className="text-muted">
                                  <FaCalendarAlt className="me-1" />
                                  {record.date} | {record.doctor}
                                </small>
                              </Col>
                              <Col xs="auto">
                                <Badge 
                                  bg={record.status === 'Complete' ? 'success' : 'warning'}
                                  className="me-2"
                                >
                                  {record.status}
                                </Badge>
                                <Button variant="light" size="sm">
                                  <FaDownload /> Download
                                </Button>
                              </Col>
                            </Row>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Tab.Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col lg={10}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <h5 className="mb-3">Recent Activity</h5>
              <ListGroup variant="flush">
                <ListGroup.Item className="px-0">
                  <small className="text-muted">
                    New blood test results uploaded - 2 days ago
                  </small>
                </ListGroup.Item>
                <ListGroup.Item className="px-0">
                  <small className="text-muted">
                    Prescription renewed - 1 week ago
                  </small>
                </ListGroup.Item>
                <ListGroup.Item className="px-0">
                  <small className="text-muted">
                    X-ray report downloaded - 2 weeks ago
                  </small>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MedicalRecords;