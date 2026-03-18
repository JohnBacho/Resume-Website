import "./Hero.css";
import Nav from "./Nav.jsx";

export default function Hero() {
  return (
    <>
      <div className="Hero">
        <div class="blob-scene">
          <div class="blob b1"></div>
          <div class="blob b2"></div>
          <div class="blob b3"></div>
          <div class="blob b4"></div>
        </div>
        <Nav />
        <span className="Hero--Icon Hero--Icon--left">✦</span>
        <span className="Hero--Icon Hero--Icon--right">✦</span>
        <div className="Hero--Content">
          <h1>
            Hi. I'm John. <br></br>A Developer.
          </h1>
          <p>
            I'm passionate about programming experiences that are engaging,
            accessible, and user-centric.
          </p>
        </div>
      </div>
    </>
  );
}
