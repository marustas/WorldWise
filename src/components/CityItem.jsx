import { cityItem, emoji, name, date, deleteBtn } from "./CityItem.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityItem = ({ city }) => {
  return (
    <li className={cityItem}>
      <span className={emoji}>{city.emoji}</span>
      <h3 className={name}> {city.cityName}</h3>
      <time className={date}>({formatDate(city.date)})</time>
      <button className={deleteBtn}>&times;</button>
    </li>
  );
};
export default CityItem;
