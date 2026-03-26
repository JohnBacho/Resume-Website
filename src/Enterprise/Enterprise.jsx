import JobHero from "../Components/JobHero";
import TechStack from "../Components/TechStack";
import Footer from "../Components/Footer.jsx";
import TextBlock from "../Components/TextBlock";
import Image from "../Components/Image";

import { PageInfo, TechStackIcons, Overview } from "./EnterpriseInfo";

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
      {Overview.map((item, index) => (
        <TextBlock key={index} title={item.title} body={item.body} />
      ))}
      {/* {Leadership.map((item, index) => (
        <TextBlock
          key={index}
          title={item.title}
          body={item.body}
          PaddingTop={item.paddingTop}
        />
      ))}
      {Image1.map((item, index) => (
        <Image key={index} img={item.img} />
      ))}
      {TechnicalWork.map((item, index) => (
        <TextBlock key={index} title={item.title} body={item.body} />
      ))}
      {Image2.map((item, index) => (
        <Image key={index} img={item.img} />
      ))}
      {Impact.map((item, index) => (
        <TextBlock key={index} title={item.title} body={item.body} />
      ))} */}
      <Footer />
    </>
  );
}
