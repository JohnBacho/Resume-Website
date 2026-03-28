import Footer from "../Components/Footer.jsx";
import HeroAbout from "./HeroAbout.jsx";
import TextBlock from "../Components/TextBlock.jsx";
import Image from "../Components/Image.jsx";
import Bento from "../Components/Bento.jsx";

import {
  AboutHero,
  Design,
  Beyond,
  Leadership,
  Impact,
  Image1,
  Image2,
  Image3,
  BentoBox1Img,
} from "./AboutInfo.js";

export default function About() {
  return (
    <>
      {AboutHero.map((item, index) => (
        <HeroAbout key={index} title={item.title} body={item.body} HeroImage={item.HeroImage} />
      ))}
      {Design.map((item, index) => (
        <TextBlock key={index} title={item.title} body={item.body} />
      ))}
      {Image1.map((item, index) => (
        <Image key={index} img={item.img} alt={item.alt} />
      ))}
      {Leadership.map((item, index) => (
        <TextBlock key={index} title={item.title} body={item.body} />
      ))}
      {Image2.map((item, index) => (
        <Image key={index} img={item.img} alt={item.alt} />
      ))}
      {Impact.map((item, index) => (
        <TextBlock key={index} title={item.title} body={item.body} />
      ))}
      {Image3.map((item, index) => (
        <Image key={index} img={item.img} alt={item.alt} />
      ))}
      {Beyond.map((item, index) => (
        <TextBlock key={index} title={item.title} body={item.body} />
      ))}
      {BentoBox1Img.map((item, index) => (
        <Bento
          key={index}
          img1={item.img1}
          alt1={item.alt1}
          img2={item.img2}
          alt2={item.alt2}
          img3={item.img3}
          alt3={item.alt3}
          img4={item.img4}
          alt4={item.alt4}
          img5={item.img5}
          alt5={item.alt5}
        />
      ))}
      <Footer />
    </>
  );
}
