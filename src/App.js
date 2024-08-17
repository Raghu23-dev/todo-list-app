import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/Todos";
import DisplayTodos from "./components/DisplayTodos";

function App() {
  return (
    <div className="App">
      <h1>TODO PLANNER APP</h1>
      <h4>PLAN YOUR DAY, THEN WORK YOUR PLAN</h4>
      <Todos />
      <DisplayTodos/>
    </div>
  );
}

export default App;
