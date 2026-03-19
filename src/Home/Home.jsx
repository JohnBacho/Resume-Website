import Hero from "./Hero.jsx";
import Box from "./Box.jsx";
import InProgress from "./Other.jsx";
import { projectPairs } from "./Information/Projects.js";
import { InProgressProjectPairs } from "./Information/InProgressProjects.js";
import Footer from "../Components/Footer.jsx";
import ProjectBoxs from "./ProjectBoxs.jsx";


export default function Home() {
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
          link={pair.left.link}
          title2={pair.right.title}
          position2={pair.right.position}
          image2={pair.right.image}
          bgColor2={pair.right.bgColor}
          grow2={pair.right.grow}
          link2={pair.right.link}
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
