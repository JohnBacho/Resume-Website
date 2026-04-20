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
    body: "In the high-stakes world of gambling, near-wins; such as a slot machine stopping one symbol short or a parlay missing on the final leg; can trigger psychological responses more powerful than clear losses. As a Lead Developer for the Virtual Immersive Behavioral Sciences (VIBES) Lab, I helped build the digital infrastructure to study this effect. Our goal was to test the hypothesis that individuals, particularly college athletes conditioned by high-pressure environments, process near-wins differently; insight that could contribute to preventing gambling addiction.",
  },
];

export const Challenge = [
  {
    title: "The Engineering Challenge",
    body: "Traditional lab studies often lack ecological validity; it is difficult to recreate the emotional intensity of real gambling scenarios on a flat 2D screen. My challenge was to design a VR environment that felt realistic and immersive while also functioning as a precise scientific instrument. The system needed to capture subtle physiological responses, such as pupil dilation, with high accuracy, all while maintaining the performance standards required for a smooth and reliable VR experience.",
  },
];

export const Solution = [
  {
    title: "The Solution",
    body: "I engineered a dual-modality Unity/C# system that operates as both an immersive gambling simulation and a data collection platform. I developed a real-time sports parlay system and a custom slot engine with controlled \"near-win\" conditions to support hypothesis testing. I also integrated eye-tracking through the SRanipal SDK and built a JavaScript-based processing pipeline to clean and analyze large-scale datasets, turning raw behavioral and physiological data into meaningful insights.",
  },
];

export const Impact = [
  {
    title: "The Impact",
    body: "This project created a foundation for rigorously testing how individuals respond to near-wins in gambling environments. By linking behavioral patterns with physiological responses, the platform enables researchers to better understand risk perception and reward sensitivity. These insights are intended to inform strategies for identifying at-risk individuals and ultimately contribute to the prevention of gambling addiction.",
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
