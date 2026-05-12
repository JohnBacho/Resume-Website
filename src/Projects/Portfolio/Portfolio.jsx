import Footer from "../../Components/Footer.jsx";
import Header from "../../Components/JobHero.jsx";
import GDBox from "../../Components/GDBox.jsx";
import TechStack from "../../Components/TechStack.jsx";
import TextBlock from "../../Components/TextBlock.jsx";
import Other from "../../Home/Other.jsx";

import { HeroInfo, TechStackIcons, GDBoxImages } from "./Portfolio.js";

export default function Portfolios() {
  return (
    <div>
      <Header HeroInfo={HeroInfo} />
      <TechStack items={TechStackIcons} />
      <GDBox Images={GDBoxImages} />
      <Footer />
    </div>
  );
}
