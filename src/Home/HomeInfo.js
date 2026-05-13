import VibesLabGroup from "../assets/images/Home/Jobs/VibesLabGroup.jpg";
import Nordson from "../assets/images/Home/Jobs/Nordson.jpg";
import ITAsset from "../assets/images/Home/Jobs/ITAsset.jpg";
import UXLab from "../assets/images/Home/Jobs/UXLab.jpg";
import GraphicDesign from "../assets/images/Home/Projects/GraphicDesign.jpg";
import Project2 from "../assets/images/Home/Projects/Project2.jpg";
import Project1 from "../assets/images/Home/Projects/Project1.jpg";
import NoteTack from "../assets/images/Home/Projects/NoteTack.png";
import YJA from "../assets/images/Home/Projects/YJA.png";
import KnitNatter from "../assets/images/Home/Projects/KnitNatter.png";

export const projectPairs = [
  {
    left: {
      title: "VIBES Lab",
      position: "Lead Developer",
      image: VibesLabGroup,
      bgColor: "#5F8FA3",
      grow: 0,
      link: "/vibes-lab",
    },
    right: {
      title: "Nordson",
      position: "Enterprise Architect",
      image: Nordson,
      bgColor: "#6B9271",
      grow: 1,
      link: "/enterprise-architect",
    },
  },
  {
    left: {
      title: "Nordson",
      position: "IT Asset Management",
      image: ITAsset,
      bgColor: "#8B9A63",
      grow: 1,
      link: "/it-asset-management",
    },
    right: {
      title: "BW UX Lab",
      position: "Team Lead",
      image: UXLab,
      bgColor: "#A08F5A",
      grow: 0,
      link: "/ux-lab",
    },
  },
];

export const InProgressProjectPairs = [
  {
    Left: {
      title: "Vibes Lab",
      project: "Project 1",
      image: Project1,
      link: "/vibes-lab-project-1",
    },
    Middle: {
      title: "Vibes Lab",
      project: "Project 2",
      image: Project2,
      link: "/vibes-lab-project-2",
    },
    Right: {
      title: "Responsive Web Design",
      project: "Knit & Natter",
      image: KnitNatter,
      link: "/knit-natter",
    },
  },
  {
    Left: {
      title: "Personal",
      project: "NoteTack",
      image: NoteTack,
      link: "/note-tack",
    },
    Middle: {
      title: "Personal",
      project: "Jacket Arcade",
      image: YJA,
      link: "/jacket-arcade",
    },
    Right: {
      title: "",
      project: "",
      image: KnitNatter,
      link: "",
    },
  },
];

export const inProgressInfo = {
  title: "Projects",
  body: "A comprehensive collection of work spanning the design and development spectrum, encompassing personal experiments and actively implemented, high-impact programs.",
};
