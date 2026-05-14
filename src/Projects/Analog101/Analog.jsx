import Footer from "../../Components/Footer.jsx";
import HeroImage from "../../Components/HeroImage.jsx";
import TextBlock from "../../Components/TextBlock.jsx";
import Other from "../../Home/Other.jsx";
import TechStack from "../../Components/TechStack.jsx";
import Image from "../../Components/Image.jsx";
import MultiImage from "../../Components/MultiImage.jsx";
import ULBlock from "../../Components/ULBlock.jsx";
import ColorStudyBlock from "../../Components/ColorStudy.jsx";

import {
  HeroInfo,
  TechStackIcons,
  ImageFinalInfographic,
  ImageIllustrations,
  ImageColorType,
  TextFinalInfographic,
  TextDevelopement,
  TextFinalIllustrations,
  TextColorType,
  TextFinal,
  TextMockup,
  TextSketches,
  ImageMockups,
  ImageSketches,
  TextOverview,
  TextProblemStatement,
  TextGoalsConstraints,
  TextReflection,
  // ColorStudy,
} from "./Analog.js";

export default function Analog() {
  return (
    <div>
      <HeroImage HeroInfo={HeroInfo} />

      <TechStack items={TechStackIcons} />

      <TextBlock Text={TextOverview} />

      <TextBlock Text={TextFinalInfographic} />
      <Image Image={ImageFinalInfographic} marginBottom={"0px"} />

      <TextBlock Text={TextProblemStatement} />

      <ULBlock Text={TextGoalsConstraints} />

      <TextBlock Text={TextColorType} />
      {/* <ColorStudyBlock Colors={ColorStudy} /> */}
      <Image Image={ImageColorType} marginBottom={"0px"} />

      <TextBlock Text={TextFinalIllustrations} />
      <Image Image={ImageIllustrations} marginBottom={"0px"} />

      <TextBlock Text={TextSketches} />
      <MultiImage Image={ImageSketches} marginBottom={"0px"} />

      <TextBlock Text={TextMockup} />
      <Image Image={ImageMockups} marginBottom={"0px"} />

      <TextBlock Text={TextReflection} />

      <Footer />
    </div>
  );
}
