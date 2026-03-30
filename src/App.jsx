import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop.js";

import Home from "./Home/Home.jsx";
import VibesLab from "./VibesLab/VibesLab.jsx";
import About from "./About/About.jsx";
import Enterprise from "./Enterprise/Enterprise.jsx";
import ITAsset from "./ITAsset/ITAsset.jsx";
import UX from "./UXLab/UX.jsx";
import P2Vibes from "./Projects/P2Vibes/P2Vibes.jsx";
import P1Vibes from "./Projects/P1Vibes/P1Vibes.jsx";
import Contact from "./Contact/Contact.jsx";
import NoteTack from "./Projects/NoteTack/NoteTack.jsx";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vibes-lab" element={<VibesLab />} />
          <Route path="/enterprise-architect" element={<Enterprise />} />
          <Route path="/it-asset-management" element={<ITAsset />} />
          <Route path="/note-tack" element={<NoteTack />} />
          <Route path="/ux-lab" element={<UX />} />
          <Route path="/vibes-lab-project-1" element={<P1Vibes />} />
          <Route path="/vibes-lab-project-2" element={<P2Vibes />} />
        </Routes>
      </Router>
    </>
  );
}
