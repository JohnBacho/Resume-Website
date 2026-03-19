import Footer from "../Footer.jsx";
import TextBlock from "./TextBlock.jsx";
import HeroVibes from "./HeroVibes.jsx";
import TechStack from "./TechStack.jsx";
import { PageInfo } from "./Information/Info.js";
import { TechStackIcons } from "./Information/Info.js";
import { TextBlockInfo } from "./Information/Info.js";

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
      {TechStackIcons.map((item, index) => (
        <TechStack
          key={index}
          img1={item.img1}
          img2={item.img2}
          img3={item.img3}
          img4={item.img4}
        />
      ))}
        {TextBlockInfo.map((item, index) => (
        <TextBlock
          key={index}
          title={item.title}
          body={item.body}
        />
      ))}
      <Footer />
    </>
  );
}
