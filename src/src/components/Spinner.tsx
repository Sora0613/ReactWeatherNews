// Spinner.tsx
import React from "react";
import "../styles/Spinner.css";

const Spinner = () => {
    return (
        <div className="weather-card-container">
            <div className="weather-info">
                <div className="weather-header">
                    <div className="spinner">
                        <svg width="120" height="120" viewBox="-60 -60 120 120">
                            <circle r="50"/>
                        </svg>
                    </div>
                    <p>Now Loading...</p>
                </div>
            </div>
        </div>

    );
};

export default Spinner;
