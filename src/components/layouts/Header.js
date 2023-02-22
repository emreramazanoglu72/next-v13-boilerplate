import menus from "@/utils/menus";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <Link href="/" className="logo">
          Next V13 Boilerplate
        </Link>

        <div className="menu">
          <ul>
            {menus.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
