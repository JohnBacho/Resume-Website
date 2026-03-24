import styles from "./HeroAbout.module.css";
import Nav from "../Components/Nav.jsx";

export default function HeroVibes(props) {
  return (
    <>
      <div className="Hero HeroAbout-Section">
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
            <h1>Welcome to My Portfolio</h1>
            <p>
              I am John A. Bacho, a computer science student at Baldwin Wallace
              University, graduating in May 2026 with a 3.94 GPA. My work spans
              software development, UI/UX design, and VR — grounded by a minor
              in Graphic Design and a passion for human-computer interaction. I
              have interned at Nordson as an Enterprise Architect Analysis
              Intern, developing technical documentation and test cases for 20+
              system interfaces and leveraging SAP and Power BI for automated
              data analysis. As founder and student lab director of Baldwin
              Wallace's Virtual Immersive Behavioral Sciences Lab, I lead a
              seven-member interdisciplinary team building Unity-based VR
              applications in C#, integrating eye-tracking and physiological
              SDKs to capture real-time behavioral data. Beyond development, I
              am a UX researcher, President of ACM, a Sherwin-Williams Career
              Accelerator Scholar, and a teaching assistant for undergraduate
              computer science courses. I thrive on collaborative
              problem-solving and creating technology that puts users first.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
