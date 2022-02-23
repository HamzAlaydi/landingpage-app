import React from "react";

//styles
import "./main.css";

//images
import mainImage from "../../statics/images/Illustration.png";
const Main = () => {
  return (
    <div className="main">
      <div className="right-content">
        <p className="title">
          Want anything to be easy{" "}
          <span className="bold-span"> with LaslesVPN.</span>
        </p>
        <p className="des">
          Provide a network for all your needs with ease and fun using
          <span className="bold-span"> LaslesVPN</span>
          discover interesting features from us
        </p>
        <button className="start-btn">Get Started</button>
      </div>
      <div className="left-content">
        <img src={mainImage} alt="main images" />
      </div>
    </div>
  );
};

export default Main;
