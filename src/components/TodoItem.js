import React, { useRef } from "react";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodos } = props;
  const inputRef = useRef(null);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.key === 'Enter') {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (

    <li key={item.id} className="card">
      <textarea
        ref={inputRef}
        disabled={true}
        defaultValue={item.item}
        onKeyDown={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
      <button onClick={changeFocus}>Edit</button>
      <button onClick={() => completeTodos(item.id)}>Complete</button>
      <button onClick={() => removeTodo(item.id)}>Delete</button>{" "}
      </div>
      {item.completed && <span className="completed">Done</span>}
    </li>
  );
};

export default TodoItem;
