import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCloud,
    faCloudBolt,
    faCloudRain,
    faCloudShowersHeavy,
    faCloudSun,
    faQuestion,
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
            TheWeatherIcon = <FontAwesomeIcon icon={faSun} size="5x"/>;
            break;
        case "02d":
            TheWeatherIcon = <FontAwesomeIcon icon={faCloudSun} size="5x"/>;
            break;
        case "03d":
            TheWeatherIcon = <FontAwesomeIcon icon={faCloud} size="5x"/>;
            break;
        case "04d":
            TheWeatherIcon = <FontAwesomeIcon icon={faCloud} size="5x"/>;
            break;
        case "09d":
            TheWeatherIcon = <FontAwesomeIcon icon={faCloudRain} size="5x"/>;
            break;
        case "10d":
            TheWeatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} size="5x"/>;
            break;
        case "11d":
            TheWeatherIcon = <FontAwesomeIcon icon={faCloudBolt} size="5x"/>;
            break;
        case "13d":
            TheWeatherIcon = <FontAwesomeIcon icon={faSnowflake} size="5x"/>;
            break;
        case "50d":
            TheWeatherIcon = <FontAwesomeIcon icon={faSmog} size="5x"/>;
            break;
        default:
            TheWeatherIcon = <FontAwesomeIcon icon={faQuestion} size="5x"/>;
            break;
    }
    return TheWeatherIcon;
}

const WeatherIcon = ({ icon }: WeatherIconProps) => {
    return getWeatherIcon(icon);
};

export default WeatherIcon;
