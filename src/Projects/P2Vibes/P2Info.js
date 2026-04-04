import CSharp from "../../assets/images/TechStackIcons/Csharp_Icon.png";
import Unity from "../../assets/images/TechStackIcons/Unity_Icon.png";
import HTML from "../../assets/images/TechStackIcons/Html_Icon.png";
import JS from "../../assets/images/TechStackIcons/JS_Icon.png";

import Parlay from "../../assets/images/P2/Parlay.jpg";
import UnitySlot from "../../assets/images/P2/UnitySlot.png";
import ParlayBetSlip from "../../assets/images/P2/ParlayBetSlip.jpg";
import Group from "../../assets/images/Home/Jobs/VibesLabGroup.jpg";
import Project1 from "../../assets/images/Home/Projects/Project1.jpg";

export const HeroInfo = [
  {
    title: "Project 2",
    timeline: "2025-2026",
    position: "",
  },
];

export const TechStackIcons = [
  { img: CSharp, text: "C#" },
  { img: Unity, text: "Unity" },
  { img: HTML, text: "HTML5" },
  { img: JS, text: "JavaScript" },
];

export const Vision = [
  {
    title: "The Vision",
    body: "In the high-stakes world of gambling, a near-win the slot machine stopping one symbol away from a jackpot or a five-leg parlay failing on the final game often triggers a psychological response more powerful than a clean loss. As a Lead Developer for the Virtual Immersive Behavioral Sciences (VIBES) Lab, I was tasked with building the digital infrastructure to capture this phenomenon. We aimed to determine if college athletes, conditioned by high-pressure environments, process these almost moments differently than non-athletes.",
  },
];

export const Challenge = [
  {
    title: "The Engineering Challenge",
    body: "Traditional lab studies often struggle with ecological validity it is hard to make a participant feel the genuine tension of a bet while staring at a flat 2D screen. My challenge was to create a VR environment that felt immersive, while simultaneously functioning as a high-precision scientific instrument. The system needed to track sub-millimeter changes in pupil diameter as a proxy for physiological arousal, all while maintaining the 90 FPS required to prevent motion sickness and data jitter.",
  },
];

export const Solution = [
  {
    title: "The Solution",
    body: "I engineered a dual-modality Unity/C# ecosystem that functions as both an immersive gambling simulation and a high-precision data tool. I developed a real-time sports parlay system and a custom Slot engine with granular control over \"near-win\" psychological triggers. To bridge the gap to clinical research, I integrated the SRanipal SDK for HTC VIVE eye-tracking and built a JavaScript web processor that automates the cleaning and analysis of millions of data points, transforming raw CSVs into actionable behavioral insights.",
  },
];

export const Impact = [
  {
    title: "The Impact",
    body: "By merging immersive game design with rigorous neuroscience protocols, we created a platform that tracks the intersection of identity and impulse. This project provides the VIBES Lab with a robust framework to quantify how competitive backgrounds influence risk evaluation, ultimately contributing to our understanding of gambling behaviors and reward sensitivity in the digital age.",
  },
];

export const Image1 = [
  {
    img: Parlay,
    alt: "Screenshot of the VR parlay betting environment, showing a virtual parlay bet on the screen",
  },
];

export const Image2 = [
  {
    img: UnitySlot,
    alt: "Screenshot of the VR slot machine environment, showing a virtual slot machine",
  },
];

export const Image3 = [
  {
    img: ParlayBetSlip,
    alt: "Screenshot of the VR parlay bet slip, showing the details of the bet",
  },
];

export const RelatedProjects = [
  {
    title: "Vibes Lab",
    project: "Founder",
    image: Group,
    link: "/vibes-lab",
    Blank: false,
  },
  {
    title: "Vibes Lab",
    project: "Project 1",
    image: Project1,
    link: "/vibes-lab-project-1",
    Blank: false,
  },
];
