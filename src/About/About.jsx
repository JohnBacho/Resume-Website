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
  BentoBox1Img,
  BentoBox2Img,
} from "./AboutInfo.js";

export default function About() {
  return (
    <>
      {AboutHero.map((item, index) => (
        <HeroAbout
          key={index}
          title={item.title}
          body={item.body}
          HeroImage={item.HeroImage}
        />
      ))}
      <TextBlock Text={Design} />
      <Bento Images={BentoBox1Img} />
      <TextBlock Text={Leadership} />
      <Image Image={Image1} />
      <TextBlock Text={Impact} />
      <Image Image={Image2} />
      <TextBlock Text={Beyond} />
      <Bento Images={BentoBox2Img} />
      <Footer />
    </>
  );
}
