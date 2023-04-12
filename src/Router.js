import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Profile from "./Views/Profile";
import About from "./Views/About";

function Router(){
    return (
        <BrowserRouter>
            <Routes>

                    <Route path="/" element={<Home />} />
                    
                    <Route path="Profile" element={<Profile />} />
                    
                    <Route path="About" element={<About />} />

            </Routes>
        </BrowserRouter>
    );
};

export default Router;