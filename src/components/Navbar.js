// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";
import HomeIcon from "../resources/house-key-icon.svg";
import InstagramIcon from "../resources/Instagram.svg";
import TwitterIcon from "../resources/twitter.png";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img
              src={HomeIcon}
              alt="Home Icon"
              style={{ width: "70px", height: "70px", fill: "#000" }}
            />
          </Link>
        </li>
        <li>
          <Link to="/instagram">
            <img
              src={InstagramIcon}
              alt="IG Icon"
              style={{ width: "70px", height: "70px", fill: "#000" }}
            />
          </Link>
        </li>
        <li>
          <Link to="/twitter">
            <img
              src={TwitterIcon}
              alt="Twitter Icon"
              style={{ width: "70px", height: "70px", fill: "#000" }}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
