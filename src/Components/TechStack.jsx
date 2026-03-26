import { useEffect, useRef } from "react";
import style from "./TechStackStyle.module.css";

export default function TechStack({ items }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(style.show);
        }
      });
    });

    const hiddenElements = containerRef.current.querySelectorAll(
      `.${style.hidden}`,
    );
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [items]); 

  return (
    <div ref={containerRef} className={style.TechStack}>
      {items.map((item, index) => (
        <div className={`${style.logo} ${style.hidden}`} key={index}>
          <img src={item.img} alt={item.text} />
          <h3>{item.text}</h3>
        </div>
      ))}
    </div>
  );
}
