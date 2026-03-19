import "./TechStackStyle.css";
import { useEffect } from "react";

export default function TechStack({ items }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [items]); // Re-run if the items list changes

  return (
    <div className="TechStack">
      {items.map((item, index) => (
        <div className="logo hidden" key={index}>
          <img src={item.img} alt={item.text} />
          <h3>{item.text}</h3>
        </div>
      ))}
    </div>
  );
}