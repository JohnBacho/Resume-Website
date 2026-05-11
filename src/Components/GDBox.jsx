import styles from "./GDBox.module.css";

export default function GDBox({ Images }) {
  return (
    <div className={styles.gdWrapper}>
      <div className={styles.gdGrid}>
        {Images.map((image, index) => (
          <a key={index} href={image.link}>
            <div
              className={`${styles.gdItem} ${styles[`item${index + 1}`]}`}
              key={index}
            >
              <img src={image.img} alt={image.alt} />
            </div>
            <div className={styles.DescriptionWrapper}>
              <h3>{image.description}</h3>
              <p>{image.designClass}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
