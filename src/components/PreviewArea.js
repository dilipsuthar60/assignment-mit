import React from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea() {
  return (
    <div className="flex-none w-full h-full overflow-y-auto p-2">
      <CatSprite />
    </div>
  );
}
