import React from "react";
import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        {" "}
        <footer className="footerWrap">
          <p>KTC CODING CLUB</p>
          <ul className="footerIcon">
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaFacebookSquare />
            </li>
          </ul>
          <p className="footerCopyright">
            Copyright &copy; 2023 designed by <span>Kai Lee</span>
          </p>
        </footer>
      </footer>
    </>
  );
}

export default Footer;
