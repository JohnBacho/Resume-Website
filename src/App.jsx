import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop.js";

import Home from "./Home/Home.jsx";
import VibesLab from "./VibesLab/VibesLab.jsx";
import About from "./About/About.jsx";
import Enterprise from "./Enterprise/Enterprise.jsx";
import ITAsset from "./ITAsset/ITAsset.jsx";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vibes-lab" element={<VibesLab />} />
          <Route path="/about" element={<About />} />
          <Route path="/enterprise-architect" element={<Enterprise />} />
          <Route path="/it-asset-management" element={<ITAsset />} />
        </Routes>
      </Router>
    </>
  );
}
