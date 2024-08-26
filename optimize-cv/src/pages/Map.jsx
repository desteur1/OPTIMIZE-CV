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

import React, { useEffect, useRef, useState } from "react";
import "../styles/MapComponent.css"; // Import the custom CSS file
import Direction from "../styles/images/direction.png";

const MapComponent = () => {
  const mapRef = useRef(null);
  const smallMapRef = useRef(null); // Reference for the small map
  const [containerStyle, setContainerStyle] = useState();
  // width: "100%",
  // height: "500px",

  const initMap = () => {
    if (window.google && mapRef.current) {
      const mapOptions = {
        center: { lat: 48.99002, lng: 1.79965 },
        zoom: 16,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      };

      const map = new google.maps.Map(mapRef.current, mapOptions);

      // Initialize the small map
      const smallMapOptions = {
        center: { lat: 48.99002, lng: 1.79965 },
        zoom: 18, // More zoomed out
        mapTypeId: google.maps.MapTypeId.SATELLITE, // Set to satellite view
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        disableDefaultUI: true, // Disable controls for the small map
      };
      const smallMap = new google.maps.Map(
        smallMapRef.current,
        smallMapOptions
      );

      const markerPosition = { lat: 48.99002, lng: 1.79965 };
      const destinationAddress = "09 rue des Guyonnes, 78440 France";

      const marker = new google.maps.Marker({
        position: markerPosition,
        map: map,
        title: "Issou, Paris",
        label: {
          text: "09 Des Guyonnes, 78440 France",
          color: "red",
          fontWeight: "bold",
          fontSize: "1em",
        },
      });
      // Update the small map when the marker is moved
      // const updateSmallMap = () => {
      //   smallMap.setCenter(marker.getPosition());
      // };

      // Add an event listener to the marker to update the small map
      //
      // Update the small map center when the main map changes
      map.addListener("center_changed", () => {
        smallMap.setCenter(map.getCenter());
      });

      const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${
        markerPosition.lat
      },${markerPosition.lng}&destination=${encodeURIComponent(
        destinationAddress
      )}`;

      const infoWindowDiv = document.createElement("div");
      infoWindowDiv.className = "custom-info-window";
      infoWindowDiv.innerHTML = `
        <div class="map-container">
        <div class="custom-infor-window">
        <h4 class="trucate-text">9 Rue Des Guyonnes</h4>
        <p class="infor-p">9 Rue Des Guyonnes, 78440 Issou,</br> France.</p>
        <a href="${directionsUrl}" class="direction-icon" target="_blank">
          <img src="${Direction}" alt="Directions" class="direction-name">
          <span class="direction-title">Itinéraires</span>
        </a>
        <a href="#" id="enlargeMap" class="enlarge-link">Aggrandir le plan</a>
      </div>
      <div class="empty-div"></div>
      </div>`;

      mapRef.current.appendChild(infoWindowDiv);

      const positionCustomInfoWindow = () => {
        // infoWindowDiv.style.position = "absolute";
        // infoWindowDiv.style.top = "0px";
        // infoWindowDiv.style.left = "0px";
        // infoWindowDiv.style.backgroundColor = "white";
        // infoWindowDiv.style.border = "1px solid black";
        // infoWindowDiv.style.padding = "10px";
        // infoWindowDiv.style.zIndex = "1000"; // Ensure it is above other elements
        infoWindowDiv.classList.add("custom-info-window");
      };

      google.maps.event.addListenerOnce(map, "idle", positionCustomInfoWindow);
      google.maps.event.addListener(map, "resize", positionCustomInfoWindow);

      marker.addListener("click", () => {
        infoWindowDiv.style.display =
          infoWindowDiv.style.display === "block" ? "none" : "block";

        google.maps.event.addListenerOnce(map, "click", () => {
          infoWindowDiv.style.display = "none";
        });

        const enlargeLink = document.getElementById("enlargeMap");
        if (enlargeLink) {
          enlargeLink.addEventListener("click", (event) => {
            event.preventDefault();
            map.setZoom(18);
            map.setCenter(markerPosition);
          });
        }
      });

      infoWindowDiv.style.display = "none";
    } else {
      console.error("Google Maps API is not loaded or mapRef is not defined.");
    }
  };

  useEffect(() => {
    //Function to update map container height
    const updateContainerHeight = () => {
      if (window.innerWidth <= 600) {
        setContainerStyle({
          width: "100%",
          height: "250px",
        });
      } else {
        setContainerStyle({
          width: "100%",
          height: "405px",
        });
      }
    };

    // Initial call to set the correct height
    updateContainerHeight();

    //Add resize event listener
    window.addEventListener("resize", updateContainerHeight);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateContainerHeight);
    };
  }, []);

  useEffect(() => {
    const mapElement = mapRef.current; // Capture the current map element

    const existingScript = document.querySelector(
      `script[src="https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}"]`
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
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
      if (mapElement) {
        mapElement.innerHTML = ""; // Use the captured reference
      }
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div id="map" ref={mapRef} style={containerStyle}></div>
      <div
        id="smallMap"
        ref={smallMapRef}
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          width: "50px",
          height: "50px",
          border: "4px solid white",
        }}
      ></div>
    </div>
  );
};

export default MapComponent;
