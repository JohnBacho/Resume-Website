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
  ImageFinalFrontCover,
  TextFinalBrochure,
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
  ImagePage2,
  ImagePage3,
  ImagePage4,
  ImagePage5,
  ImagePage6,
  ImagePage7,
  ImagePage8,
  ImagePage9,
} from "./Jupiter.js";

export default function Analog() {
  return (
    <div>
      <HeroImage HeroInfo={HeroInfo} />

      <TechStack items={TechStackIcons} />

      <TextBlock Text={TextOverview} />

      <TextBlock Text={TextFinalBrochure} />
      <Image Image={ImageFinalFrontCover} marginBottom={"0px"} />

      <Image Image={ImagePage2} marginBottom={"0px"} />
      <Image Image={ImagePage3} marginBottom={"0px"} />
      <Image Image={ImagePage4} marginBottom={"0px"} />
      <Image Image={ImagePage5} marginBottom={"0px"} />
      <Image Image={ImagePage6} marginBottom={"0px"} />
      <Image Image={ImagePage7} marginBottom={"0px"} />
      <Image Image={ImagePage8} marginBottom={"0px"} />
      <Image Image={ImagePage9} marginBottom={"0px"} />



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
