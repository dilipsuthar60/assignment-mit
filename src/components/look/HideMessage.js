import React from "react";

const HideMessage = ({ componentId }) => {
  const handleMessage = ()=>{
    const messageElement = document.getElementById("message-box");
    const thinkElement =document.getElementById("message-box-1");
    messageElement.innerHTML= ""
    messageElement.style.display ="none"
    thinkElement.style.display = "none"
  }
  return (
    <div
      id={componentId}
      className=" w-full cursor-pointer p-2 text-center bg-yellow-400 text-black px-2 py-1 my-2 text-sm"
      onClick={() => handleMessage()}
    >
      <div className="text-black px-2">Hide Messages </div>
    </div>
  );
};

export default HideMessage;
