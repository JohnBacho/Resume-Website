import "./Hero.css";
import Nav from "../Components/Nav.jsx";

export default function Hero() {
  return (
    <>
      <div className="Hero">
        <div className="blob-scene">
          <div className="blob b1"></div>
          <div className="blob b2"></div>
          <div className="blob b3"></div>
          <div className="blob b4"></div>
        </div>
        <Nav />
        <span className="Hero--Icon Hero--Icon--left">✦</span>
        <span className="Hero--Icon Hero--Icon--right">✦</span>
        <div className="Hero--Content">
          <h1>
            Hi. I'm John. <br></br>A Developer.
          </h1>
          <p>
            I'm passionate about creating accessible, engaging, and high-impact user interfaces.
          </p>
        </div>
      </div>
    </>
  );
}
