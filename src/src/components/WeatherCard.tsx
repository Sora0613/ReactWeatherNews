// WeatherCard.tsx
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faCloud,
  faCloudSun,
  faCloudRain,
  faWind,
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

const WeatherCard = (props: any) => {
  const [currentDate, setCurrentDate] = useState(getDate());
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetch(
      "https://www.jma.go.jp/bosai/forecast/data/forecast/" +
        props.CityCode +
        ".json",
    )
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => console.log("error"));
  }, []);

  console.log(data);

  if (!data) {
    return (
      <div className="weather-card-container">
        <div className="weather-info">
          <div className="weather-header">
            <Spinner />
            <p>Now Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  const place = data[0].timeSeries[0].areas[0].area.name;
  const today_Weather = data[0].timeSeries[0].areas[0].weathers[0];
  const tomorrow_weather = data[0].timeSeries[0].areas[0].weathers[1];
  const the_day_after_tomorrow_weather =
    data[0].timeSeries[0].areas[0].weathers[2];
  const min_temp = data[1].tempAverage.areas[0].min;
  const max_temp = data[1].tempAverage.areas[0].max;

  return (
    <div className="weather-card-container">
      <div className="weather-info">
        <div className="weather-header">
          <h2>{place}の天気</h2>
          <p>{currentDate}</p>
        </div>
        <div className="weather-icon">
          <FontAwesomeIcon icon={faSun} size="5x" />
        </div>
        <div className="weather-details">
          <p>
            今日の{place}の天気：{today_Weather}
          </p>
          <p>
            明日の{place}の天気：{tomorrow_weather}
          </p>
          <p>
            明後日の{place}の天気：{the_day_after_tomorrow_weather}
          </p>
          <p>最低気温: {min_temp}°C</p>
          <p>最高気温: {max_temp}°C</p>
        </div>
        <div className="weather-footer">
          <p>2024 &copy; Sora</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
