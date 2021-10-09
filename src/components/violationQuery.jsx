import React, { useState, useEffect } from "react";
import firebase from "./Firebase/firebase";
import Container from "react-bootstrap/Container";
import MapView2 from "./MapView2";
import styled from "styled-components";
import ReactMapGL, { Marker } from "react-map-gl";

const Styles = styled.div`
  div,
  form {
    margin: auto;
  }
  code {
    color: black;
  }
`;

//Code to Query data from Database
function SingleQuery(controlNumber) {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("drivers")
      .where("controlNumber", "==", controlNumber) //get data according to control number
      .onSnapshot((snapshot) => {
        const newDriver = snapshot.docs.map((doc) => {
          return {
            // returns a new Object
            id: doc.id,
            ...doc.data(),
          };
        });
        setDrivers(newDriver);
      });

    return () => unsubscribe();
  }, [controlNumber]);

  return drivers;
}

export const ViolationQuery = () => {
  const [inputControlNumber, setInputControlNumber] = useState("");
  const [controlNumber, setControlNumber] = useState("");
  // const [getLatitude, setGetLatitude] = useState("");
  // const [getLongitude, setGetLongitude] = useState("");

  const drivers = SingleQuery(controlNumber);

  const [viewport, setViewport] = useState({
    latitude: parseFloat("7.0644123"),
    longitude: parseFloat("125.6090916"),
    zoom: 15,
    height: "60vh",
    width: "calc(80vw-80px)",
  });

  function onSubmit(e) {
    setControlNumber(inputControlNumber);
    e.preventDefault();
  }

  return (
    <Styles>
      <div className="violationQuery">
        <br />
        <br />
        <br />
        <h4>Enter Control Number</h4>
        <div className="searchBar" class="input-group-sm">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              className="form-control"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Control Number"
              id="controlNum"
              value={inputControlNumber}
              onChange={(event) => setInputControlNumber(event.target.value)}
            />
            <br />
            <input className="btn btn-primary" type="submit" value="Submit" />
          </form>
        </div>

        {drivers.map((driver) => (
          <div className="queryResults" key={driver.id}>
            <br />
            <h5>
              Showing results for <b>{driver.controlNumber}</b>
            </h5>
            <br></br>
            <Container>
              <div id="results-list" align="center">
                <h4>Name: {driver.name}</h4>
                <h4>Date and Time: {driver.dateAndTime}</h4>
                <h4>Violations: {driver.violations}</h4>
                <ul key={driver.id}>
                  <li>
                    <b>
                      License Number: <code>{driver.licenseNumber}</code>
                    </b>
                  </li>
                  <li>
                    <b>
                      Plate Number: <code>{driver.plateNumber}</code>
                    </b>
                  </li>
                  <li>
                    <b>Location</b>:{" "}
                    <code>
                      {driver.latitude}, {driver.longitude}
                    </code>
                  </li>
                </ul>
              </div>
              </Container>
              <br />
              <div id="mapcontainer">
              <ReactMapGL
                {...viewport}
                mapboxApiAccessToken="pk.eyJ1IjoiYWxmc2JhbGFvIiwiYSI6ImNrM2pmeGFtZzBoYnkzbm9jYnNjaTQ5dTAifQ.2RrCUi0CrTwuOp5NL-nf3g"
                onViewportChange={(viewport) => {
                  setViewport(viewport);
                }}
              >
                <Marker
                  latitude={parseFloat(driver.latitude)}
                  longitude={parseFloat(driver.longitude)}
                ><img src="mapmarker.png"></img></Marker>
              </ReactMapGL>
              </div>
          </div>
        ))}
      </div>
    </Styles>
  );
};
