import React from 'react'

const SayMessageInTime = ({comp_id}) => {
  const displayMessage = () => {
    const el = document.getElementById("message-box");
    const el2 = document.getElementById("message-box-1");
    console.log(el, el2);
    el.style.display = "block";
    el.style.position = "relative";
    el.innerHTML = "hello";
    setTimeout(()=>{
      el.innerHTML= ""
      el.style.display ="none"
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
