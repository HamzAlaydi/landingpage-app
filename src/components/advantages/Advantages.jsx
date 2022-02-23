import React from "react";

//style
import "./advantages.css";

const Advantages = () => {
  return (
    <div className="advantages">
      <div className="users">
        <span className="bold-span">
          {" "}
          90+ <span className="line"></span>
        </span>
      </div>

      <div className="locations">
        <span className="bold-span">
          {" "}
          30+ <span className="line"></span>
        </span>
      </div>
      <div className="servers">
        <span className="bold-span"> 50+</span>
      </div>
    </div>
  );
};

export default Advantages;
