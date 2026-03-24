import { useState } from "react";
import "./NavStyle.css";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Work", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function PillNav() {
  const [hovered, setHovered] = useState(null);

  return (
    <nav className="nav-wrapper" role="navigation" aria-label="Main navigation">
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          end={item.path === "/"}
          className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}
          onMouseEnter={() => setHovered(item.name)}
          onMouseLeave={() => setHovered(null)}
          aria-current={hovered === item.name ? "page" : undefined}
        >
          <span className="dot" aria-hidden="true" />
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}