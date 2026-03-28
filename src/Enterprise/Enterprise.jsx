import JobHero from "../Components/JobHero";
import TechStack from "../Components/TechStack";
import Footer from "../Components/Footer.jsx";
import TextBlock from "../Components/TextBlock";
import Image from "../Components/Image";

import {
  PageInfo,
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
      {PageInfo.map((item, index) => (
        <JobHero
          key={index}
          title={item.title}
          timeline={item.timeline}
          position={item.position}
        />
      ))}
      <TechStack items={TechStackIcons} />
      {Challenge.map((item, index) => (
        <TextBlock key={index} title={item.title} body={item.body} />
      ))}
      {Image1.map((item, index) => (
        <Image key={index} img={item.img} alt={item.alt} />
      ))}
      {Foundation.map((item, index) => (
        <TextBlock key={index} title={item.title} body={item.body} />
      ))}
      {Translating.map((item, index) => (
        <TextBlock key={index} title={item.title} body={item.body} />
      ))}
      {Automating.map((item, index) => (
        <TextBlock key={index} title={item.title} body={item.body} />
      ))}
      {Impact.map((item, index) => (
        <TextBlock key={index} title={item.title} body={item.body} />
      ))}
      <Footer />
    </>
  );
}
