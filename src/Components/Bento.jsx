import React from "react";
import styles from "./BentoStyle.module.css";

export default function BentoBox({Images}) {
  return (
    <div className={styles.bentoWrapper}>
      <div className={styles.bentoGrid}>
        {Images.map((image, index) => (
          <div
            className={`${styles.bentoItem} ${styles[`item${index + 1}`]}`}
            key={index}
          >
            <img src={image.img} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
