import Footer from "../../Components/Footer";
import Header from "../../Components/JobHero";
import Iframe from "../../Components/Iframe";
import TechStack from "../../Components/TechStack.jsx";
import TextBlock from "../../Components/TextBlock.jsx";

import {
  HeroInfo,
  TechStackIcons,
  IframeInfo,
  Overview,
} from "./NoteTackInfo.js";

export default function NoteTack() {
  return (
    <div>
      <Header HeroInfo={HeroInfo} />
      <TechStack items={TechStackIcons} />
      <TextBlock Text={Overview} />
      <Iframe IframeInfo={IframeInfo} />
      <Footer />
    </div>
  );
}
