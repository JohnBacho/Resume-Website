import Hero from "./Hero.jsx";
import Box from "./Box.jsx";
import InProgress from "./Other.jsx";
import {
  projectPairs,
  InProgressProjectPairs,
  inProgressInfo,
} from "./HomeInfo.js";
import Footer from "../Components/Footer.jsx";
import ProjectBoxes from "./ProjectBoxes.jsx";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="Work">
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
      </div>

      <InProgress props={inProgressInfo} />

      <ProjectBoxes props={InProgressProjectPairs} />
      <Footer />
    </>
  );
}
