import Footer from "../../Components/Footer.jsx";
import Header from "../../Components/JobHero.jsx";
import Iframe from "../../Components/Iframe.jsx";
import TechStack from "../../Components/TechStack.jsx";
import TextBlock from "../../Components/TextBlock.jsx";

import {
  HeroInfo,
  TechStackIcons,
  IframeInfo,
  Overview,
  Development,
} from "./TimeTune.js";

export default function TimeTune() {
  return (
    <div>
      <Header HeroInfo={HeroInfo} />
      <TechStack items={TechStackIcons} />
      <TextBlock Text={Overview} />
      <Iframe IframeInfo={IframeInfo} />
      <TextBlock Text={Development} />
      <Footer />
    </div>
  );
}
