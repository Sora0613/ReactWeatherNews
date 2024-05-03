import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutSitePage from "./pages/AboutSitePage";
import CityPage from "./pages/CityPage";
import { DarkModeProvider } from "./components/DarkModeContent";

const App = () => {
    return (
        <DarkModeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/about-site" element={<AboutSitePage/>}/>
                    <Route path="/:city" element={<CityPage />}/>
                </Routes>
            </BrowserRouter>
        </DarkModeProvider>
    );
};

export default App;
