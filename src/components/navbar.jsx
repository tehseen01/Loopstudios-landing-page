import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../SASS/navbar.scss";
import logo from "../assets/images/logo.svg";
import Product from "./Product";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const handelClick = () => {
    setOpenNav(!openNav);
    setShowNav(!showNav);
  };

  return (
    <header>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="mobile-nav-btn" onClick={handelClick}>
        <i className={`fa-solid fa-bars ${openNav ? "close" : "open"}`}></i>
        <i className={`fa-solid fa-close ${openNav ? "open" : "close"}`}></i>
      </div>
      <nav className={`${showNav ? "show-nav" : "hide-nav"}`}>
        <ul>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/careers">Careers</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li>
            <NavLink to="/Product">Products</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
