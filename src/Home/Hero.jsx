import "./Hero.css";
import Nav from "./Nav.jsx";

export default function Hero() {
  return (
    <div className="Hero">
      <Nav />
      <span className="Hero--Icon Hero--Icon--left">✦</span>
      <span className="Hero--Icon Hero--Icon--right">✦</span>
      <div className="Hero--Content">
        <h1>
          Hi. I'm John. <br></br>A Developer.
        </h1>
        <p>
          I'm passionate about crafting experiences that are engaging,<br></br>{" "}
          accessible, and user-centric.
        </p>
      </div>
    </div>
  );
}


