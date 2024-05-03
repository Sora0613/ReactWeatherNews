import React from "react";

interface WeatherIconProps {
    icon: string;
}

const TranslateJapanese = ({icon}: WeatherIconProps) => {
    let TheWeatherInJapanese;
    switch (icon) {
        case "01d":
            TheWeatherInJapanese = "快晴";
            break;
        case "02d":
            TheWeatherInJapanese = "晴れ";
            break;
        case "03d":
            TheWeatherInJapanese = "くもり";
            break;
        case "04d":
            TheWeatherInJapanese = "くもり";
            break;
        case "09d":
            TheWeatherInJapanese = "小雨";
            break;
        case "10d":
            TheWeatherInJapanese = "雨";
            break;
        case "11d":
            TheWeatherInJapanese = "雷雨";
            break;
        case "13d":
            TheWeatherInJapanese = "雪";
            break;
        case "50d":
            TheWeatherInJapanese = "霧";
            break;
        default:
            TheWeatherInJapanese = "不明";
            break;
    }
    return (
        <div>
            {TheWeatherInJapanese}
        </div>
    );
};

export default TranslateJapanese;