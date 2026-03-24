import styles from "./HeroAbout.module.css";
import Nav from "../Components/Nav.jsx";

export default function HeroVibes(props) {
  return (
    <>
      <div className={styles.About}>
        <div className="blob-scene">
          <div className="blob b1"></div>
          <div className="blob b2"></div>
          <div className="blob b3"></div>
          <div className="blob b4"></div>
        </div>
        <Nav />
        <div className={styles["hero-profile"]}>
          <div className={styles["e-card"]}>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.infotop}>
              <img
                src="src/assets/about/Headshot.webp"
                alt="John A. Bacho"
                className={styles.icon}
              />
            </div>
          </div>
          <div className={styles["hero-about-text"]}>
            <h1>
              I'm John.&nbsp;&nbsp;<span className="Hero--Icon">✦</span>
            </h1>
            <p>
              I'm a Computer Science student at Baldwin Wallace University (3.94
              GPA, May 2026) focused on software development, UI/UX, and VR.
              I’ve worked as an Enterprise Architect Analysis Intern at Nordson
              and founded a multidisciplinary VR research lab where I lead a
              team building data-driven Unity applications. Alongside roles as
              an ACM President, UX team led, and teaching assistant, I enjoy
              solving complex problems and designing technology that
              puts&nbsp;users&nbsp;first.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
