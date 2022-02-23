import React from "react";

//styles
import "./subscribe.css";

//images
import sBtn from "../../statics/images/sBtn.png";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="right-content">
        <h3>
          <span className="bold-span">
            {" "}
            Subscribe Now <br></br> for Get Special Features!
          </span>
        </h3>
        <p>Let's subscribe with us and find the fun.</p>
      </div>
      <div className="left-content">
        <img src={sBtn} alt="" />
      </div>
    </div>
  );
};

export default Subscribe;
