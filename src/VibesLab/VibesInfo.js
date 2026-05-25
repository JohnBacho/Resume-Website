import CsharpIcon from "../assets/images/TechStackIcons/Csharp_Icon.png";
import UnityIcon from "../assets/images/TechStackIcons/Unity_Icon.png";
import HtmlIcon from "../assets/images/TechStackIcons/Html_Icon.png";
import JSIcon from "../assets/images/TechStackIcons/JS_Icon.png";
import Discussion from "../assets/images/VIBES-Lab/Discussion.jpg";
import Headset from "../assets/images/VIBES-Lab/Headset.jpg";
import Project2Slot from "../assets/images/VIBES-Lab/Project2Slot.jpg";
import OUPRC from "../assets/images/VIBES-Lab/OUPRCPresenting.jpg";
import Code from "../assets/images/VIBES-Lab/Code.jpg";
import Poster from "../assets/images/VIBES-Lab/Poster.jpg";
import UnityScreenShot from "../assets/images/VIBES-Lab/UnityScreenShot.jpg";
import Article from "../assets/images/VIBES-Lab/Article.jpg";
import Project2 from "../assets/images/Home/Projects/Project2.jpg";
import Project1 from "../assets/images/Home/Projects/Project1.jpg";

export const HeroInfo = [
  {
    title: "Vibes Lab",
    timeline: "2025-2026",
    position: "Developer\nFounder\nLab Director",
  },
];
export const TechStackIcons = [
  { img: CsharpIcon, text: "C#" },
  { img: UnityIcon, text: "Unity" },
  { img: HtmlIcon, text: "HTML5" },
  { img: JSIcon, text: "JavaScript" },
];
export const Overview = [
  {
    title: "Overview",
    body: "Founded and directed the VIBES Lab at Baldwin Wallace University, leading the development of immersive VR research systems for psychology and neuroscience applications. Built the lab’s technical infrastructure from the ground up, overseeing software architecture, VR application development, hardware integration, and cross-functional collaboration across research and engineering teams. Research initiatives focused on improving exposure therapy methodologies to reduce relapse rates, as well as studying the psychological and behavioral impacts of gambling particularly sports gambling among college students.",
  },
];

export const Leadership = [
  {
    title: "Leadership & Collaboration",
    body: "Managed a multidisciplinary development and research team composed of computer science, psychology, and neuroscience contributors. Collaborated closely with researchers to translate experimental concepts and hypotheses into scalable technical systems while coordinating development timelines, implementation, and iterative testing workflows across multiple projects.",
  },
];

export const TechnicalWork = [
  {
    title: "Technical Work",
    body: "Designed and developed Unity-based VR applications in C#, implementing interaction systems, experimental workflows, and real-time behavioral data collection pipelines. Engineered modular software architectures integrating VR hardware, eye-tracking technology, and physiological sensor systems through multiple SDKs and APIs. Developed internal web-based tooling to automate CSV processing and streamline post-experiment data analysis workflows.",
  },
];

export const Impact = [
  {
    title: "Impact & Growth",
    body: "Established and scaled a fully operational VR research and development lab, securing $4,500 in grant funding and deploying production-ready systems supporting active research initiatives. Contributed to ongoing research currently being prepared for publication while creating a sustainable technical foundation for future development and experimentation within the lab.",
  },
];
export const BentoBox1Img = [
  { img: Poster, alt: "VIBES Lab Team Poster Presentation" },
  { img: Headset, alt: "VIBES Lab VR headset" },
  { img: Project2Slot, alt: "VIBES Lab project 2 slot machine experiment" },
  { img: Discussion, alt: "VIBES Lab team discussing project ideas" },
  { img: Code, alt: "VIBES Lab coding environment" },
];
export const Image1 = [
  {
    img: OUPRC,
    alt: "Presenting the lab’s research at the 2026 OUPRC Conference",
  },
];
export const Image2 = [
  {
    img: UnityScreenShot,
    alt: "VIBES Lab Unity Project Screenshot",
  },
];
export const RelatedProjects = [
  {
    title: "Vibes Lab",
    project: "Article",
    image: Article,
    link: "https://www.bw.edu/news/2025/11/building-vr-lab-from-ground-up-gives-bw-students-good-vibes",
    Blank: true,
  },
  {
    title: "Vibes Lab",
    project: "Project 2",
    image: Project2,
    link: "/vibes-lab-project-2",
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
