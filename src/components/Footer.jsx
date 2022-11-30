import React from "react";
import { logo } from "./index";
import "../SASS/footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} alt="" />
      </div>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Careers</Link>
        </li>
        <li>
          <Link to="/">Events</Link>
        </li>
        <li>
          <Link to="/Product">Products</Link>
        </li>
        <li>
          <Link to="/">Support</Link>
        </li>
      </ul>
      <div className="social-icon">
        <a target="_blank" href="https://github.com/tehseen01">
          <i className="fa-brands fa-github"></i>
        </a>
        <a target="_blank" href="https://instagram.com/tehseen.01">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a>
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a>
          <i className="fa-brands fa-facebook"></i>
        </a>
      </div>
      <p>© 2022 Loopstudios. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
