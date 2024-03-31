import React, { useState } from "react";

const GotoXY = ({componentId}) => {
  const [step, setStep] = useState({
    x: 0,
    y: 0,
  });
    
  const handleGoto = () => {
    const element = document.getElementById("catSprite");
    element.style.position = "relative";
    element.style.left = step.x + "px";
    element.style.top = step.y + "px";
  };

  return (
    <div className="text-center rounded bg-blue-500  p-2 my-3">
        <div className="grid grid-cols-2 my-2">
          <div className="text-white text-sm font-semibold"> X</div>
          <input
            className="mx-2 p-1 py-0 text-center text-black"
            type="number"
            value={step.x}
            onChange={(e) => {
                setStep({ ...step, x: parseInt(e.target.value)});
            }}
          />
        </div>
        <div className="grid grid-cols-2 my-2">
          <div className="text-white text-sm font-semibold">Y</div>
          <input
            className="mx-2 p-1 py-0 text-center text-black"
            type="number"
            value={step.y}
            onChange={(e) => {
                setStep({ ...step, y: parseInt(e.target.value)});
            }}
          />
        </div>
        <div
          id={componentId}
          className="flex bg-red-600 text-white px-2 py-1 mt-3 mb-1 text-sm cursor-pointer"
          onClick={() => handleGoto()}
        >
          <div className="flex mx-auto">
          Go to X : {step.x }  Y : {step.y}
          </div>
        </div>
      </div>
  );
};

export default GotoXY;