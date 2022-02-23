import React from "react";

//styles
import "./plans.css";

//images
import Free from "../../statics/images/Free.png";
import Standard from "../../statics/images/Standard.png";
import Premium from "../../statics/images/Premium.png";

const Plans = () => {
  return (
    <div className="plans">
      <h3 className="h3-head">
        <span className="bold-span"> Choose Your Plan </span>
      </h3>
      <p className="p-head">
        Let's choose the package that is best for you and explore it happily and
        <br></br>
        cheerfully.
      </p>
      <div className="cards">
        {/*     free     */}
        <div className="free">
          <img src={Free} alt="" />
          <p className="type">
            {" "}
            <span className="bold-span">Free Plan</span>{" "}
          </p>
          <ul>
            <li>Unlimited Bandwitch</li>
            <li>Encrypted Connection</li>
            <li>No Traffic Logs</li>
            <li className="last-free">Works on All Devices</li>
          </ul>
          <h3 className="price">Free</h3>
          <button className="submit-btn">Submit</button>
        </div>

        {/*     standard   */}
        <div className="standard">
          <img src={Standard} alt="" />
          <p className="type">
            {" "}
            <span className="bold-span">Standard Plan</span>{" "}
          </p>
          <ul>
            <li>Unlimited Bandwitch</li>
            <li>Encrypted Connection</li>
            <li>Yes Traffic Logs</li>
            <li>Works on All Devices</li>
            <li className="last-standard">Connect Anyware</li>
          </ul>
          <h3 className="price">$9 / mo</h3>
          <button className="submit-btn">Submit</button>
        </div>

        {/*  Premium    */}
        <div className="premium">
          <img src={Premium} alt="" />
          <p className="type">
            {" "}
            <span className="bold-span">Premium Plan</span>
          </p>
          <ul>
            <li>Unlimited Bandwitch</li>
            <li>Encrypted Connection</li>
            <li>Yes Traffic Logs</li>
            <li>Works on All Devices</li>
            <li>Connect Anyware</li>
            <li className="last-premium">Connect Anyware</li>
          </ul>
          <h3 className="price">$12 / mo</h3>
          <button className="submit-btn-p">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
