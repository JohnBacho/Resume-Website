import CsharpIcon from "../assets/images/TechStackIcons/Csharp_Icon.png";
import CSS from "../assets/images/TechStackIcons/CSSIcon.png";
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
    title: "MarshBerry",
    timeline: "2026-Present",
    position: "Application Developer 1",
  },
];
export const TechStackIcons = [
  { img: CsharpIcon, text: "C#" },
  { img: HtmlIcon, text: "HTML5" },
  { img: CSS, text: "CSS" },
  { img: JSIcon, text: "JavaScript" },
];

export const Overview = [
  {
    title: "Comming Soon!",
    postion: "Center",
    body: "",
  },
];

export const TempPlaceHolder = [
  {
    title: "Comming Soon!",
  }
]

export const Leadership = [
  {
    title: "Leadership & Collaboration",
    body: "Served as technical lead for a multidisciplinary team of computer science, psychology, and neuroscience students. Coordinated software development efforts, code reviews, feature planning, testing, and deployment while collaborating with researchers to refine requirements and iterate on experimental software systems.",
  },
];

export const TechnicalWork = [
  {
    title: "Technical Work",
    body: "Architected and developed multiple Unity-based VR applications in C#, implementing interaction systems, experimental logic, state management, and behavioral data collection pipelines. Integrated eye-tracking hardware, VR headsets, and external SDKs to support real-time data acquisition and analysis. Designed modular and reusable software components to improve maintainability and accelerate development across projects. Developed web-based tools for automating CSV processing, data validation, and research workflow management.",
  },
];

export const Impact = [
  {
    title: "Impact & Growth",
    body: "Delivered production-ready software systems supporting active psychology and neuroscience research studies. Secured $4,500 in grant funding to expand development capabilities and deploy additional VR hardware. The applications and data collection systems developed through the lab continue to support ongoing research efforts and publication-ready studies.",
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
    title: "VIBES Lab",
    project: "Article",
    image: Article,
    link: "https://www.bw.edu/news/2025/11/building-vr-lab-from-ground-up-gives-bw-students-good-vibes",
    Blank: true,
  },
  {
    title: "VIBES Lab",
    project: "Project 2",
    image: Project2,
    link: "/vibes-lab-project-2",
    Blank: false,
  },
  {
    title: "VIBES Lab",
    project: "Project 1",
    image: Project1,
    link: "/vibes-lab-project-1",
    Blank: false,
  },
];
