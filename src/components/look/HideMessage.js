import React from 'react'

const HideMessage = ({componentId}) => {
  return (
    <div
    id={componentId}
    className=" w-full cursor-pointer p-2 text-center bg-yellow-400 text-black px-2 py-1 my-2 text-sm"
    onClick={() => displayMessage()}
  >
    {/* <div className="grid grid-cols-2"> */}
      <div className="text-black" >Hide Messages </div>
    {/* </div> */}
  </div>
  )
}

export default HideMessage
