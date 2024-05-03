import React, {useEffect, useState} from "react";
import Spinner from "./Spinner";
import WeatherIcon from "./WeatherIcon";
import TranslateJapanese from "./TranslateJapanese";
import FetchData from "./FetchData";
import {Link} from "react-router-dom";

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

const WeatherCard = (props: WeatherCardProps, cityName: string) => {
    const [currentDate, setCurrentDate] = useState(getDate());

    // basic weather data
    const appid = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;
    const city = props.cityName;
    const lang = "ja";
    const units = "metric";

    // endpoint for today's weather
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&lang=${lang}&units=${units}`;

    const today_data = FetchData({endpoint, city});
    if (!today_data) {
        return (
            <Spinner/>
        );
    }

    // values for today's weather
    const place = today_data.name
    const TodayWeatherIcon = today_data.weather[0].icon;
    const min_temp = today_data.main.temp_min;
    const max_temp = today_data.main.temp_max;
    const humidity = today_data.main.humidity;

    // TODO:returnの中身をもっと簡単にしたい。
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
                            <WeatherIcon icon={TodayWeatherIcon}/>
                        </div>
                        <div className="weather-description">
                            <p className="weather-title">今日の{place}の天気：</p>
                            <p><TranslateJapanese icon={TodayWeatherIcon}/></p>
                            <p>湿度：{humidity}%</p>
                            <p className="weather-temp-high">最高気温: <span className="red">{max_temp}°C</span></p>
                            <p className="weather-temp-low">最低気温: <span className="blue">{min_temp}°C</span></p>
                        </div>
                    </div>
                </div>
                <Link to={`/${city}`}>{place}の天気の詳細</Link>
            </div>
        </div>


    );
};

export default WeatherCard;