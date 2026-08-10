import Footer from "../Components/Footer.jsx";
import TextBlock from "../Components/TextBlock.jsx";
import JobHero from "../Components/JobHero.jsx";
import TechStack from "../Components/TechStack.jsx";
import Bento from "../Components/Bento.jsx";
import Image from "../Components/Image.jsx";
import Related from "../Components/Related.jsx";

import {
  HeroInfo,
  TechStackIcons,
  Overview,
  Leadership,
  TechnicalWork,
  Impact,
  Image1,
  Image2,
  BentoBox1Img,
  RelatedProjects,
  TempPlaceHolder,
} from "./MarshBerry.js";

export default function MarshBerry() {
  return (
    <>
      <JobHero HeroInfo={HeroInfo} />
      <TechStack items={TechStackIcons} />
            <Image Image={TempPlaceHolder} marginBottom={"0px"} />
      {/* <TextBlock Text={Overview} />
      <Bento Images={BentoBox1Img} />
      <TextBlock Text={Leadership} />
      <Image Image={Image1} />
      <TextBlock Text={TechnicalWork} />
      <Image Image={Image2} />
      <TextBlock Text={Impact} />
      <Related projects={RelatedProjects} /> */}
      <Footer />
    </>
  );
}
