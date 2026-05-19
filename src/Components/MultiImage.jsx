import styles from "./MultiImageStyle.module.css";

export default function MultiImage({ Image, title }) {
  return (
    <>
    {title ? <h1 className={styles.MultiTitle}>{title}</h1> : null}
      {Image.map((item, index) => (
        <div className={styles.ImageContainer} style={{ marginTop: title ? undefined : "45px" }} key={index}>
          <figure>
            <img src={item.img} alt={item.alt} loading="lazy" />
            <figcaption>{item.alt}</figcaption>
          </figure>
          <figure>
            <img src={item.img2} alt={item.alt2} loading="lazy" />
            <figcaption>{item.alt2}</figcaption>
          </figure>
        </div>
      ))}
    </>
  );
}
