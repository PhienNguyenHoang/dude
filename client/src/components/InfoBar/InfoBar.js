import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./InfoBar.css";

import CloseIcon from "@material-ui/icons/Close";

const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online icon" />
        <span>{room}</span>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <CloseIcon style={{color: 'white'}}/>
        </a>
      </div>
    </div>
  );
};
export default InfoBar;
