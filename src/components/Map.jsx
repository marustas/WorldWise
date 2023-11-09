import { useNavigate, useSearchParams } from "react-router-dom";
import { mapContainer } from "./Map.module.css";
const Map = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={mapContainer} onClick={() => navigate("form")}>
      <h1>Latitude: {lat}</h1>
      <h1>Longitude: {lng}</h1>
    </div>
  );
};

export default Map;
