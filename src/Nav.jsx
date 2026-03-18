import { useState } from "react";
import "./Nav.css";

const navItems = ["Work", "About", "Contact"];

export default function PillNav() {
  const [active, setActive] = useState("Work");
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <nav
        className="nav-wrapper"
        role="navigation"
        aria-label="Main navigation"
      >
        {navItems.map((item) => (
          <button
            key={item}
            className={`nav-item${active === item ? " active" : ""}`}
            onClick={() => setActive(item)}
            onMouseEnter={() => setHovered(item)}
            onMouseLeave={() => setHovered(null)}
            aria-current={active === item ? "page" : undefined}
          >
            <span className="dot" aria-hidden="true" />
            {item}
          </button>
        ))}
      </nav>
    </>
  );
}
