// import React from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// const containerStyle = {
//   width: "100%",
//   height: "400px",
// };
// const Center = {
//   lat: 48.856613,
//   lng: 2.352222,
// };
// const MarkerPosition = {
//   lat: 48.99002,
//   lng: 1.79965,
// };
// const MapComponent = () => {
//   return (
//     <LoadScript googleMapsApiKey="AIzaSyAGwNTcgVSccc_umu0y24EojscHU2T5dZk">
//       <GoogleMap mapContainerStyle={containerStyle} center={Center} zoom={10}>
//         <Marker position={MarkerPosition} title="9 Rue Des Guyonnes" />
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default MapComponent;

import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 48.99002,
  lng: 1.79965,
};

const markerPosition = {
  lat: 48.99002,
  lng: 1.79965,
};

const mapId = "b8b2d39b74a4ee9b";

const MapComponent = () => {
  const [map, setMap] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);

  // This useEffect can be used to perform actions with the map instance
  useEffect(() => {
    if (map) {
      // Example: Center map to a specific location when the map instance is available
      map.setCenter(center);
      // You can add additional side effects or interactions with the map instance here
    }
  }, [map]); // Dependency array includes `map`, so it runs when `map` changes

  return (
    <LoadScript googleMapsApiKey="AIzaSyAGwNTcgVSccc_umu0y24EojscHU2T5dZk">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        mapId={mapId}
        onLoad={(mapInstance) => setMap(mapInstance)} // Set map instance on load
      >
        <Marker
          position={markerPosition}
          title="9 Rue Des Guyonnes"
          onClick={() => setSelectedMarker(markerPosition)} // Set the selected marker position
        />
        {selectedMarker ? (
          <InfoWindow
            position={selectedMarker}
            onCloseClick={() => setSelectedMarker(null)} // Close the info window
          >
            <div>
              <h4>9 Rue Des Guyonnes</h4>
              <p>Custom Information Here</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
