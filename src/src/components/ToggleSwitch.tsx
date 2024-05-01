import React from "react";
import { useDarkMode } from "./DarkModeContent";

const ToggleSwitch = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <div className={`home-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <label className="switch">
                <input type="checkbox" onChange={toggleDarkMode} checked={isDarkMode}/>
                <span className="slider round"></span>
            </label>
        </div>
    );
};

export default ToggleSwitch;
