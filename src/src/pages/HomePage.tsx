import React from "react";
import WeatherCard from "../components/WeatherCard";
import SearchBar from "../components/SearchBar";
import LocationButton from "../components/LocationButton";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Weather Forecast</h1>
      <SearchBar />
      <LocationButton />
      <WeatherCard CityCode="270000" />
    </div>
  );
};

export default HomePage;
