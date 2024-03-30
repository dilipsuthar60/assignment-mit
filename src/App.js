import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import { DragDropContext } from "react-beautiful-dnd";

export default function App() {
  const [midAreaTaskList, setmidAreaTaskList] = useState([]);
  const onDragEnd = (result) => {
    const { source, destination,draggableId } = result;
    console.log(result)
    if (!destination) return;
    if (
      destination.droppableId == source.droppableId
    )
      return;
    let componentKey = draggableId.split("-")[0];
    if (destination.droppableId == "mid-area") {
      midAreaTaskList.splice(source.index,1);
      setmidAreaTaskList([...midAreaTaskList, componentKey]);
    }
  };
  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="h-screen overflow-hidden flex flex-row  ">
          <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
            <Sidebar />
            <MidArea midAreaTaskList={midAreaTaskList} />
          </div>
          <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
            <PreviewArea />
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}
