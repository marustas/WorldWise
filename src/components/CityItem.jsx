import { Link } from "react-router-dom";
import { cityItem, emoji, name, date, deleteBtn } from "./CityItem.module.css";
import { useCities } from "../context/CitiesContext";
import styles from "./CityItem.module.css";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityItem = ({ city }) => {
  const { currentCity, deleteCity } = useCities();

  function handleClick(e) {
    e.preventDefault();
    deleteCity(city.id);
  }
  return (
    <li>
      <Link
        className={`${cityItem} ${
          city.id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
      >
        <span className={emoji}>{city.emoji}</span>
        <h3 className={name}> {city.cityName}</h3>
        <time className={date}>({formatDate(city.date)})</time>
        <button onClick={handleClick} className={deleteBtn}>
          &times;
        </button>
      </Link>
    </li>
  );
};
export default CityItem;
