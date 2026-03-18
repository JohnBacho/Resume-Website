import "./App.css";

import Hero from "./Home/Hero.jsx";
import Box from "./Home/Box.jsx";
import InProgress from "./Home/Other.jsx";
import { projectPairs } from "./Information/Projects.js";
import { InProgressProjectPairs } from "./Information/InProgressProjects.js";
import Footer from "./Footer.jsx";
import ProjectBoxs from "./Home/ProjectBoxs.jsx";


export default function App() {
  return (
    <>
      <Hero />
      {projectPairs.map((pair, index) => (
        <Box
          key={index}
          title={pair.left.title}
          position={pair.left.position}
          image={pair.left.image}
          bgColor={pair.left.bgColor}
          grow={pair.left.grow}
          title2={pair.right.title}
          position2={pair.right.position}
          image2={pair.right.image}
          bgColor2={pair.right.bgColor}
          grow2={pair.right.grow}
        />
      ))}
      <InProgress />
      {InProgressProjectPairs.map((pair, index) => (
        <ProjectBoxs
          key={index}
          title={pair.Left.title}
          project={pair.Left.project}
          image={pair.Left.image}
          title2={pair.Middle.title}
          project2={pair.Middle.project}
          image2={pair.Middle.image}
          title3={pair.Right.title}
          project3={pair.Right.project}
          image3={pair.Right.image}
        />
      ))}
      <Footer />
    </>
  );
}
