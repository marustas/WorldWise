import { countryList } from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../context/CitiesContext";

const CountryList = () => {
  const { cities, isLoading } = useCities();
  if (!cities.length) {
    return (
      <Message message="Add your first city by clicking on the city on the map" />
    );
  }

  const countries = cities.reduce((accumulator, city) => {
    if (!accumulator.map((el) => el.country).includes(city.country))
      return [...accumulator, { country: city.country, emoji: city.emoji }];
    else return accumulator;
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <ul className={countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
};

export default CountryList;
