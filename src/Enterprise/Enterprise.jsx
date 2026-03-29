import JobHero from "../Components/JobHero";
import TechStack from "../Components/TechStack";
import Footer from "../Components/Footer.jsx";
import TextBlock from "../Components/TextBlock";
import Image from "../Components/Image";

import {
  HeroInfo,
  TechStackIcons,
  Challenge,
  Foundation,
  Translating,
  Automating,
  Impact,
  Image1,
} from "./EnterpriseInfo";

export default function Enterprise() {
  return (
    <>
      <JobHero HeroInfo={HeroInfo} />
      <TechStack items={TechStackIcons} />
      <TextBlock Text={Challenge} />
      <Image Image={Image1} />
      <TextBlock Text={Foundation} />
      <TextBlock Text={Translating} />
      <TextBlock Text={Automating} />
      <TextBlock Text={Impact} />
      <Footer />
    </>
  );
}
