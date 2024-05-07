import React from "react";
import {Link, useParams} from 'react-router-dom';
import FetchData from "../components/FetchData";
import Spinner from "../components/Spinner";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSun} from "@fortawesome/free-solid-svg-icons";

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

    const place = forecast_data["city"]["name"];

    // TODO:以下forecast_dataの中身を確認して、それぞれの変数に変更する。また、トップへ戻るリンクを追加する。
    // お天気のアイコンは例として晴れを挿入中。

    return (

        <div className="weather-card-container">
            <div className="weather-info">
                <div className="weather-header">
                    <div className="weather-today">
                        <div className="weather-icon">
                            <FontAwesomeIcon icon={faSun} size="5x"/>
                        </div>
                        <div className="weather-description">
                            <p className="weather-title">今日の{place}の天気：</p>
                            <p>お天気</p>
                            <p>湿度：しつど%</p>
                            <p className="weather-temp-high">最高気温: <span className="red">max_temp°C</span>
                            </p>
                            <p className="weather-temp-low">最低気温: <span className="blue">min_temp°C</span>
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