import React, { createContext, useState } from "react";

export const ListContext = createContext(null);

export const ListProvider = (props) => {
  const [TaskList, setTaskList] = useState([]);
  const [stepX,setStepX] = useState(0)
  const [stepY,setStepY] = useState(0)
  const [clockAngle, setClockAngle] = useState(0);
  const [antiClockAngle, setAntiClockAngle] = useState(0);
  const [historyLists, sethistoryLists] = useState([]);
  return (
    <ListContext.Provider
      value={{
        stepX,
        setStepX,
        stepY,
        setStepY,
        TaskList,
        setTaskList,
        clockAngle,
        setClockAngle,
        antiClockAngle,
        setAntiClockAngle,
        historyLists,
        sethistoryLists,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};
