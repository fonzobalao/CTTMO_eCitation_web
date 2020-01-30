import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

export default function MapView2() {
  const [viewport, setViewport] = useState({
    latitude: 7.0644576,
    longitude: 125.6083647,
    zoom: 12,
    height: "60vh",
    width: "calc(80vw-80px)"
  });

  return (
    <div>
      <br />
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiYWxmc2JhbGFvIiwiYSI6ImNrM2pmeGFtZzBoYnkzbm9jYnNjaTQ5dTAifQ.2RrCUi0CrTwuOp5NL-nf3g"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        <Marker latitude={7.071077182812077} longitude={125.61315971703021}>
          <button class="marker-btn">
            <img src="driver.ico" alt="driver violator icon" />
          </button>
        </Marker>
        <Marker latitude={7.073615} longitude={125.613181}>
          <button class="marker-btn">
            <img src="pedestrian.ico" alt="pedestrian violator icon" />
          </button>
        </Marker>
      </ReactMapGL>
      <div>
        Control Number: <b>20200116-000001 </b>
        <br />
        Violator: <b>Facundo, Raphael T.</b>
        <br />
        License Number: L02-15-014746
        <br />
        Violations: Obstruction
        <br />
        Date and Time: <i>January 16, 2020 23:50</i>
        <br />
        Apprehended by: <i>CTTMO</i>
      </div>
    </div>
  );
}
