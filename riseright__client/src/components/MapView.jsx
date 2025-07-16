// client/src/components/MapView.jsx

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

const MapView = ({ locations = [] }) => {
  const [center, setCenter] = useState([20.5937, 78.9629]); // Default: India center

  useEffect(() => {
    if (locations.length > 0) {
      setCenter([locations[0].latitude, locations[0].longitude]);
    }
  }, [locations]);

  const markerIcon = new Icon({
    iconUrl: "/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <div className="rounded-lg overflow-hidden shadow-lg mt-6 border border-gray-300 dark:border-gray-700">
      <MapContainer
        center={center}
        zoom={5}
        style={{ height: "400px", width: "100%" }}
        scrollWheelZoom={true}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((loc, index) => (
          <Marker
            key={index}
            position={[loc.latitude, loc.longitude]}
            icon={markerIcon}
          >
            <Popup>
              <div>
                <strong>{loc.name}</strong>
                <br />
                {loc.address}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
