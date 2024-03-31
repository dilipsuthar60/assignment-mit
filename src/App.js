import React, { useState, useContext } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import { DragDropContext } from "react-beautiful-dnd";
import { ListContext } from "./context/MidListArea";

export default function App() {
  const context = useContext(ListContext);
  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (source.droppableId == "mid-area" && !destination) {
      context.TaskList.splice(source.index, 1);
      context.setTaskList([...context.TaskList]);
      return;
    }
    console.log(result);
    if (destination.droppableId == source.droppableId) return;
    let componentKey = draggableId.split("-")[0];
    if (destination.droppableId == "mid-area") {
      context.TaskList.splice(source.index, 1);
      context.setTaskList([...context.TaskList, componentKey]);
    }
  };
  return (
    <div className="bg-blue-100 font-sans">
      <div className="bg-blue-500 p-2 text-center text-white">
        <a href="https://github.com/dilipsuthar60/assignment-mit" target="_black" className="bg-green-500 p-2 cursor-pointer">github Link</a>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="h-screen overflow-hidden flex flex-row  ">
          <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
            <Sidebar />
            <MidArea />
          </div>
          <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
            <PreviewArea />
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}
