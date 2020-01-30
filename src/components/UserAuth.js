import React from "react";
import { Form, Col } from "react-bootstrap";

export const UserAuth = () => (
  <Form>
    <Form.Row>
      <Col>
        <Form.Control placeholder="First name" />
      </Col>
      <Col>
        <Form.Control placeholder="Last name" />
      </Col>
    </Form.Row>
    <Form.Row>
      <Col>
        <Form.Control placeholder="Username" />
      </Col>
      <Col>
        <Form.Control type="password" placeholder="Password" />
      </Col>
    </Form.Row>
  </Form>
);
