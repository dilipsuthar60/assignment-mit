import React, { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { getComponent } from "./getComponents";
import { motionComponents, looksComponents } from "./Slidebarconst";

export default function MidArea() {
  const [midAreaList, setmidAreaList] = useState([]);
  const runTask = ()=>{
    if (midAreaList.length==0 ) alert("Need at least one Task")
  }
  return (
    <div className="flex-1 h-full overflow-auto">
      <div className="text-center m-2">
        <span className="bg-slate-400">Mid Area</span>
        <div className="w-52 p-2 text-center rounded bg-red-500 p-2 my-3">
          <Droppable droppableId="mid-area" type="COMPONENTS">
            {(provided) => {
              return (
                <ul
                  className={`w-48 h-full`}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <div>
                    <button onClick={runTask} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                      Run Task
                    </button>
                  </div>
                  {midAreaList.map((x, i) => {
                    let componentKey = `${x}`;
                    return (
                      <Draggable
                        key={`${componentKey}-${i}`}
                        draggableId={`${componentKey}-${i}`}
                        index={i}
                      >
                        {(provided) => (
                          <li
                            className="m-2 border-2 p-2 bg-blue-500"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {getComponent(componentKey)}
                            {provided.placeholder}
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              );
            }}
          </Droppable>
        </div>
      </div>
    </div>
  );
}
