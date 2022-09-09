import React, { useEffect, useState } from "react";

import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Archive from "./pages/Archive";
import SideIconBar from "./components/SideIconBar/SideIconBar";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import SplashScreen from "./pages/SplashScreen/SplashScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer1 = setTimeout(() => setLoading(false), 2000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return loading ? (
    <SplashScreen />
  ) : (
    <div>
      <NavigationBar />
      <div className="container mx-auto px-4">
        <Routes>
          <Route path="/portfolio-website/" element={<Home />} />
          <Route path="/portfolio-website/archive" element={<Archive />} />
        </Routes>
      </div>
      <SideIconBar />
    </div>
  );
}

export default App;
