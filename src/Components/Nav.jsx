import { useState } from "react";
import style from "./NavStyle.module.css";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Work", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function PillNav() {
  const [hovered, setHovered] = useState(null);

  return (
    <nav
      className={style.navWrapper}
      role="navigation"
      aria-label="Main navigation"
    >
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          end={item.path === "/"}
          className={({ isActive }) =>
            isActive ? `${style.navItem} ${style.active}` : style.navItem
          }
          onMouseEnter={() => setHovered(item.name)}
          onMouseLeave={() => setHovered(null)}
        >
          <span className={style.dot} aria-hidden="true" />
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}
