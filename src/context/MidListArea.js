import React,{ createContext,useState } from "react";

export const ListContext = createContext(null);

export const ListProvider = (props) => {
  const [TaskList, setTaskList] = useState([]);
  return (
    <ListContext.Provider value={{ TaskList, setTaskList }}>
      {props.children}
    </ListContext.Provider>
  );
};
