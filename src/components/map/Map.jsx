import React from "react";

//style
import "./map.css";

//images
import Global from "../../statics/images/Global.png";
import Discord from "../../statics/images/Discord.png";
import Spotify from "../../statics/images/Spotify.png";
import Netflix from "../../statics/images/Netflix.png";
import Amazon from "../../statics/images/Amazon.png";
import Reddit from "../../statics/images/Reddit.png";
const Map = () => {
  return (
    <div className="map">
      <h3 className="h3-head">
        <span className="bold-span">
          Huge Global Network<br></br> of Fast VPN
        </span>
      </h3>
      <p className="p-head">
        See LaslesVPN everywhere to make it easier for you when you move
        <br></br>
        locations.
        <br></br>
      </p>
      <img className="map-image" src={Global} alt="Global" />
      <div className="images">
        <img src={Netflix} alt="Netflix" />
        <img src={Reddit} alt="Reddit" />
        <img src={Amazon} alt="Amazon" />
        <img src={Discord} alt="Discord" />
        <img src={Spotify} alt="Spotify" />
      </div>
    </div>
  );
};

export default Map;
