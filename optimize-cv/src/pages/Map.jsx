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

// import React, { useState, useEffect } from "react";
// import {
//   GoogleMap,
//   LoadScript,
//   Marker,
//   InfoWindow,
// } from "@react-google-maps/api";

// const center = {
//   lat: 48.99002,
//   lng: 1.79965,
// };

// const markerPosition = {
//   lat: 48.99002,
//   lng: 1.79965,
// };

// const mapId = "b8b2d39b74a4ee9b";

// const MapComponent = () => {
//   const [map, setMap] = useState(null);
//   const [selectedMarker, setSelectedMarker] = useState(null);
//   const [containerStyle, setContainerStyle] = useState({
//     width: "100%",
//     height: "400px", // Default height
// });

// useEffect(() => {
// Function to update map container height
// const updateContainerHeight = () => {
//   if (window.innerWidth <= 600) {
//     setContainerStyle({
//       width: "100%",
//       height: "250px",
//     });
//   } else {
//     setContainerStyle({
//       width: "100%",
//       height: "400px",
//     });
//   }
// };

// Initial call to set the correct height
// updateContainerHeight();

// Add resize event listener
// window.addEventListener("resize", updateContainerHeight);

// Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener("resize", updateContainerHeight);
//     };
//   }, []);

//   useEffect(() => {
//     if (map) {
//       map.setCenter(center);
//     }
//   }, [map]);

//   return (
//     <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={16}
//         mapId={mapId}
//         onLoad={(mapInstance) => setMap(mapInstance)}
//       >
//         <Marker
//           position={markerPosition}
//           title="9 Rue Des Guyonnes"
//           onClick={() => setSelectedMarker(markerPosition)}
//         />
//         {selectedMarker ? (
//           <InfoWindow
//             position={selectedMarker}
//             onCloseClick={() => setSelectedMarker(null)}
//           >
//             <div>
//               <h4>9 Rue Des Guyonnes</h4>
//               <p>Custom Information Here</p>
//             </div>
//           </InfoWindow>
//         ) : null}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default MapComponent;

import React, { useEffect, useRef } from "react";
import "../styles/MapComponent.css"; // Import the custom CSS file

const MapComponent = () => {
  const mapRef = useRef(null);

  const initMap = () => {
    if (window.google) {
      const mapOptions = {
        center: { lat: 48.49609753750962, lng: 7.465148141679359 },
        zoom: 12,
      };

      const map = new google.maps.Map(mapRef.current, mapOptions);

      const markerPosition = { lat: 48.49609753750962, lng: 7.465148141679359 };
      const destinationAddress = "40 rue des Guyonnes, 78440 France";

      const marker = new google.maps.Marker({
        position: markerPosition,
        map: map,
        title: "Rosheim, Alsace",
      });

      const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${
        markerPosition.lat
      },${markerPosition.lng}&destination=${encodeURIComponent(
        destinationAddress
      )}`;

      const infoWindowContent = `
        <div class="custom-info-window-content">
          <h4>Rosheim, Alsace</h4>
          <p>9 Rue Des Guyonnes, 78440 Issou,</br> France.</p>
          <a href="${directionsUrl}" target="_blank" style="position: absolute; top: 0; right: 0;">
            <img src="https://www.gstatic.com/mapspro/icons/2/places_directions.svg" alt="Directions" className="direction-name">
          </a>
          <a href="#" id="enlargeMap" class="enlarge-link">Enlarge Map</a>
        </div>
      `;

      const infoWindow = new google.maps.InfoWindow({
        content: infoWindowContent,
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);

        google.maps.event.addListenerOnce(infoWindow, "domready", () => {
          const closeButton = document.querySelector(
            ".gm-style-iw button.gm-ui-hover-effect"
          );

          if (closeButton) {
            closeButton.style.display = "none";
          }
        });

        google.maps.event.addListenerOnce(map, "click", () => {
          infoWindow.close();
        });

        const enlargeLink = document.getElementById("enlargeMap");
        if (enlargeLink) {
          enlargeLink.addEventListener("click", (event) => {
            event.preventDefault();
            map.setZoom(15);
            map.setCenter(markerPosition);
          });
        }
      });
    } else {
      console.error("Google Maps API is not loaded.");
    }
  };

  useEffect(() => {
    const existingScript = document.querySelector(
      `script[src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAUkBJNdaV4pE2NV1jxOA0VTGJq3lTjAmU"]`
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAUkBJNdaV4pE2NV1jxOA0VTGJq3lTjAmU`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        initMap();
      };
      script.onerror = () => {
        console.error("Google Maps API failed to load.");
      };
      document.head.appendChild(script);
    } else {
      existingScript.onload = () => {
        initMap();
      };
      if (window.google) {
        initMap();
      }
    }

    return () => {
      const mapElement = document.getElementById("map");
      if (mapElement) {
        mapElement.innerHTML = "";
      }
    };
  }, []);

  return (
    <div id="map" ref={mapRef} style={{ height: "500px", width: "100%" }}></div>
  );
};

export default MapComponent;
