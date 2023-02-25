import React from "react";
import "../styles/header.css";
import logo from "../images/zomato-logo.avif";
import profile from "../images/profile-icon.avif";
function Header() {
  return (
    <div className="max-width header">
      <img src={logo} className="header-logo" />
      <div className="header-right">
        <div className="header-location">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i class="fa-solid fa-location-dot absolute-center location-icon"></i>
              <div>Delhi</div>
            </div>
            <i className="fa-solid fa-caret-down absolute-center"></i>
          </div>
          <div className="location-search-seprate"></div>
          <div className="header-searchbar">
            <i class="fa-solid fa-magnifying-glass absolute-center search-icon"></i>
            <input
              placeholder="Search for restaurant, cousin or a dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img src={profile} className="profile-img" />
          <span className="username">Aryavir</span>
          <i className="fa-solid fa-caret-down absolute-center profile-option-icon"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
