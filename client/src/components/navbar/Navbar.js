import React from "react";
import logo from "../../asset/logo.png";
import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  const [login, setLogin] = useState(false);
  return (
    <>
      <div className="navbarWrap">
        <a href="/" className="logo">
          <img src={logo} alt="logo" className="logoImg" />
        </a>
        <div className="navbarMenu">
          <ul className="navList">
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/projects">PROJECTS</Link>
            </li>

            {login && (
              <li>
                <Link to="/notice">NOTICE</Link>
              </li>
            )}

            {!login && (
              <li>
                <Link to="/login">LOGIN</Link>
              </li>
            )}
            {!login && (
              <li>
                <Link to="/register">REGISTER</Link>
              </li>
            )}

            {login && (
              <li>
                <Link href="/">LOGOUT</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
