import React, { useState, useContext } from "react";
import { ListContext } from "../../context/MidListArea";

// Move Component for Sidebar
const MoveX = ({ componentId }) => {
  const [stepInX, setStepInX] = useState(15);
  const context = useContext(ListContext);
  const handleClick = () => {
    const element = document.getElementById("catSprite");
    element.style.position = "relative";
    element.style.left = stepInX + context.stepX + "px";
    context.setStepX(stepInX + context.stepX);
  };

  return (
    <div
      id={componentId}
      className={`text-center rounded text-white p-2  text-sm cursor-pointer mx-auto`}
      onClick={() => handleClick()}
    >
      Move X{" "}
      <input
        type="number"
        className="text-black text-center w-16 mx-2"
        value={stepInX}
        onChange={(e) => {
          if (e.target.value != 0) setStepInX(parseInt(e.target.value));
        }}
        onClick={(e) => e.stopPropagation()}
      />{" "}
      steps
    </div>
  );
};

export default MoveX;
