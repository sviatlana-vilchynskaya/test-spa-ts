import React from "react";
import Search from "./Search";

function Header() {
  return (
    <div className="navbar bg-slate-500 shadow-lg shadow-slate-600/50 text-cyan-50 mb-6">
      <div className="container mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Logo</a>
        </div>
        <Search />
        <div className="flex-none ">
          <ul className="menu menu-horizontal p-0">
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
