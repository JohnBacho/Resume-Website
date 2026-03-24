import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home/Home.jsx";
import VibesLab from "./VibesLab/VibesLab.jsx";
import About from "./About/About.jsx"; 


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vibes-lab" element={<VibesLab />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}
