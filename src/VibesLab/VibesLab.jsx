import Footer from "../Components/Footer.jsx";
import TextBlock from "../Components/TextBlock.jsx";
import HeroVibes from "./HeroVibes.jsx";
import TechStack from "../Components/TechStack.jsx";
import Bento from "../Components/Bento.jsx";
import Image from "../Components/Image.jsx";

import { PageInfo } from "./Information/Info.js";
import { TechStackIcons } from "./Information/Info.js";
import { Overview } from "./Information/Info.js";
import { Leadership } from "./Information/Info.js";
import { TechnicalWork } from "./Information/Info.js";
import { Impact } from "./Information/Info.js";
import { Image1 } from "./Information/Info.js";

import { BentoBox1Img } from "./Information/Info.js";

export default function VibesLab() {
  return (
    <>
      {PageInfo.map((item, index) => (
        <HeroVibes
          key={index}
          title={item.title}
          timeline={item.timeline}
          position={item.position}
        />
      ))}
      <TechStack items={TechStackIcons} />
      {Overview.map((item, index) => (
        <TextBlock key={index} title={item.title} body={item.body} />
      ))}
      {BentoBox1Img.map((item, index) => (
        <Bento
          key={index}
          img1={item.img1}
          img2={item.img2}
          img3={item.img3}
          img4={item.img4}
          img5={item.img5}
        />
      ))}
      {Leadership.map((item, index) => (
        <TextBlock key={index} title={item.title} body={item.body} PaddingTop={item.paddingTop} />
      ))}
      {Image1.map((item, index) => (
        <Image key={index} img={item.img}/>
      ))}
      {TechnicalWork.map((item, index) => (
        <TextBlock key={index} title={item.title} body={item.body} />
      ))}
      {Impact.map((item, index) => (
        <TextBlock key={index} title={item.title} body={item.body} />
      ))}
      <Footer />
    </>
  );
}
