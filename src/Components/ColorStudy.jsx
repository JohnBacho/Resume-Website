import { useEffect, useRef } from "react";
import style from "./ColorStudy.module.css";

export default function ColorStudy({ Colors }) {
  return (
    <div className={style.ColorStudy}>
      {Colors.map((color, index) => (
        <div className={`${style.Color}`} key={index}>
          <div
            style={{ backgroundColor: color.hex }}
            className={style.ColorBlock}
          ></div>
          <br></br>
          <h2>{color.name}</h2>
          <p>
            R: {color.r} G: {color.g} B: {color.b}
          </p>
          <p>Hex: {color.hex}</p>
        </div>
      ))}
    </div>
  );
}
