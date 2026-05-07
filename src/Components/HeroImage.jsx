import { useState } from "react";
import Nav from "./Nav.jsx";
import styles from "./HeroImage.module.css";

export default function HeroImage({ HeroInfo }) {
  return (
    <>
      <Nav />
      {HeroInfo.map((item, index) => (
        <div key={index}>
          <img src={item.img} alt={item.alt} className={styles.HeroImage} />
        </div>
      ))}
    </>
  );
}
