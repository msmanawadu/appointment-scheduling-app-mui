import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SiDatadog } from 'react-icons/si';
import './App.css';
import Search from './components/Search';
import AddAppointment from './components/AddAppointment';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="mt-3">
            <SiDatadog className="app-logo d-inline-block me-3" />
            <h1 className="heading-text d-inline-block display-3 mt-3">Your Appointments</h1>
          </Col>
        </Row>
        <Row>
          <AddAppointment />
        </Row>
        <Row>
          <Search />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
