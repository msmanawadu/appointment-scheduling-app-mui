import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DiGithubFull } from 'react-icons/di';
import { GrReactjs } from 'react-icons/gr';
import { SiNetlify } from 'react-icons/si';
import { RiCopyrightLine } from 'react-icons/ri';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container className="shadow-sm">
      <Row className="mb-5">
        <Col className="text-start">
          <p className="footer-text">
            {' '}
            <span className="align-middle">Code Available on </span>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <DiGithubFull id="footer-icon-github" />
            </a>{' '}
          </p>
        </Col>

        <Col className="text-center">
          <p className="footer-text">
            Designed & Built with &#128156; <br />
            Developed with{' '}
            <a
              href="https://reactjs.org/"
              className="footer-icon-links"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              <GrReactjs />{' '}
            </a>
            | Hosted on{' '}
            <a
              href="https://www.netlify.com/"
              className="footer-icon-links"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              <SiNetlify />{' '}
            </a>
          </p>
        </Col>

        <Col>
          <Row>
            <Col>
              <p className="footer-text float-start me-3">
                Copyright <RiCopyrightLine /> Sandeepa {year}
              </p>
              <img className="msm-logo" src="./eagle.png" alt="M.S. Manawadu logo" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
