import React, {useState} from "react";
import WeatherCard from "../components/WeatherCard";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import ToggleSwitch from "../components/ToggleSwitch";
import {useDarkMode} from "../components/DarkModeContent";

const HomePage = () => {
    const [cityName, setCityName] = useState("東京");
    const {isDarkMode, toggleDarkMode} = useDarkMode();

    const handleSearch = (cityName: string) => {
        // translate the city name (jpn) to roma-ji

        setCityName(cityName);
    };

    return (
        <div className={`body ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className={`home-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                <h1>天気予報</h1>
                <ToggleSwitch/>
                <SearchBar onSearch={handleSearch}/>
                {cityName && <WeatherCard cityName={cityName}/>}
                <Footer/>
            </div>
        </div>
    );
};

export default HomePage;
