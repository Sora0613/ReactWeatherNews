import React, {useState} from "react";
import WeatherCard from "../components/WeatherCard";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import ToggleSwitch from "../components/ToggleSwitch";
import {useDarkMode} from "../components/DarkModeContent";
import { toRomaji } from "wanakana";

const HomePage = () => {
    const [cityName, setCityName] = useState("Tokyo");
    const {isDarkMode, toggleDarkMode} = useDarkMode();

    const handleSearch = (cityName: string) => {
        if (cityName === "") {
            alert("都市名を入力してください。");
            return;
        }
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
