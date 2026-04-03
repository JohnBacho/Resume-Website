import styles from "./ImageStyle.module.css";

export default function image({ Image }) {
  return (
    <div className={styles.ImageBlock}>
      {Image.map((item, index) => (
        <figure key={index}>
            <img key={index} src={item.img} alt={item.alt} loading="lazy" />
          <figcaption>{item.alt}</figcaption>
        </figure>
      ))}
    </div>
  );
}
