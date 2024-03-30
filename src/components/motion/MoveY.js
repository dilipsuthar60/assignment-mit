import React, { useState } from "react";

const MoveY = ({comp_id}) => {
  const [stepInY, setStepInY] = useState(0);
  const handleClick =  ()=>{
    const element = document.getElementById("catSprite");
    element.style.position = "relative";
    element.style.top = 15 + stepInY + "px";
    setStepInY((prev) => prev + 15);
  }
  
  return (
    <div id={comp_id} className="w-full cursor-pointer p-2 text-center" onClick={handleClick}>
      Move
      <span className="bg-white text-black rounded-full m-1 text-center"> 15 </span> Step in
      Y{" "}
    </div>
  );
};

export default MoveY;
