import React from "react";
import {Link, useParams} from 'react-router-dom';
import FetchData from "../components/FetchData";
import Spinner from "../components/Spinner";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSun} from "@fortawesome/free-solid-svg-icons";
import TranslateJapanese from "../components/TranslateJapanese";
import WeatherIcon from "../components/WeatherIcon";

const CityPage = () => {
    const appid = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;
    const {city} = useParams<{ city: string }>();
    const lang = "ja";
    const units = "metric";

    // endpoint for after today's weather
    const forecast_endpoint = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appid}&lang=${lang}&units=${units}`;

    const forecast_data = FetchData({endpoint: forecast_endpoint, city});
    if (!forecast_data) {
        return (
            <Spinner/>
        );
    }

    // 今日の天気
    const todayWeather = forecast_data.list[0];
    const place = forecast_data.city.name;
    const todayWeatherIcon = todayWeather.weather[0].icon;
    const todayWeatherHumidity = todayWeather.main.humidity;
    const todayWeatherMaxTemp = todayWeather.main.temp_max;
    const todayWeatherMinTemp = todayWeather.main.temp_min;

    // 日付系。
    const currentDate = new Date().toLocaleDateString();
    const time = new Date(todayWeather.dt * 1000).toLocaleTimeString();


    return (

        <div className="weather-card-container">
            <div className="weather-info">
                <div className="weather-header">
                    <div className="weather-today">
                        <div className="weather-icon">
                            <WeatherIcon icon={todayWeatherIcon}/>
                        </div>
                        <div className="weather-description">
                            <p className="weather-title">{currentDate} {time}の{place}の天気：</p>
                            <TranslateJapanese icon={todayWeatherIcon}/>
                            <p>湿度：{todayWeatherHumidity}%</p>
                            <p className="weather-temp-high">最高気温: <span className="red">{todayWeatherMaxTemp}°C</span>
                            </p>
                            <p className="weather-temp-low">最低気温: <span className="blue">{todayWeatherMinTemp}°C</span>
                            </p>
                        </div>
                    </div>
                    TODO:ここから明日以降の天気を表示する。JSONから取得できる限りを取得して表示させたい。
                    <hr className="weather-divider"/>

                    <Link to="/">トップへ戻る</Link>
                </div>
            </div>
        </div>
    );
};

export default CityPage;