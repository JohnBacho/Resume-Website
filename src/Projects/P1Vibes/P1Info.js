import CSharp from "../../assets/images/TechStackIcons/Csharp_Icon.png";
import Unity from "../../assets/images/TechStackIcons/Unity_Icon.png";
import HTML from "../../assets/images/TechStackIcons/Html_Icon.png";
import JS from "../../assets/images/TechStackIcons/JS_Icon.png";

import UnityProject from "../../assets/images/P1/UnityProject1.png";
import EyeTrackingVR from "../../assets/images/P1/EyetrackingVR.png";
import CEMSPresentation from "../../assets/images/P1/CEMSPresentation.jpeg";
import Group from "../../assets/images/Home/Jobs/VibesLabGroup.webp";
import Project2 from "../../assets/images/Home/Projects/Project2.jpg";

export const HeroInfo = [
  {
    title: "Project 1",
    timeline: "2025-2025",
    position: "",
  },
];

export const TechStackIcons = [
  { img: CSharp, text: "C#" },
  { img: Unity, text: "Unity" },
  { img: HTML, text: "HTML5" },
  { img: JS, text: "JavaScript" },
];

export const Research = [
  {
    title: "Research Objective",
    body: "The Virtual Immersive Behavioral Sciences (VIBES) Lab was founded to bridge the gap between traditional psychological theory and modern technology. Project 1 served as the lab’s inaugural initiative, focused on the fundamental science of fear conditioning. The objective was to create a controlled, immersive environment where researchers could observe how emotional responses to aversive stimuli are developed, modulated, and eventually extinguished. We aimed to build a digital laboratory that could map the human fear circuit with unprecedented precision.",
  },
];

export const Technical = [
  {
    title: "Technical Implementation",
    body: "In psychological research, timing is the difference between a successful trial and unusable data. To accurately measure a fear response, the synchronization between a visual stimulus and a participant's physiological reaction must be flawless. My primary challenge was to architect a system that could handle high-fidelity 3D environments while capturing a massive, high-frequency stream of gaze and pupillary data. The system also required immense flexibility: it needed to support both the HTC VIVE Pro Eye for immersive VR and Tobii Nano devices for flat-panel desktop studies, ensuring consistent data structures regardless of the hardware used.",
  },
];

export const Solution = [
  {
    title: "The Solution",
    body: "I spearheaded the development of the VR behavioral paradigm using Unity and C#, leveraging the SimpleOmnia framework to maintain rigorous event timing and interaction logging. I programmed the Fear Renewal trials and context-switching logic, enabling researchers to move participants between different virtual environments to study how physical surroundings influence the return of emotional responses. To ensure the lab's versatility, I implemented a dual-tracking architecture using the SRanipal and Tobii SDKs, allowing for seamless data collection across both the HTC VIVE Pro Eye and desktop eye-trackers. Finally, I developed the VIBES Lab CSV Formatter, a JavaScript-based web tool that introduced baseline correction logic, providing the research team with a standardized method for measuring participant arousal through pupil diameter changes.",
  },
];

export const Impact = [
  {
    title: "The Impact",
    body: "Project 1 established the technical standard for the entire lab. By successfully integrating complex eye-tracking metrics into a replicable VR paradigm, we provided the Neuroscience and Psychology departments with a high-fidelity tool to study anxiety and avoidance behaviors. This project successfully moved behavioral science out of 2D environments and into an immersive 3D space, providing a framework for capturing human physiological responses in real-time.",
  },
];

export const Image1 = [
  {
    img: UnityProject,
    alt: "Screenshot of the VR environment",
  },
];

export const Image2 = [
  {
    img: EyeTrackingVR,
    alt: "Screenshot of purple dots representing eye-tracking data in the VR environment",
  },
];

export const Image3 = [
  {
    img: CEMSPresentation,
    alt: "Photo of the team and I presenting our project at the CEMS showcase",
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
    project: "Project 2",
    image: Project2,
    link: "/vibes-lab-project-2",
    Blank: false,
  },
];
