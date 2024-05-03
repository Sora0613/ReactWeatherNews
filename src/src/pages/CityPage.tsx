import React from "react";
import {Link, useParams} from 'react-router-dom';
import FetchData from "../components/FetchData";
import Spinner from "../components/Spinner";

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

    // TODO:以下forecast_dataの中身を確認して、それぞれの変数に変更する。また、トップへ戻るリンクを追加する。

    return (

        <div className="weather-card-container">
            <div className="weather-info">
                <div className="weather-header">
                    <div className="weather-today">
                        <div className="weather-icon">
                            お天気アイコン
                        </div>
                        <div className="weather-description">
                            <p className="weather-title">今日の『場所』の天気：</p>
                            <p>お天気</p>
                            <p>湿度：しつど%</p>
                            <p className="weather-temp-high">最高気温: <span className="red">max_temp°C</span>
                            </p>
                            <p className="weather-temp-low">最低気温: <span className="blue">min_temp°C</span>
                            </p>
                        </div>
                    </div>
                    <hr className="weather-divider"/>
                    <div className="weather-tomorrow">
                        <div className="weather-icon">
                            お天気アイコン
                        </div>
                        <div className="weather-description">
                            <p className="weather-title">明日のplaceの天気：</p>
                            <p>tomorrow_weather</p>
                        </div>
                    </div>
                    <hr className="weather-divider"/>
                    <div className="weather-day-after-tomorrow">
                        <div className="weather-icon">
                            お天気アイコン
                        </div>
                        <div className="weather-description">
                            <p className="weather-title">明後日のplaceの天気：</p>
                            <p>the_day_after_tomorrow_weather</p>
                        </div>
                    </div>
                    <hr className="weather-divider"/>
                    <Link to="/">トップへ戻る</Link>
                </div>
            </div>
        </div>
    );
};

export default CityPage;