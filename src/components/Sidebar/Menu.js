import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "../Icons";

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <NavLink
          exact
          className="menu-item"
          activeClassName="menu-item__active"
          to="/"
        >
          <span>
            <Icon name={"home"} size={24} />
          </span>
          Home
        </NavLink>
        <NavLink
          exact
          className="menu-item"
          activeClassName="menu-item__active"
          to="/search"
        >
          <span>
            <Icon name={"search"} size={24} />
          </span>
          Search
        </NavLink>
        <NavLink
          exact
          className="menu-item"
          activeClassName="menu-item__active"
          to="/library"
        >
          <span>
            <Icon name={"library"} size={24} />
          </span>
          Library
        </NavLink>
      </ul>
    </nav>
  );
};

export default Menu;
