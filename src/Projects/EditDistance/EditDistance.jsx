import JobHero from "../../Components/JobHero.jsx";
import TechStack from "../../Components/TechStack.jsx";
import Footer from "../../Components/Footer.jsx";
import TextBlock from "../../Components/TextBlock.jsx";
import Image from "../../Components/Image.jsx";
import Related from "../../Components/Related.jsx";

import {
  HeroInfo,
  TechStackIcons,
  CoreAlgorithm,
  Exploration,
  Performance,
  GroupImage,
  PosterImage,
  RelatedProjects,
} from "./EditDistance.js";

export default function EditDistance() {
  return (
    <>
      <JobHero HeroInfo={HeroInfo} />
      <TechStack items={TechStackIcons} />
      <TextBlock Text={CoreAlgorithm} />
      <Image Image={GroupImage} />
      <TextBlock Text={Exploration} />
      <Image Image={PosterImage} />
      <TextBlock Text={Performance} />
      <Related projects={RelatedProjects} />
      <Footer />
    </>
  );
}
