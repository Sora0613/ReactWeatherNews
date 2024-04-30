import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="weather-footer">
            <p>
                <Link to="/about-site">AboutSite</Link>
            </p>
            <p>2024 &copy; Sora</p>
        </div>
    );
};

export default Footer;
