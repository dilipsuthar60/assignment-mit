import React, { useState } from "react";

// Move Component for Sidebar
const Move = ({ comp_id }) => {
  const [stepInX, setStepInX] = useState(0);
  const handleClick = () => {
    setStepInX((prev) => prev + 15);
    const element = document.getElementById("catSprite");
    console.log(element)
    element.style.position = "relative";
    element.style.left = stepInX + "px";
  };

  return (
    <div className="w-full cursor-pointer p-2 text-center" onClick={handleClick}>
      Move
      <span className="bg-white text-black rounded-full m-1 text-center"> 15 </span> Step in
      X{" "}
    </div>
  );
};

export default Move;
