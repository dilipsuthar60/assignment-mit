import React,{useState} from 'react'

const SayMessageInTime = ({componentId}) => {
  const [message, setMessage] = useState("hello")
  const [second, setSecond] = useState(2)
  const displayMessage = () => {
    const element = document.getElementById("message-box");
    element.style.display = "block";
    element.style.position = "relative";
    element.innerHTML = message;
    setTimeout(()=>{
      element.innerHTML= ""
      element.style.display ="none"
    },second*1000);
  };
  return (
    <div
    id={componentId}
    className=" w-full cursor-pointer text-center bg-yellow-400 text-black text-sm"
    onClick={() => displayMessage()}
  >
    <div className="grid grid-cols-2">
      <div className="text-black">Say</div>
      <input
        className="p-2 m-1 py-0 text-center text-black"
        type="text"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        onClick={(e) => e.stopPropagation()} 
      />
      <div className="text-black">second</div>
      <input
        className="m-1 text-center text-black"
        type="number"
        value={second}
        onChange={(e) => {
          if(e.target.value>0)
          setSecond(e.target.value);
        }}
        onClick={(e) => e.stopPropagation()} 
      />
    </div>
  </div>
  );
}

export default SayMessageInTime
