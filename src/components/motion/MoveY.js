import React, { useContext, useState } from "react";
import { ListContext } from "../../context/MidListArea";

const MoveY = ({ componentId }) => {
  const [stepInY, setStepInY] = useState(15);
  const context = useContext(ListContext);
  const handleClick = () => {
    const element = document.getElementById("catSprite");
    element.style.position = "relative";
    element.style.top = context.stepY + stepInY + "px";
    context.setStepY(stepInY + context.stepY);
  };

  return (
    <div
      id={componentId}
      className={`text-center rounded text-white p-2  text-sm cursor-pointer mx-auto`}
      onClick={() => handleClick()}
    >
      Move Y{" "}
      <input
        type="number"
        className="text-black text-center w-16 mx-2"
        value={stepInY}
        onChange={(e) => setStepInY(parseInt(e.target.value))}
        onClick={(e) => e.stopPropagation()}
      />{" "}
      steps
    </div>
  );
};

export default MoveY;
