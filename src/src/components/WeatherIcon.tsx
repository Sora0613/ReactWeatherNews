import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCloud,
    faCloudBolt,
    faCloudRain,
    faCloudShowersHeavy,
    faCloudSun,
    faSmog,
    faSnowflake,
    faSun,
} from "@fortawesome/free-solid-svg-icons";

interface WeatherIconProps {
    icon: string;
}

function getWeatherIcon(DayWeatherIcon: string) {
    let TheWeatherIcon;

    switch (DayWeatherIcon) {
        case "01d":
        case "01n":
            TheWeatherIcon = <FontAwesomeIcon icon={faSun} size="5x"/>;
            break;
        case "02d":
        case "02n":
            TheWeatherIcon = <FontAwesomeIcon icon={faCloudSun} size="5x"/>;
            break;
        case "03d":
        case "03n":
            TheWeatherIcon = <FontAwesomeIcon icon={faCloud} size="5x"/>;
            break;
        case "04d":
        case "04n":
            TheWeatherIcon = <FontAwesomeIcon icon={faCloud} size="5x"/>;
            break;
        case "09d":
        case "09n":
            TheWeatherIcon = <FontAwesomeIcon icon={faCloudRain} size="5x"/>;
            break;
        case "10d":
        case "10n":
            TheWeatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} size="5x"/>;
            break;
        case "11d":
        case "11n":
            TheWeatherIcon = <FontAwesomeIcon icon={faCloudBolt} size="5x"/>;
            break;
        case "13d":
        case "13n":
            TheWeatherIcon = <FontAwesomeIcon icon={faSnowflake} size="5x"/>;
            break;
        case "50d":
        case "50n":
            TheWeatherIcon = <FontAwesomeIcon icon={faSmog} size="5x"/>;
            break;
        default:
            TheWeatherIcon = <img src={`https://openweathermap.org/img/wn/${DayWeatherIcon}@2x.png`} alt="weather-icon"/>;
            break;
    }
    return TheWeatherIcon;
}

const WeatherIcon = ({ icon }: WeatherIconProps) => {
    return getWeatherIcon(icon);
};

export default WeatherIcon;
