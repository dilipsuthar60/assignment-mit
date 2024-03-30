import React from "react";
import CatSprite from "./CatSprite";
import "../index.css";


export default function PreviewArea() {
  return (
    <div id="catSprite" className="catSprite m-4" >
      <div className="absolute">
        <div id="message-and-catsprite-box">
          <div
            className="hidden border-2 p-2 ml-3 mb-2 w-auto whitespace-nowrap"
            id="message-box"
          >uhu</div>
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
