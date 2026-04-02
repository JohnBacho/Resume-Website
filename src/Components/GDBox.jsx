import styles from "./GDBox.module.css";

export default function GDBox({ Images }) {
  return (
    <div className={styles.gdWrapper}>
      <div className={styles.gdGrid}>
        {Images.map((image, index) => (
          <a key={index} href={image.link} target="_blank">
            <div
              className={`${styles.gdItem} ${styles[`item${index + 1}`]}`}
              key={index}
            >
              <img src={image.img} alt={image.alt} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
