import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
import "./styles/WeatherCard.css";
import "./styles/SearchBar.css";
import HomePage from "./pages/HomePage";
import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
