import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ center = [20.5937, 78.9629], zoom = 5, markers = [] }) => {
  return (
    <div className="w-full h-96 rounded-2xl overflow-hidden shadow-md">
      <MapContainer center={center} zoom={zoom} className="w-full h-full z-0">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position}>
            <Popup>
              <strong>{marker.label}</strong><br />
              {marker.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
