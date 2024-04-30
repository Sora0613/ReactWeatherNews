import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutSitePage from "./pages/AboutSitePage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about-site" element={<AboutSitePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
