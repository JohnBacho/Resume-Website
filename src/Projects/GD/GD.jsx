import Footer from "../../Components/Footer.jsx";
import Header from "../../Components/JobHero.jsx";
import GDBox from "../../Components/GDBox.jsx";
import TechStack from "../../Components/TechStack.jsx";
import TextBlock from "../../Components/TextBlock.jsx";
import Other from "../../Home/Other.jsx";

import { HeroInfo, TechStackIcons, GDBoxImages } from "./GD.js";

export default function InnerHarmony() {
  return (
    <div>
      <Header HeroInfo={HeroInfo} />
      <TechStack items={TechStackIcons} />
      <GDBox Images={GDBoxImages} />
      <Footer />
    </div>
  );
}
