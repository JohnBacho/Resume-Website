import "./App.css";

import Hero from "./Home/Hero.jsx";
import Box from "./Home/Box.jsx";

export default function App() {
  return (
    <>
      <Hero />
      <Box 
        title="Vibes Lab" 
        position="Founder" 
        image="src/assets/VIBES_LAB_Logo-WithText.png" 
        bgColor="#B8C0FF"
        grow={0}
        link1="https://www.vibeslab.com/"
        title2="Another Company" 
        position2="Developer" 
        image2="src/assets/another_logo.png" 
        bgColor2="#80CED7"
        grow2={1}
        link2="https://www.anothercompany.com/"
      />
      <Box 
        title="Third Company" 
        position="Designer" 
        image="src/assets/third_logo.png" 
        bgColor="#FFADAD"
        grow={1}
        link1="https://www.thirdcompany.com/"
        title2="Fourth Company"
        position2="Manager"
        image2="src/assets/fourth_logo.png"
        bgColor2="#333533"
        grow2={0}
        link2="https://www.fourthcompany.com/"
      />
    </>
  );
}
