import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import WeatherCard from "../components/WeatherCard";
import SearchBar from "../components/SearchBar";
import LocationButton from "../components/LocationButton";
import FetchCityCode from "../components/FetchCityCode";
import Footer from "../components/Footer";

const HomePage = () => {
    const [cityCode, setCityCode] = useState("130000");

    const handleSearch = (cityName: string) => {
        const code = FetchCityCode({ cityName });
        if (code) {
            setCityCode(code);
        } else {
            alert("Error: 街が見つかりませんでした。");
        }
    };

    return (
        <div className="home-page">
            <h1>天気予報</h1>
            <SearchBar onSearch={handleSearch} />
            <LocationButton />
            {cityCode && <WeatherCard cityName={cityCode} />}
            <Footer />
        </div>
    );
};

export default HomePage;
