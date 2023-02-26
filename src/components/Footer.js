import React from "react";
import "../styles/footer.css";
import logo from "../images/zomato-logo.avif";
{
  /* <div className="absolute-center">Made by Aryavir Malik</div>; */
}
function Footer() {
  return (
    <div className="footer">
      <div className="upper-footer max-width">
        <img src={logo} className="header-logo" />
        <div className="region">
          <button className="footer-btn">India</button>
          <button className="footer-btn">Language</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
