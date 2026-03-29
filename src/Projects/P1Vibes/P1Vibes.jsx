import JobHero from "../../Components/JobHero.jsx";
import TechStack from "../../Components/TechStack.jsx";
import Footer from "../../Components/Footer.jsx";
import TextBlock from "../../Components/TextBlock.jsx";
import Image from "../../Components/Image.jsx";
import Related from "../../Components/Related.jsx";

import {
  HeroInfo,
  TechStackIcons,
  Research,
  Technical,
  Solution,
  Impact,
  Image1,
  Image2,
  Image3,
  RelatedProjects,
} from "./P1Info.js";

export default function P1Vibes() {
  return (
    <>
      <JobHero HeroInfo={HeroInfo} />
      <TechStack items={TechStackIcons} />
      <TextBlock Text={Research} />
      <Image Image={Image1} />
      <TextBlock Text={Technical} />
      <Image Image={Image2} />
      <TextBlock Text={Solution} />
      <Image Image={Image3} />
      <TextBlock Text={Impact} />
      <Related projects={RelatedProjects} />
      <Footer />
    </>
  );
}
