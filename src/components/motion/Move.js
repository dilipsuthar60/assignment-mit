import React, { useState } from "react";

// Move Component for Sidebar
const Move = ({ componentId }) => {
  const [stepInX, setStepInX] = useState(15);
  const handleClick = () => {
    const element = document.getElementById("catSprite");
    let left = element.offsetLeft - 916;
    element.style.position = "relative";
    element.style.left =left+ stepInX + "px";
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
        onChange={(e) => setStepInX(parseInt(e.target.value))}
      />{" "}
      steps
    </div>
  );
};

export default Move;
