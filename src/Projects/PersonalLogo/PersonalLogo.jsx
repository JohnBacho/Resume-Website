import Footer from "../../Components/Footer.jsx";
import HeroImage from "../../Components/HeroImage.jsx";
import TextBlock from "../../Components/TextBlock.jsx";
import Other from "../../Home/Other.jsx";
import TechStack from "../../Components/TechStack.jsx";
import Image from "../../Components/Image.jsx";
import MultiImage from "../../Components/MultiImage.jsx";
import ULBlock from "../../Components/ULBlock.jsx";

import {
  HeroInfo,
  TechStackIcons,
  ImageMockups,
  ImageSketches,
  TextOverview,
  TextProblemStatement,
  TextGoalsConstraints,
  TextReflection,
  FinalLogos,
} from "./PersonalLogo.js";

export default function PersonalLogo() {
  return (
    <div>
      <HeroImage HeroInfo={HeroInfo} />
      <TechStack items={TechStackIcons} />
      <TextBlock Text={TextOverview} />
      <Image Image={FinalLogos} marginBottom={"0px"} />
      <TextBlock Text={TextProblemStatement} />
      <ULBlock Text={TextGoalsConstraints} />
      <Image Image={ImageSketches} />
      <Image Image={ImageMockups} marginBottom={"0px"} />
      <TextBlock Text={TextReflection} />
      <Footer />
    </div>
  );
}
