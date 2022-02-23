import React from "react";

//images
import Logo from "../../statics/images/Logo.png";

//style
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>About</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>Help</li>
        </ul>
      </div>
      <div className="register">
        <ul>
          <li className="sign-in">
            <span className="bold-span"> Sign In</span>
          </li>
          <li className="sign-up">
            <span className="bold-span"> Sign Up</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
