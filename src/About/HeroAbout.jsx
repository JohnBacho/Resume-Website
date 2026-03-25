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
            <h1>{props.title}</h1>
            <p>{props.body}</p>
          </div>
        </div>
      </div>
    </>
  );
}
