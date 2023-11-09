import { Link } from "react-router-dom";
import { cityItem, emoji, name, date, deleteBtn } from "./CityItem.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityItem = ({ city }) => {
  console.log(city.position);
  return (
    <li>
      <Link
        className={cityItem}
        to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
      >
        <span className={emoji}>{city.emoji}</span>
        <h3 className={name}> {city.cityName}</h3>
        <time className={date}>({formatDate(city.date)})</time>
        <button className={deleteBtn}>&times;</button>
      </Link>
    </li>
  );
};
export default CityItem;
