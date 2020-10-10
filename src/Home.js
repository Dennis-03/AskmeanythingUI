import React from "react";

import { Container, Col, Row } from "react-bootstrap";

import header from "./meeting.png";

export default function Home() {
  return (
    <Container className="pt-100">
      <Row className="pt-100">
        <Col md={6} xs={12}>
          <div className="neo p-20">
            <h3>AMA</h3>
            <h5>Ask Me anything</h5>
            <p>
              AMA reduces the hassle in conducting the last section of an event
              that is "<i>Do you Have Any Question?</i>"
            </p>
          </div>
        </Col>
        <Col md={6} xs={12}>
          <img src={header} alt="Meeting" />
        </Col>
      </Row>
    </Container>
  );
}
