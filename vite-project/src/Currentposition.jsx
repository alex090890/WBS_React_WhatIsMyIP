import { useState } from 'react';

import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import "leaflet/dist/leaflet.css";  



const LocationMarker = () => {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

const Currentposition = () => (
  <div>
    <h2>My location:</h2>
    <MapContainer
    center={{ lat: 51.505, lng: -0.09 }}
    zoom={13}
    scrollWheelZoom={false} className='map-container' style={{ width: "500px", height: "400px" }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
        <LocationMarker />
  </MapContainer>
  </div>
);

export default Currentposition;

