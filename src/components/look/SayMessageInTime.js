import React from 'react'

const SayMessageInTime = ({comp_id}) => {
  const displayMessage = () => {
    const element = document.getElementById("message-box");
    element.style.display = "block";
    element.style.position = "relative";
    element.innerHTML = "hello";
    setTimeout(()=>{
      element.innerHTML= ""
      element.style.display ="none"
    },2000);
  };
  return (
        <div
          id={comp_id}
          className=" w-full cursor-pointer p-2 text-center bg-yellow-400 text-black px-2 py-1 my-2 text-sm"
          onClick={() => displayMessage()}
        >
          Say hello for 2 second
        </div>
  );
}

export default SayMessageInTime
