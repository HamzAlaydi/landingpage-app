import React from "react";

//styles
import "./features.css";

//images
import Illustration2 from "../../statics/images/Illustration2.png";
const Features = () => {
  return (
    <div className="features">
      <div className="right-contents">
        <img src={Illustration2} alt="computer" />
      </div>
      <div className="left-contents">
        <h3>
          <span className="bold-span">
            {" "}
            We Provide Many Features You Can Use
          </span>
        </h3>
        <p>
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <ul>
          <li>Powerfull online protection.</li>
          <li>Internet without borders.</li>
          <li>Supercharged VPN</li>
          <li>No specific time limits.</li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
