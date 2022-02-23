import React from "react";

//styles
import "./footer.css";

//image
import Logo from "../../statics/images/Logo.png";
import Facebook from "../../statics/images/Facebook.png";
import Twitter from "../../statics/images/Twitter.png";
import Instagram from "../../statics/images/Instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      {/* Col One */}
      <div className="colomns">
        <div className="col-one">
          <img src={Logo} alt="" />
          <p className="last-p">
            <span className="bold-span">LaslesVPN</span> is a private virtual
            network that <br></br> has unique features and has high security.
          </p>
          <div className="social-images">
            <img src={Facebook} alt="Facebook" />
            <img src={Twitter} alt="Twitter" />
            <img src={Instagram} alt="Instagram" />
          </div>
          <p className="copy-right">©2020LaslesVPN</p>
        </div>

        {/* Col Two */}
        <div className="col-two">
          <h3>Product</h3>
          <ul>
            <li>Download </li>
            <li>Pricing</li>
            <li>Locations</li>
            <li>Server</li>
            <li>Countries</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Col Three*/}
        <div className="col-three">
          <h3>Engage</h3>
          <ul>
            <li>LaslesVPN ? </li>
            <li>FAQ</li>
            <li>Tutorials</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Col Four */}
        <div className="col-four">
          <h3>Earn Money</h3>
          <ul>
            <li>Affiliate</li>
            <li>Become Partner</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
