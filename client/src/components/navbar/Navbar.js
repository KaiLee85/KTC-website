import React from "react";
import logo from "../../asset/logo.png";
import { useState } from "react";

function Navbar() {
  const [login, setLogin] = useState(false);
  return (
    <>
      <div className="navbarWrap">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="navbarMenu">
          <ul>
            <li>
              <a href="/about">ABOUT</a>
            </li>
            <li>
              <a href="/projects">PROJECTS</a>
            </li>
            {login && (
              <li>
                <a href="/notice">NOTICE</a>
              </li>
            )}

            <li>
              <a href="/login">LOGIN</a>
            </li>
            <li>
              <a href="/register">REGISTER</a>
            </li>
            {login && (
              <li>
                <a href="/">LOGOUT</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
