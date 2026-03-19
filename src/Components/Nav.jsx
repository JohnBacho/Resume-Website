import { useState } from "react";
import "./NavStyle.css";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Work", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

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
          <NavLink
            key={item.name}
            to={item.path}
            className={`nav-item${active === item.name ? " active" : ""}`}
            onClick={() => setActive(item.name)}
            onMouseEnter={() => setHovered(item.name)}
            onMouseLeave={() => setHovered(null)}
            aria-current={active === item.name ? "page" : undefined}
          >
            <span className="dot" aria-hidden="true" />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
