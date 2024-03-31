import React,{useState} from 'react'

const ThinkMessage = ({componentId}) => {
  const [message, setMessage] = useState("Hmmm..");
  const displayMessage = () => {
    const element1 = document.getElementById("message-box");
    const element2 = document.getElementById("message-box-1");
    element1.style.display = "block";
    element1.style.position = "relative";
    element2.style.display = "block";
    element2.style.position = "relative";
    element1.innerHTML = message;
  };
  return (
    <div
    id={componentId}
    className="p-1 w-full cursor-pointer text-center bg-yellow-400 text-black text-sm"
    onClick={() => displayMessage()}
  >
    <div className="grid grid-cols-2">
      <div className="text-black">Think</div>
      <input
        className="p-1 py-0 text-center text-black"
        type="text"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  </div>
  )
}

export default ThinkMessage
