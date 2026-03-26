import React from "react";
import styles from "./BentoStyle.module.css";

export default function BentoBox(props) {
  return (
    <div className={styles.bentoWrapper}>
      <div className={styles.bentoGrid}>
        <div className={`${styles.bentoItem} ${styles.item1}`}>
          <img src={props.img1} alt="Bento feature" />
        </div>

        <div className={`${styles.bentoItem} ${styles.item2}`}>
          <img src={props.img2} alt="Bento detail 1" />
        </div>

        <div className={`${styles.bentoItem} ${styles.item3}`}>
          <img src={props.img3} alt="Bento detail 2" />
        </div>

        <div className={`${styles.bentoItem} ${styles.item4}`}>
          <img src={props.img4} alt="Bento detail 3" />
        </div>

        <div className={`${styles.bentoItem} ${styles.item5}`}>
          <img src={props.img5} alt="Bento detail 4" />
        </div>
      </div>
    </div>
  );
}
