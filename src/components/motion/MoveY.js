import React, { useState } from "react";

const MoveY = ({comp_id}) => {
  const [stepInY, setStepInY] = useState(0);
  const handleClick =  ()=>{
    setStepInY((prev) => prev + 15);
    const element = document.getElementById("catSprite");
    element.style.position = "relative";
    element.style.top = stepInY + "px";
  }
  
  return (
    <div className="cursor-pointer" onClick={handleClick}>Move 
    <span className="bg-white text-black rounded-full m-1"> 15 </span> Step in Y </div>
  );
};

export default MoveY;
