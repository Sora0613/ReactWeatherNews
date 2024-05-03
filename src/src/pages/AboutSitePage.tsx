// AboutSitePage.tsx
import React from "react";

const AboutSitePage = () => {
    return (
        <div className="home-page">
            <div className="weather-card-container">
                <h2>About This Site</h2>
                <p>各都道府県の今日、明日、明後日の天気を一目で確認することができるWebサイトです。</p>
                <p>Reactで作りました。</p>
                <p>APIはOpenWeatherのAPIを使っています。</p>
            </div>
        </div>
    );
};

export default AboutSitePage;
