import React, { useState,useContext } from "react";
import { ListContext } from "../../context/MidListArea";

const TurnClockWise = ({componentId}) => {

  const context = useContext(ListContext);
  const [angle, setAngle] = useState(0);

  const handleClick =  ()=>{
    if(!angle) return
    const element = document.getElementById("cat");
    element.style.transform = `rotate(${angle+context.clockAngle}deg)`;
    context.setClockAngle(angle+context.clockAngle)
  }

  return (
    <div className="text-center rounded bg-blue-500 p-2 my-3">
        <div className="grid grid-cols-2">
          <div className="text-white">Clock By:</div>
          <input
            className="mx-2 p-1 py-0 text-center text-black"
            type="number"
            value={angle}
            onChange={(e) => {
              setAngle(parseInt(e.target.value));
            }}
          />
        </div>
        <div
          id={componentId}
          className={`flex bg-red-600 text-white px-2 py-1 mt-3 mb-1 text-sm cursor-pointer`}
          onClick={() => handleClick()}
        >
          <div className="flex mx-auto">
            Turn {" "}
            {angle} degrees
          </div>
        </div>
      </div>
  );
};

export default TurnClockWise
