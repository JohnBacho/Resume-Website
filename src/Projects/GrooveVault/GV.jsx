import Footer from "../../Components/Footer.jsx";
import HeroImage from "../../Components/HeroImage.jsx";
import TextBlock from "../../Components/TextBlock.jsx";
import Other from "../../Home/Other.jsx";
import TechStack from "../../Components/TechStack";
import Image from "../../Components/Image.jsx";
import Iframe from "../../Components/Iframe.jsx";
import MultiImage from "../../Components/MultiImage.jsx";
import ULBlock from "../../Components/ULBlock.jsx";

import {
  HeroInfo,
  TechStackIcons,
  ImageFinalScreens,
  ImageGVIcons,
  ImageColorType,
  Iframe1,
  TextFinalInterface,
  ImageMockups,
  ImageSketches,
  ImageWireframe,
  TextOverview,
  TextProblemStatement,
  TextGoalsConstraints,
  TextReflection,
} from "./GV.js";

export default function GrooveVault() {
  return (
    <div>
      <HeroImage HeroInfo={HeroInfo} />
      <TechStack items={TechStackIcons} />
      <TextBlock Text={TextOverview} />
      <TextBlock Text={TextFinalInterface} />
      <Iframe IframeInfo={Iframe1} />
      <Image Image={ImageFinalScreens} marginBottom={"0px"} />
      <TextBlock Text={TextProblemStatement} />
      <ULBlock Text={TextGoalsConstraints} />
      <Image Image={ImageColorType} marginBottom={"0px"} />
      <Image Image={ImageGVIcons} marginBottom={"0px"} />
      <MultiImage Image={ImageSketches} title={"Sketches"} />
      <Image Image={ImageWireframe} marginBottom={"0px"} />
      <Image Image={ImageMockups} marginBottom={"0px"} />
      <TextBlock Text={TextReflection} />
      <Footer />
    </div>
  );
}
