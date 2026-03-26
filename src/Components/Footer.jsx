import style from "./FooterStyle.module.css";

export default function Footer() {
  return (
    <div className={style.box}>
      <div className={style.footerContainer}>
        <div className={style.row}>
          <div className={`${style.column} ${style.left}`}>
            <p className={style.heading}>© 2026 John Bacho</p>
          </div>

          <div className={style.column}>
            <p className={style.heading}>Socials</p>
            <a
              className={style.footerLink}
              href="https://www.linkedin.com/in/johnbacho/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className={style.footerLink}
              href="https://github.com/JohnBacho"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              className={style.footerLink}
              href="https://www.behance.net/johnbacho"
              target="_blank"
              rel="noreferrer"
            >
              Bēhance
            </a>
            <a
              className={style.footerLink}
              href="src/assets/JohnBacho_Resume.pdf"
              download
            >
              CV
            </a>
          </div>

          <div className={style.column}>
            <p className={style.heading}>Contact</p>
            <a className={style.footerLink} href="mailto:bachojohn2@gmail.com">
              <i className="fab"></i> Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
