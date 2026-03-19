import "./HeroVibes.css";
import Nav from "../Nav.jsx";

export default function HeroVibes() {
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
        <div className="Hero--Content">
          <h1>Vibes Lab</h1>
          <div className="Column-List">
            <div>
              <h2>Timeline</h2>
              <p>2025-2026</p>
            </div>
            <div>
              <h2>Role</h2>
              <p>
                Founder<br></br>Lab Director<br></br>Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
