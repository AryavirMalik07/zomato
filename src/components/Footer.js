import React from "react";
import "../styles/footer.css";
import logo from "../images/zomato-logo.avif";
{
  /* <div className="absolute-center">Made by Aryavir Malik</div>; */
}
function Footer() {
  return (
    <div className="footer">
      <div className="upper-footer max-width absolute-center">
        <img src={logo} className="header-logo " />
      </div>
      <div className="social max-width">
        <a href="#" className="social-icon">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="#" className="social-icon">
          <i class="fa-sharp fa-regular fa-envelope"></i>
        </a>
        <a href="#" className="social-icon">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
      <div className="footer-line absolute-center">Made by Aryavir Malik</div>
    </div>
  );
}

export default Footer;
