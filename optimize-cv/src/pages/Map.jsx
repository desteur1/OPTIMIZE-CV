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

  useEffect(() => {
    if (map) {
      map.setCenter(center);
    }
  }, [map]);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEYnpm}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        mapId={mapId}
        onLoad={(mapInstance) => setMap(mapInstance)}
      >
        <Marker
          position={markerPosition}
          title="9 Rue Des Guyonnes"
          onClick={() => setSelectedMarker(markerPosition)}
        />
        {selectedMarker ? (
          <InfoWindow
            position={selectedMarker}
            onCloseClick={() => setSelectedMarker(null)}
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
