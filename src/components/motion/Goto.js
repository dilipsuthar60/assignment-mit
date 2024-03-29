import React, { useState } from "react";

const GotoXY = ({comp_id}) => {
  const [state, setState] = useState({
    goto_x: 0,
    goto_y: 0,
  });
    
  const gotoXY = () => {
    const element = document.getElementById("catSprite");
    console.log(state,element)
    element.style.position = "relative";
    element.style.left = state.goto_x + "px";
    element.style.top = state.goto_y + "px";
  };

  return (
    <div className="text-center rounded bg-blue-500  p-2 my-3">
        <div className="grid grid-cols-2 my-2">
          <div className="text-white text-sm font-semibold"> X</div>
          <input
            className="mx-2 p-1 py-0 text-center text-black"
            type="number"
            value={state.goto_x}
            onChange={(e) => {
              parseInt(e.target.value) !== 0 &&
                setState({ ...state, goto_x: parseInt(e.target.value)});
            }}
          />
        </div>
        <div className="grid grid-cols-2 my-2">
          <div className="text-white text-sm font-semibold">Y</div>
          <input
            className="mx-2 p-1 py-0 text-center text-black"
            type="number"
            value={state.goto_y}
            onChange={(e) => {
              parseInt(e.target.value) !== 0 &&
                setState({ ...state, goto_y: parseInt(e.target.value)});
            }}
          />
        </div>
        <div
          id={comp_id}
          className="flex bg-red-600 text-white px-2 py-1 mt-3 mb-1 text-sm cursor-pointer"
          onClick={() => gotoXY()}
        >
          <div className="flex mx-auto">
          Go to X : {state.goto_x} Y : {state.goto_y}
          </div>
        </div>
      </div>
  );
};

export default GotoXY;