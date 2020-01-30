import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
//import ReactMapGL, {Marker, Popup} from "react-map-gl";

const styles = {
  height: "90vh",
  width: "calc(80vw-80px)",
  position: "relative"
};

const MapboxGLMap = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYWxmc2JhbGFvIiwiYSI6ImNrM2pmeGFtZzBoYnkzbm9jYnNjaTQ5dTAifQ.2RrCUi0CrTwuOp5NL-nf3g";
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [125.6083647, 7.0644576],
        zoom: 12
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={el => (mapContainer.current = el)} style={styles} />;

  const PlaceMarkers = () => {};
};

export default MapboxGLMap;
