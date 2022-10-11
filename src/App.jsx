import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SiDatadog } from 'react-icons/si';
import './App.css';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="mt-3">
            <SiDatadog className="app-logo" />

            <h1 className="main-heading display-3">Your Appointments</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
