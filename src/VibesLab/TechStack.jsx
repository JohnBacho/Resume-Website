import "./TechStack.css";
import { useEffect } from "react";

export default function TechStack(props) {
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
  }, []);

  return (
    <div className="TechStack">
      <div className="logo hidden">
        <img src={props.img1} />
      </div>
      <div className="logo hidden">
        <img src={props.img2} />
      </div>
      <div className="logo hidden">
        <img src={props.img3} />
      </div>
      <div className="logo hidden">
        <img src={props.img4} />
      </div>
    </div>
  );
}
