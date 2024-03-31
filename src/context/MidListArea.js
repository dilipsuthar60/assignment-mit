import React, { createContext, useState } from "react";

export const ListContext = createContext(null);

export const ListProvider = (props) => {
  const [TaskList, setTaskList] = useState([]);
  const [clockAngle, setClockAngle] = useState(0);
  const [antiClockAngle, setAntiClockAngle] = useState(0);
  return (
    <ListContext.Provider
      value={{
        TaskList,
        setTaskList,
        clockAngle,
        setClockAngle,
        antiClockAngle,
        setAntiClockAngle,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};
