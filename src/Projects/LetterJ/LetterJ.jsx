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
  ImageFinal1,
  ImageFinal2,
  ImageFinal3,
} from "./LetterJ.js";

export default function Analog() {
  return (
    <div>
      <HeroImage HeroInfo={HeroInfo} />

      <TechStack items={TechStackIcons} />

      <TextBlock Text={TextOverview} />

      <TextBlock Text={TextFinal} />
      <Image Image={ImageFinal1} marginBottom={"0px"} />

      <Image Image={ImageFinal2} marginBottom={"0px"} />
      <Image Image={ImageFinal3} marginBottom={"0px"} />

      <TextBlock Text={TextProblemStatement} />

      <ULBlock Text={TextGoalsConstraints} />

      <TextBlock Text={TextSketches} />
      <MultiImage Image={ImageSketches} />

      <TextBlock Text={TextMockup} />
      <Image Image={ImageMockups} marginBottom={"0px"} />

      <TextBlock Text={TextReflection} />

      <Footer />
    </div>
  );
}
