import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  completeTodos,
  removeTodos,
  updateTodos,
} from "../redux/reducer";
import TodoItem from "./TodoItem";

// Map the Redux state to component props
const mapStateToProps = (state) => ({
  todos: state,
});

// Map dispatch functions to component props
const mapDispatchToProps = (dispatch) => ({
  addTodo: (obj) => dispatch(addTodos(obj)),
  removeTodo: (id) => dispatch(removeTodos(id)),
  updateTodo: (obj) => dispatch(updateTodos(obj)),
  completeTodos: (id) => dispatch(completeTodos(id)),
});

const DisplayTodos = (props) => {
  const [sort, setSort] = useState("active");

  // Function to sort todos by due date
  const sortedTodos = (todos) => {
    return todos
      .slice()
      .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  };

  return (
    <div className="displaytodos">
      <div className="buttons">
        <button onClick={() => setSort("active")}>Active</button>
        <button onClick={() => setSort("completed")}>Completed</button>
        <button onClick={() => setSort("all")}>All</button>
      </div>
      <ul>
        {props.todos.length > 0 &&
          sortedTodos(props.todos).map((item) => {
            if (sort === "active" && !item.completed) {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={props.removeTodo}
                  updateTodo={props.updateTodo}
                  completeTodos={props.completeTodos}
                />
              );
            }
            if (sort === "completed" && item.completed) {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={props.removeTodo}
                  updateTodo={props.updateTodo}
                  completeTodos={props.completeTodos}
                />
              );
            }
            if (sort === "all") {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={props.removeTodo}
                  updateTodo={props.updateTodo}
                  completeTodos={props.completeTodos}
                />
              );
            }
            return null;
          })}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
