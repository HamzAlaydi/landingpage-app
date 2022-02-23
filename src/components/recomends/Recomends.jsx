import React from "react";

//styles
import "./recomends.css";

//images
import p1 from "../../statics/images/p1.png";
import p2 from "../../statics/images/p2.png";
import p3 from "../../statics/images/p3.png";
import dots from "../../statics/images/dots.png";
import left from "../../statics/images/left.png";
import right from "../../statics/images/right.png";
const Recomends = () => {
  return (
    <div className="recomends">
      <h3 className="h3-head">
        {" "}
        <span className="bold-span">
          Trusted by Thousands of <br></br> Happy Customer
        </span>
      </h3>
      <p className="p-head">
        These are the stories of our customers who have joined us with great{" "}
        <br />
        pleasure when using this crazy feature.
      </p>

      {/* CARDS */}
      <div className="cards">
        {/*   First   Cards    */}
        <div className="first">
          <img className="p-images" src={p1} alt="first person commint" />
          <span className="num-star">4.5</span>

          <p>
            “Wow... I am very happy to use this VPN, it turned out to be more
            than my expectations and so far there have been no problems.
            LaslesVPN always the best”.
          </p>
        </div>

        {/*   Second   Cards    */}
        <div className="second">
          {" "}
          <img className="p-images" src={p2} alt="second person commint" />
          <span className="num-star">4.5</span>
          <p>
            “I like it because I like to travel far and still can connect with
            high speed.”.
          </p>
        </div>

        {/*   Third   Cards    */}
        <div className="third">
          {" "}
          <img className="p-images" src={p3} alt="Third person commint" />
          <span className="num-star">4.5</span>
          <p>
            “This is very unusual for my business that currently requires a
            virtual private network that has high security.”.
          </p>
        </div>
      </div>
      <div className="clicks">
        <div className="right-btns">
          <img src={dots} alt="" />
        </div>
        <div className="left-btns">
          <img src={left} alt="left" />
          <img className="right" src={right} alt="right" />
        </div>
      </div>
    </div>
  );
};

export default Recomends;
