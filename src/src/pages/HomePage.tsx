import React, {useState} from "react";
import WeatherCard from "../components/WeatherCard";
import SearchBar from "../components/SearchBar";
import FetchCityCode from "../components/FetchCityCode";
import Footer from "../components/Footer";
import ToggleSwitch from "../components/ToggleSwitch";
import {useDarkMode} from "../components/DarkModeContent";

const HomePage = () => {
    const [cityCode, setCityCode] = useState("130000");
    const {isDarkMode, toggleDarkMode} = useDarkMode();

    const handleSearch = (cityName: string) => {
        const code = FetchCityCode({cityName});
        if (code) {
            setCityCode(code);
        } else {
            alert("Error: 街が見つかりませんでした。");
        }
    };

    return (
        <div className={`body ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className={`home-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                <h1>天気予報</h1>
                <ToggleSwitch/>
                <SearchBar onSearch={handleSearch}/>
                {cityCode && <WeatherCard cityName={cityCode}/>}
                <Footer/>
            </div>
        </div>
    );
};

export default HomePage;
