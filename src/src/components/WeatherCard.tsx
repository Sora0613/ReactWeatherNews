import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faSun,
    faCloud,
    faCloudSun,
    faCloudRain,
    faWind, IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import Spinner from "./Spinner";

interface WeatherCardProps {
    cityName: string;
}

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${year}年${month}月${date}日`;
}

function getWeatherIcon(DayWeather: String) {
    let TheWeatherIcon;
    TheWeatherIcon = <FontAwesomeIcon icon={faSun} size="5x"/>;
    /*if (DayWeather.includes("晴")) {
        TheWeatherIcon = <FontAwesomeIcon icon={faSun} size="5x"/>;
    } else if (DayWeather.includes("雨")) {
        TheWeatherIcon = <FontAwesomeIcon icon={faCloudRain} size="5x"/>;
    } else if (DayWeather.includes("くもり")) {
        TheWeatherIcon = <FontAwesomeIcon icon={faCloud} size="5x"/>;
    } else {
        TheWeatherIcon = <FontAwesomeIcon icon={faCloudSun} size="5x"/>;
    }*/
    return TheWeatherIcon;
}

const WeatherCard = (props: WeatherCardProps, cityName: string) => {
    const [currentDate, setCurrentDate] = useState(getDate());
    const [data, setData] = useState<any>();

    const appid = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;
    const city = props.cityName;
    const lang = "ja";
    const units = "metric";
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&lang=${lang}&units=${units}`;

    useEffect(() => {
        fetch(
            endpoint
        )
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch(() => console.log("error"));
    }, [props.cityName]);

    console.log(data);
    console.log(endpoint);

    if (!data) {
        return (
            <Spinner/>
        );
    }

    const place = data.name
    const today_Weather = data.weather[0].main;
    const today_Weather_description = data.weather[0].description;
    const tomorrow_weather = "get明日の天気";
    const the_day_after_tomorrow_weather = "get明後日の天気";
    const min_temp = data.main.temp_min;
    const max_temp = data.main.temp_max;
    const feels_like = data.main.feels_like;
    const humidity = data.main.humidity;


    /*let todayWeatherIcon = getWeatherIcon(today_Weather);
    let tomorrowWeatherIcon = getWeatherIcon(tomorrow_weather);
    let dayAfterTomorrowWeatherIcon = getWeatherIcon(the_day_after_tomorrow_weather);*/

    return (
        <div className="weather-card-container">
            <div className="weather-info">
                <div className="weather-header">
                    <h2>{place}の天気</h2>
                    <p>{currentDate}</p>
                </div>
                <div className="weather-details">
                    <div className="weather-today">
                        <div className="weather-icon">
                            <FontAwesomeIcon icon={faSun} size="5x"/>
                        </div>
                        <div className="weather-description">
                            <p className="weather-title">今日の{place}の天気：</p>
                            <p>{today_Weather}</p>
                            <p>{today_Weather_description}</p>
                            <p className="weather-temp-high">最高気温: <span className="red">{max_temp}°C</span></p>
                            <p className="weather-temp-low">最低気温: <span className="blue">{min_temp}°C</span></p>
                        </div>
                    </div>
                    <hr className="weather-divider"/>
                    <div className="weather-tomorrow">
                        <div className="weather-icon">
                            <FontAwesomeIcon icon={faSun} size="5x"/>
                        </div>
                        <div className="weather-description">
                            <p className="weather-title">明日の{place}の天気：</p>
                            <p>{tomorrow_weather}</p>
                        </div>
                    </div>
                    <hr className="weather-divider"/>
                    <div className="weather-day-after-tomorrow">
                        <div className="weather-icon">
                            <FontAwesomeIcon icon={faSun} size="5x"/>
                        </div>
                        <div className="weather-description">
                            <p className="weather-title">明後日の{place}の天気：</p>
                            <p>{the_day_after_tomorrow_weather}</p>
                        </div>
                    </div>
                    <hr className="weather-divider"/>
                </div>
            </div>
        </div>


    );
};

export default WeatherCard;