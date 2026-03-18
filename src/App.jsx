import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home/Home.jsx";
import VibesLab from "./VibesLab/VibesLab.jsx";


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Vibes-lab" element={<VibesLab />} />
        </Routes>
      </Router>
    </>
  );
}
