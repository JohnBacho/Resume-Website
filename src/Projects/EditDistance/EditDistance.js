import Java from "../../assets/images/TechStackIcons/Java.png";
import EditDistanceGroup from "../../assets/images/EditDistance/EDGroup.jpg";
import Poster from "../../assets/images/EditDistance/EDPoster.jpg";
import Repo from "../../assets/images/EditDistance/github.jpg";
import Project2 from "../../assets/images/Home/Projects/Project2.jpg";

export const HeroInfo = [
  {
    title: "Edit Distance Analysis",
    timeline: "2023-2023",
  },
];

export const TechStackIcons = [{ img: Java, text: "Java" }];

export const GroupImage = [
  {
    img: EditDistanceGroup,
    alt: "The group of students who worked on the Levenshtein Edit Distance project",
  },
];

export const PosterImage = [
  {
    img: Poster,
    alt: "The poster we presented at CEMS in 2023",
  },
];

export const CoreAlgorithm = [
  {
    title: "Core Algorithm",
    body: "This project strengthened my understanding of algorithm design and efficiency by comparing recursive and dynamic programming approaches to Levenshtein Edit Distance. I learned how implementation choices can significantly impact runtime performance in real-world text processing applications.",
  },
];

export const Exploration = [
  {
    title: "Data Structure Exploration",
    body: "Through exploring Hash Sets, Tries, and Binary Search Trees, I gained experience analyzing how different data structures affect search speed and scalability. This helped me better understand the tradeoffs between lookup efficiency, memory usage, and overall application performance.",
  },
];

export const Performance = [
  {
    title: "Performance Analysis",
    body: "One of my biggest takeaways was how combining the right algorithms with efficient data structures can dramatically improve system performance. The project reinforced the importance of optimization, benchmarking, and designing solutions with scalability in mind.",
  },
];

export const RelatedProjects = [
  {
    title: "Edit Distance",
    project: "GitHub Repository",
    image: Repo,
    link: "https://github.com/JohnBacho/Data-Structures-Final-Project",
    Blank: true,
  },
  {
    title: "VIBES Lab",
    project: "Project 2",
    image: Project2,
    link: "/vibes-lab-project-2",
    Blank: false,
  },
];