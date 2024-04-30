// WeatherCard.tsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faCloud,
  faCloudSun,
  faCloudRain,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import FetchWeather from "./FetchWeather";

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

const WeatherCard = () => {
  const [currentDate, setCurrentDate] = useState(getDate());
  return (
    <div className="weather-card-container">
      <div className="weather-info">
        <div className="weather-header">
          <h2>東京の天気</h2>
          <p>{currentDate}</p>
        </div>
        <div className="weather-icon">
          <FontAwesomeIcon icon={faSun} size="5x" />
        </div>
        <div className="weather-details">
          <p>晴れ</p>
          <p>気温: 20°C</p>
          <p>湿度: 60%</p>
          <p>風速: 5m/s</p>
          <p>気圧: 1013hPa</p>
          <p>日の出: 05:30</p>
          <p>日の入: 18:30</p>
        </div>
        <div className="weather-footer">
          <p>
            今日の天気予報:
            <FetchWeather CityCode="270000" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
