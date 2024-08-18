import React from "react";
import "./css/main.css";
import Todos from "./components/Todos";
import DisplayTodos from "./components/DisplayTodos";

function App() {
  return (
    <div className="App">
      <h1><img width="40px" src="https://cdn-icons-png.flaticon.com/128/4472/4472515.png" alt=""></img>Todo List</h1>
      <h4>Plan your day, then work your plan</h4>
      <Todos />
      <DisplayTodos />
    </div>
  );
}

export default App;
