import React from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea() {
  return (
    <div id="catSprite" className="transition-all duration-2000 m-4" >
      <div className="absolute">
        <div id="message-and-catsprite-box">
          <div
            className="hidden border-2 p-1 ml-3 mb-1 w-auto whitespace-nowrap"
            id="message-box"
          ></div>
          <div
            className="hidden rounded-full border-2 w-4 left-1/2 h-4 ml-3 mb-2 whitespace-nowrap"
            id="message-box-1"
          ></div>
          <CatSprite />
        </div>
      </div>
    </div>
  );
}
