import { useNavigate, useSearchParams } from "react-router-dom";
import { mapContainer, map } from "./Map.module.css";
import {
  MapContainer,
  Popup,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useState, useEffect } from "react";
import { useCities } from "../context/CitiesContext";

const Map = () => {
  const [searchParams] = useSearchParams();
  const { cities } = useCities();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const [position, setPosition] = useState([40, 0]);

  useEffect(
    function () {
      if (lat && lng) {
        setPosition([lat, lng]);
      }
    },
    [lat, lng]
  );

  return (
    <div className={mapContainer}>
      <MapContainer
        className={map}
        center={position}
        zoom={6}
        scrollWheelZoom={true}
        onClick
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={position} />
        <DetectClick />
      </MapContainer>
    </div>
  );
};

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
function DetectClick({}) {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lat}`),
  });
}
export default Map;
