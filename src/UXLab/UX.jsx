import JobHero from "../Components/JobHero";
import TechStack from "../Components/TechStack";
import Footer from "../Components/Footer.jsx";
import TextBlock from "../Components/TextBlock";
import Image from "../Components/Image";
import Related from "../Components/Related.jsx";

import {
  HeroInfo,
  TechStackIcons,
  Leadership,
  Optimization,
  Spatial,
  Partnership,
  Image1,
  Image2,
  Image3,
  RelatedProjects,
} from "./UXInfo.js";

export default function UX() {
  return (
    <>
      <JobHero HeroInfo={HeroInfo} />
      <TechStack items={TechStackIcons} />
      <TextBlock Text={Leadership} />
      <Image Image={Image1} />
      <TextBlock Text={Optimization} />
      <Image Image={Image2} />
      <TextBlock Text={Spatial} />
      <Image Image={Image3} />
      <TextBlock Text={Partnership} />
      <Related projects={RelatedProjects} />
      <Footer />
    </>
  );
}
