import React from "react";
import { Icon } from "./Icons";

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      <div className="bottom-bar__current-track">
        <img
          src="https://i.scdn.co/image/ab67616d000048513e45c39d0e752a728be2b24d"
          className="h-16"
          alt=""
        />
        <div>
          <h4 className="font-semibold text-sm">Kopya Kalpler</h4>
          <h5 className="font-light text-xs">Sagopa Kajmer</h5>
        </div>
        <span>
          <Icon name="heart" size={16} />
        </span>
      </div>
      <div className="bottom-bar__current-player">
        <div className="bottom-bar__current-player-buttons"></div>
        <div className="bottom-bar__current-player-line">
          <span>2:48</span>
          <span className="bottom-bar__current-player-line-active"></span>
          <span>3:16</span>
        </div>
      </div>
      <div className="bottom-bar__buttons"></div>
    </div>
  );
};

export default BottomBar;
