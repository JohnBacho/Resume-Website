import JobHero from "../Components/JobHero";
import TechStack from "../Components/TechStack";
import Footer from "../Components/Footer.jsx";
import TextBlock from "../Components/TextBlock";
import Image from "../Components/Image";

import {
  HeroInfo,
  TechStackIcons,
  Overview,
  Analytical,
  Strategic,
} from "./ITAssetInfo.js";

export default function ITAsset() {
  return (
    <>
      <JobHero HeroInfo={HeroInfo} />
      <TechStack items={TechStackIcons} />
      <TextBlock Text={Overview} />
      <TextBlock Text={Analytical} />
      <TextBlock Text={Strategic} />
      <Footer />
    </>
  );
}
