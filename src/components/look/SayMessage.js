import React, { useState } from "react";

const SayMessage = ({ componentId }) => {
  const [message, setMessage] = useState("hello");
  const displayMessage = () => {
    const element = document.getElementById("message-box");
    element.style.display = "block";
    element.style.position = "relative";
    element.innerHTML = message;
  };
  return (
    <div
      id={componentId}
      className=" w-full cursor-pointer p-2 text-center bg-yellow-400 text-black px-2 py-1 my-2 text-sm"
      onClick={() => displayMessage()}
    >
      <div className="grid grid-cols-2">
        <div className="text-black" >Say </div>
        <input
          className="mx-2 p-1 py-0 text-center text-black"
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          onClick={(e) => e.stopPropagation()} 
        />
      </div>
    </div>
  );
};

export default SayMessage;
