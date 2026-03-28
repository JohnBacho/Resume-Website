import JobHero from "../Components/JobHero";
import TechStack from "../Components/TechStack";
import Footer from "../Components/Footer.jsx";
import TextBlock from "../Components/TextBlock";
import Image from "../Components/Image";

import {
  HeroInfo,
  TechStackIcons,
  Leadership,
  Optimization,
  Spatial,
  Partnership,
  Image1,
  Image2,
  Image3,
} from "./UXInfo.js";

export default function UX() {
  return (
    <>
      {HeroInfo.map((item, index) => (
        <JobHero
          key={index}
          title={item.title}
          timeline={item.timeline}
          position={item.position}
        />
      ))}
      <TechStack items={TechStackIcons} />
      {Leadership.map((item, index) => (
        <TextBlock key={index} title={item.title} body={item.body} />
      ))}
      {Image1.map((item, index) => (
        <Image key={index} img={item.img} />
      ))}
      {Optimization.map((item, index) => (
        <TextBlock key={index} title={item.title} body={item.body} />
      ))}
      {Image2.map((item, index) => (
        <Image key={index} img={item.img} />
      ))}
      {Spatial.map((item, index) => (
        <TextBlock key={index} title={item.title} body={item.body} />
      ))}
      {Image3.map((item, index) => (
        <Image key={index} img={item.img} />
      ))}

      {Partnership.map((item, index) => (
        <TextBlock key={index} title={item.title} body={item.body} />
      ))}
      <Footer />
    </>
  );
}
