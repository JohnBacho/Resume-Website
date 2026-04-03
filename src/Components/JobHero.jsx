import { useState } from "react";
import "./JobHero.css";
import Nav from "./Nav.jsx";
import "../Home/Hero.css";

export default function JobHero({ HeroInfo }) {
  const [ready, setReady] = useState(false);

  return (
    <>
      <div
        className="Hero HeroVibes-Section"
        style={{ visibility: ready ? "visible" : "hidden" }}
      >
        <div className="blob-scene">
          <div className="blob b1"></div>
          <div className="blob b2"></div>
          <div className="blob b3"></div>
          <div className="blob b4"></div>
        </div>
        <Nav />
        {HeroInfo.map((item, index) => (
          <div
            key={index}
            className="Hero--Content"
            onLoad={() => setReady(true)}
          >
            <h1 ref={() => setReady(true)}>{item.title}</h1>
            <div className="Column-List">
              {item.timeline === "" ? null : (
                <div>
                  <h2
                    style={item.position === "" ? { textAlign: "center" } : {}}
                  >
                    Timeline
                  </h2>
                  <p
                    style={item.position === "" ? { textAlign: "center" } : {}}
                  >
                    {item.timeline}
                  </p>
                </div>
              )}
              {item.position && (
                <div>
                  <h2>Role</h2>
                  <p style={{ whiteSpace: "pre-line" }}>{item.position}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
