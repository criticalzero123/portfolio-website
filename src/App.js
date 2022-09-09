import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Archive from "./pages/Archive";
import SideIconBar from "./components/SideIconBar/SideIconBar";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  return (
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
