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
  TextDevelopement,
  TextFinal,
  TextMockup,
  TextSketches,
  ImageMockups,
  ImageSketches,
  TextOverview,
  TextProblemStatement,
  TextGoalsConstraints,
  TextReflection,
  ImageReversed,
  ImageBlackWhite,
  ImageColored,
} from "./PersonalLogo.js";

export default function PersonalLogo() {
  return (
    <div>
      <HeroImage HeroInfo={HeroInfo} />

      <TechStack items={TechStackIcons} />

      <TextBlock Text={TextOverview} />

      <TextBlock Text={TextFinal} />
      <Image Image={ImageReversed} marginBottom={"0px"}/>
      <Image Image={ImageBlackWhite} marginBottom={"0px"}/>
      <Image Image={ImageColored} marginBottom={"0px"}/>

      <TextBlock Text={TextProblemStatement} />

      <ULBlock Text={TextGoalsConstraints} />

      <TextBlock Text={TextSketches} />
      <Image Image={ImageSketches} />

      <TextBlock Text={TextMockup} />
      <Image Image={ImageMockups} marginBottom={"0px"} />

      <TextBlock Text={TextReflection} />

      <Footer />
    </div>
  );
}
