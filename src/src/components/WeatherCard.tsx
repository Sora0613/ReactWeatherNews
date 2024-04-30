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
    if (DayWeather.includes("晴")) {
        TheWeatherIcon = <FontAwesomeIcon icon={faSun} size="5x"/>;
    } else if (DayWeather.includes("雨")) {
        TheWeatherIcon = <FontAwesomeIcon icon={faCloudRain} size="5x"/>;
    } else if (DayWeather.includes("くもり")) {
        TheWeatherIcon = <FontAwesomeIcon icon={faCloud} size="5x"/>;
    } else {
        TheWeatherIcon = <FontAwesomeIcon icon={faCloudSun} size="5x"/>;
    }
    return TheWeatherIcon;
}

const WeatherCard = (props: WeatherCardProps) => {
    const [currentDate, setCurrentDate] = useState(getDate());
    const [data, setData] = useState<any>();

    useEffect(() => {
        fetch(
            "https://www.jma.go.jp/bosai/forecast/data/forecast/" +
            props.cityName +
            ".json",
        )
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch(() => console.log("error"));
    }, [props.cityName]);

    console.log(data);

    if (!data) {
        return (
            <Spinner/>
        );
    }

    const place = data[0].timeSeries[0].areas[0].area.name;
    const today_Weather = data[0].timeSeries[0].areas[0].weathers[0];
    const tomorrow_weather = data[0].timeSeries[0].areas[0].weathers[1];
    const the_day_after_tomorrow_weather =
        data[0].timeSeries[0].areas[0].weathers[2];
    const min_temp = data[1].tempAverage.areas[0].min;
    const max_temp = data[1].tempAverage.areas[0].max;


    let todayWeatherIcon = getWeatherIcon(today_Weather);
    let tomorrowWeatherIcon = getWeatherIcon(tomorrow_weather);
    let dayAfterTomorrowWeatherIcon = getWeatherIcon(the_day_after_tomorrow_weather);

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
                            {todayWeatherIcon}
                        </div>
                        <div className="weather-description">
                            <p className="weather-title">今日の{place}の天気：</p>
                            <p>{today_Weather}</p>
                            <p className="weather-temp-high">最高気温: <span className="red">{max_temp}°C</span></p>
                            <p className="weather-temp-low">最低気温: <span className="blue">{min_temp}°C</span></p>
                        </div>
                    </div>
                    <hr className="weather-divider"/>
                    <div className="weather-tomorrow">
                        <div className="weather-icon">
                            {tomorrowWeatherIcon}
                        </div>
                        <div className="weather-description">
                            <p className="weather-title">明日の{place}の天気：</p>
                            <p>{tomorrow_weather}</p>
                        </div>
                    </div>
                    <hr className="weather-divider"/>
                    <div className="weather-day-after-tomorrow">
                        <div className="weather-icon">
                            {dayAfterTomorrowWeatherIcon}
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