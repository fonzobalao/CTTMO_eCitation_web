/*
This component will have the following functionalities:
    1. Search bar to query violations of a driver
    based on License Number provided. Search bar 
    will accept License number
    2. Render links for when clicked will show a violation
        2a. The violation will show the name, license number,
        violation or violations incurred by the driver, date, and
        whether the violation has been resolved or not.
        2b. A small map where in the center will show the location of
        where the violation was committed.
*/

import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import ReactFirebase from "react-redux-firebase";
//import ReactFirestore from "redux-firestore";
import styled from "styled-components";
//import ReactMapGL, { Marker } from "react-map-gl";

/* function renderMap() {
  const [viewport, setViewport] = useState({
    latitude: 7.0644576,
    longitude: 125.6083647,
    zoom: 12,
    height: "60vh",
    width: "calc(80vw-80px)"
  });
} */

const Styles = styled.div`
  div,
  form {
    margin: auto;
  }
`;

/*function chooseOption({ option, selectedOption }) {
  return "..";
}*/

export const violationQuery = () => (
  <Styles>
    <div className="violationQuery">
      <br />
      <br />
      <div className="queryHeader">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Choose
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">License Number</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Control Number</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <br></br>
      <h4>Enter your License Number</h4>
      <div className="searchBar" class="input-group-sm">
        <form>
          <input
            type="text"
            class="form-control"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="License Number"
          />
          <br />
          <input class="btn btn-primary" type="submit" value="Submit" />
        </form>
      </div>
      <div className="queryResults">
        {/* show results from query of License Number  */}
        <br />
        <h5>
          Showing results for <b>L02-15-014746</b>
        </h5>
        <br />
        <Container>
          <Row>
            <Col>
              Control Number: 20200127-014746 <br /> Date: January 27, 2020{" "}
              <br /> Time: 10:58 <br />
              Name: Jose Rizal <br /> Violations: Beating Red Light,
              Overspeeding <br /> Location:{" "}
              <i>Interpret address or street based on Coordinates</i>
            </Col>
            <Col>Map with marker based on coordinates goes here</Col>
          </Row>
        </Container>
      </div>
    </div>
  </Styles>
);

/*return (
  <div className="violationQuery">
    <div className="searchBar">
      <form>
        <input type="text" placeholder="License Number" name="licenseNumber" />
        <br />
      </form>
    </div>
  </div>
);*/
