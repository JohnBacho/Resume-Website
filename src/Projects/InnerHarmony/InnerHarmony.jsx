import Footer from "../../Components/Footer.jsx";
import Header from "../../Components/JobHero.jsx";
import Iframe from "../../Components/Iframe.jsx";
import TechStack from "../../Components/TechStack.jsx";
import TextBlock from "../../Components/TextBlock.jsx";
import HeroImage from "../../Components/HeroImage.jsx";
import ULBlock from "../../Components/ULBlock.jsx";

import {
  HeroInfo,
  TechStackIcons,
  IframeInfo,
  ImageHero,
  TextOverview,
  TextProblemStatement,
  TextGoalsConstraints,
  TextReflection,
} from "./InnerHarmony.js";

export default function InnerHarmony() {
  return (
    <div>
      <HeroImage HeroInfo={ImageHero} />
      <TechStack items={TechStackIcons} />
      <TextBlock Text={TextOverview} />
      <Iframe IframeInfo={IframeInfo} />
      <TextBlock Text={TextProblemStatement} />
      <ULBlock Text={TextGoalsConstraints} />
      <TextBlock Text={TextReflection} />
      <Footer />
    </div>
  );
}
