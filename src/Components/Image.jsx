import styles from "./ImageStyle.module.css";

export default function image({ Image, marginBottom }) {
  return (
    <>
      {Image.map((item, index) => (
        <div
          className={styles.ImageBlock}
          style={{ marginBottom: marginBottom || "-35px" }}
          key={index}
        >
          <figure style={{ width: item.width || "100%" }}>
            {item.title ? <h1>{item.title}</h1> : null}
            <img  src={item.img} alt={item.alt} loading="lazy" />
            <figcaption >{item.alt}</figcaption>
          </figure>
        </div>
      ))}
    </>
  );
}
