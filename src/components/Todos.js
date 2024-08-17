import React, { useState } from "react";
import { connect } from "react-redux";
import store from "../redux/store";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  console.log("props from store", props);

  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
      />
      <button className="add-btn">Add</button>
    </div>
  );
};

//Connect method is used to connect this component with redux store
export default connect(mapStateToProps, null)(Todos);
