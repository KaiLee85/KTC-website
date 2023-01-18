import React from "react";
import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="footerWrap">
        <div className="footerIcon">
          KTC CODING CLUB
          <FaInstagram />
          <FaFacebookSquare />
        </div>
        <div className="footerCopyright">Copyright &copy; 2023</div>
      </footer>
    </>
  );
}

export default Footer;
