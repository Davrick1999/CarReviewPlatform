import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const activeLink = {
    borderBottom: "1px solid #ccc",
  };

  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            CRP
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                activeStyle={!click && activeLink}
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
                exact
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={!click && activeLink}
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={!click && activeLink}
                to="/compare"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Comparison
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/my-profile"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                My Profile
              </NavLink>
            </li>
          </ul>
          {button && (
            <Button to="/my-profile" buttonStyle="btn-outline">
              My Profile
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
