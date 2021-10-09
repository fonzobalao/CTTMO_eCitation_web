/* 
  This file will contain the functions needed to place
  Markers to the map based on the result of a query from
  a violator.
*/

import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import firebase from "./Firebase/firebase";
import violationQuery from "./violationQuery";

function PinAllViolations() {
  const [pin, getPin] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("drivers")
      .onSnapshot(snapshot => {
        const newPin = snapshot.docs.map(loc => {
          return {
            id: loc.id,
            ...loc.data()
          };
        });
        getPin(newPin);
      });

    return () => unsubscribe();
  }, []);
  return pin;
}

export default function MapView2() {
  // The viewport on load will be
  // the location of the violation
  // and the marker of where it happened

  const [viewport, setViewport] = useState({
    latitude: 7.064458,
    longitude: 125.608365,
    zoom: 15,
    height: "60vh",
    width: "calc(80vw-80px)"
  });

  const pinall = PinAllViolations();

  return (
    <div>
      <br />
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiYWxmc2JhbGFvIiwiYSI6ImNrM2pmeGFtZzBoYnkzbm9jYnNjaTQ5dTAifQ.2RrCUi0CrTwuOp5NL-nf3g"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      ></ReactMapGL>
    </div>
  );
}
