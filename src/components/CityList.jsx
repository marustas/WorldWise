import { cityList } from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";

const CityList = ({ cities, isLoading }) => {
  if (!cities.length) {
    return (
      <Message message="Add your first city by clicking on the city on the map" />
    );
  }
  return isLoading ? (
    <Spinner />
  ) : (
    <ul className={cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
};

export default CityList;
