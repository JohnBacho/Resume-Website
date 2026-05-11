import styles from "./MultiImageStyle.module.css";

export default function MultiImage({ Image }) {
  return (
    <>
      {Image.map((item, index) => (
        <div className={styles.ImageContainer}>
          <figure key={index}>
            <img key={index} src={item.img} alt={item.alt} loading="lazy" />
            <figcaption>{item.alt}</figcaption>
          </figure>
          <figure key={index}>
            <img key={index} src={item.img2} alt={item.alt2} loading="lazy" />
            <figcaption>{item.alt2}</figcaption>
          </figure>
        </div>
      ))}
    </>
  );
}
