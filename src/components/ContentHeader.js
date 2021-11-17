import React from "react";
import { Icon } from "./Icons";

const ContentHeader = () => {
  return (
    <div className="content-header">
      <div className="flex flex-row">
        <div className="content-header-button">
          <Icon name="back" size={24} />
        </div>
        <div className="content-header-button">
          <Icon name="next" size={24} />
        </div>
      </div>
      <div className="content-header-user-widget">
        <img
          className="h-8 w-8 rounded-full"
          src="https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-1/p320x320/239142137_4585362264861503_4653068861142566958_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=Y0rYOyk7btMAX_IgTfE&_nc_ht=scontent-cdg2-1.xx&edm=AP4hL3IEAAAA&oh=e10551b6d0212703d8be2a8bd0e50241&oe=6179E5CB"
        />
        <span className="w-28 overflow-hidden whitespace-nowrap overflow-ellipsis">
          Muhammet Akkurt
        </span>
        <span className="text-white">
          <Icon name="arrow" size={12} />
        </span>
      </div>
    </div>
  );
};

export default ContentHeader;
