import React from "react";
import Search from "../Search/Search";
import "./styles/index.css";

function Header() {
  return (
    <div className="nav-wrap">
      <div className="container-center">
        <div className="logo-wrap">
          <a className="logo">Logo</a>
        </div>
        <Search />
        <div className="menu-wrap">
          <ul className="menu-list">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
