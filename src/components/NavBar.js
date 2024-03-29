import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;

export const NavBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">CTTMO+</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/violations">Violations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/mapview">Violation Map</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/adminview">Admin View</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
