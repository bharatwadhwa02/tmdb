import React from "react";
import "../css/Navbar.css";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  let location = useLocation();
  if (location.pathname === "/404") {
    return null;
  }
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <h1>Movies DB</h1>
          {/* <img
            className="logo"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="logo"
          /> */}
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">
              <span>home</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <span>about</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
