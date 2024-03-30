import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "tailwindcss/tailwind.css";
import { ListProvider } from "./context/MidListArea";

console.log("hi");

ReactDOM.render(
  <React.StrictMode>
    <ListProvider>
      <App />
    </ListProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
