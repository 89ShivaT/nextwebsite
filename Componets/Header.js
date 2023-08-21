// "use client";
import React from "react";
const Header = ({ logo, menu }) => {
  return (
    <div className="header">
      <div className="logo">
        <h1>{logo}</h1>
      </div>
      {/* logo end here */}
      <div className="menu">
        <ul>
          <li>
            {menu.ul1}
            <span>{menu.ulimg1}</span>
          </li>
          <li>
            {menu.ul2}
            <span>{menu.ulimg2}</span>
          </li>
          <li>
            {menu.ul3}
            <span>{menu.ulimg3}</span>
          </li>
          <li>
            {menu.ul4}
            <span>{menu.ulimg4}</span>
          </li>
          <li>
            {menu.ul5}
            <span>{menu.ulimg5}</span>
          </li>
        </ul>
      </div>
      {/* menu end here */}
    </div>
    //    header end here
  );
};

export default Header;
