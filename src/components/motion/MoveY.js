import React, { useState } from "react";

const MoveY = ({componentId}) => {
  const [stepInY, setStepInY] = useState(15);
  const handleClick =  ()=>{
    const element = document.getElementById("catSprite");
    var top = element.offsetTop - 41;
    console.log(top)
    element.style.position = "relative";
    element.style.top = top + stepInY + "px";
  }
  
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
