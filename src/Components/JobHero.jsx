import "./JobHero.css";
import Nav from "./Nav.jsx";

export default function JobHero({HeroInfo}) {
  return (
    <>
      <div className="Hero HeroVibes-Section">
        <div className="blob-scene">
          <div className="blob b1"></div>
          <div className="blob b2"></div>
          <div className="blob b3"></div>
          <div className="blob b4"></div>
        </div>
        <Nav />
        {HeroInfo.map((item, index) => (
          <div key={index} className="Hero--Content">
            <h1>{item.title}</h1>
            <div className="Column-List">
              <div>
                <h2>Timeline</h2>
                <p>{item.timeline}</p>
              </div>
              <div>
                <h2>Role</h2>
                <p style={{ whiteSpace: "pre-line" }}>{item.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
