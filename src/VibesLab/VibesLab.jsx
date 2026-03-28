import Footer from "../Components/Footer.jsx";
import TextBlock from "../Components/TextBlock.jsx";
import JobHero from "../Components/JobHero.jsx";
import TechStack from "../Components/TechStack.jsx";
import Bento from "../Components/Bento.jsx";
import Image from "../Components/Image.jsx";
import Related from "../Components/Related.jsx";

import {
  PageInfo,
  TechStackIcons,
  Overview,
  Leadership,
  TechnicalWork,
  Impact,
  Image1,
  Image2,
  BentoBox1Img,
  RelatedProjects,
} from "./VibesInfo.js";

export default function VibesLab() {
  return (
    <>
      {PageInfo.map((item, index) => (
        <JobHero
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
          alt1={item.alt1}
          alt2={item.alt2}
          alt3={item.alt3}
          alt4={item.alt4}
          alt5={item.alt5}
        />
      ))}
      {Leadership.map((item, index) => (
        <TextBlock
          key={index}
          title={item.title}
          body={item.body}
          PaddingTop={item.paddingTop}
        />
      ))}
      {Image1.map((item, index) => (
        <Image key={index} img={item.img} alt={item.alt} />
      ))}
      {TechnicalWork.map((item, index) => (
        <TextBlock key={index} title={item.title} body={item.body} />
      ))}
      {Image2.map((item, index) => (
        <Image key={index} img={item.img} alt={item.alt} />
      ))}
      {Impact.map((item, index) => (
        <TextBlock key={index} title={item.title} body={item.body} />
      ))}
      <Related projects={RelatedProjects} />
      <Footer />
    </>
  );
}
