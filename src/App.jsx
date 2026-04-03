import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop.js";

const Home = lazy(() => import("./Home/Home.jsx"));
const About = lazy(() => import("./About/About.jsx"));
const Contact = lazy(() => import("./Contact/Contact.jsx"));
const VibesLab = lazy(() => import("./VibesLab/VibesLab.jsx"));
const Enterprise = lazy(() => import("./Enterprise/Enterprise.jsx"));
const ITAsset = lazy(() => import("./ITAsset/ITAsset.jsx"));
const UX = lazy(() => import("./UXLab/UX.jsx"));
const P1Vibes = lazy(() => import("./Projects/P1Vibes/P1Vibes.jsx"));
const P2Vibes = lazy(() => import("./Projects/P2Vibes/P2Vibes.jsx"));
const NoteTack = lazy(() => import("./Projects/NoteTack/NoteTack.jsx"));
const YJA = lazy(() => import("./Projects/YJA/YJA.jsx"));
const KnitNatter = lazy(() => import("./Projects/knitNatter/knitNatter.jsx"));
const GD = lazy(() => import("./Projects/GD/GD.jsx"));

function PageLoader() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.spinner} />
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "var(--Background, #fff)",
    zIndex: 9999,
  },
  spinner: {
    width: 36,
    height: 36,
    border: "3px solid rgba(0,0,0,0.1)",
    borderTop: "3px solid rgba(0,0,0,0.8)",
    borderRadius: "50%",
    animation: "spin 0.75s linear infinite",
  },
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vibes-lab" element={<VibesLab />} />
          <Route path="/enterprise-architect" element={<Enterprise />} />
          <Route path="/it-asset-management" element={<ITAsset />} />
          <Route path="/ux-lab" element={<UX />} />
          <Route path="/vibes-lab-project-1" element={<P1Vibes />} />
          <Route path="/vibes-lab-project-2" element={<P2Vibes />} />
          <Route path="/note-tack" element={<NoteTack />} />
          <Route path="/jacket-arcade" element={<YJA />} />
          <Route path="/knit-natter" element={<KnitNatter />} />
          <Route path="/graphic-design" element={<GD />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
