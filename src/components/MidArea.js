import React, { useState, useContext } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { getComponent } from "./getComponents";
import { ListContext } from "../context/MidListArea";
 
export default function MidArea() {
  const { TaskList, historyLists, sethistoryLists } = useContext(ListContext);
  const [showHistory, setShowHistory] = useState(false);
 
  const doSomeTask = async (element) => {
    element.click();
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };
 
  const runTask = async () => {
    if (TaskList.length == 0) alert("Need at least one Task");
    if (!historyLists.includes(TaskList)){
      sethistoryLists([...historyLists, TaskList])
    }
    for (let i = 0; i < TaskList.length; i++) {
      const element = document.getElementById(TaskList[i]);
      await doSomeTask(element);
    }
  };
  return (
    <div className="flex-1 h-full overflow-auto">
      <div className="text-center text-white">
        <div className="bg-red-500 p-2 font-bold">Mid Area</div>
          <div className="text-center m-2">
            <button
              onClick={()=>setShowHistory(!showHistory)}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              History
            </button>
          </div>
          {
            showHistory ? <>
                { historyLists.map( (previousTaskList, index) => {
                  return <div className="w-60 text-center rounded bg-red-500 p-2 my-3">
                  <ul
                  className={`w-59 h-full`}
                >
                  {
                   previousTaskList.map((x, i) => {
                    let componentKey = `${x}`;
                    return (
                      <li
                        className="m-2 border-2 p-2 bg-blue-500"
                      >
                        {getComponent(componentKey, componentKey)}
                      </li>
                    );
                  })
                  }
                    </ul>
                  </div>
                })
                }
                </>
              :
              <div style={{width:"44%"}} className="w-60 text-center rounded bg-red-500 p-2 my-3">
              <Droppable droppableId="mid-area" type="COMPONENTS">
                {(provided) => {
                  return (
                    <ul
                      className={`w-59 h-full`}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      <div className="text-center">
                        <button
                          onClick={runTask}
                          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Run Task
                        </button>
                      </div>
                      {TaskList.map((x, i) => {
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
                                {getComponent(componentKey, componentKey)}
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
          }
      </div>
    </div>
  );
}