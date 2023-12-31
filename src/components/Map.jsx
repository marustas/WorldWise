import { useNavigate } from "react-router-dom";
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
import Button from "./Button";
import { useUrlPosition } from "../hooks/useUrlPositon";
import { useGeolocation } from "../hooks/useGeolocation";

const Map = () => {
  const { cities } = useCities();
  const [position, setPosition] = useState([40, 0]);
  const {
    isLoading: isLoadingPosition,
    position: geoPosition,
    getPosition,
  } = useGeolocation();
  const [lat, lng] = useUrlPosition();

  useEffect(
    function () {
      if (lat && lng) {
        setPosition([lat, lng]);
      }
    },
    [lat, lng]
  );

  useEffect(
    function () {
      if (geoPosition) {
        setPosition([geoPosition.lat, geoPosition.lng]);
      }
    },
    [geoPosition]
  );

  return (
    <div className={mapContainer}>
      {!geoPosition && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? "Loading..." : "Use your position"}
        </Button>
      )}
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
function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}

export default Map;
