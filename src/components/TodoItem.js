import React, { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodos } = props;
  const inputRef = useRef(null);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.key === "Enter") {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  const priorityStyles = {
    High: { color: 'red' },
    Medium: { color: 'orange' },
    Low: { color: 'green' },
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
        <button onClick={changeFocus}>
          <AiFillEdit />
        </button>
        {item.completed === false && (
          <button
            style={{ color: "green" }}
            onClick={() => completeTodos(item.id)}
          >
            <IoCheckmarkDoneSharp />
          </button>
        )}
        <button style={{ color: "red" }} onClick={() => removeTodo(item.id)}>
          <IoClose />
        </button>
      </div>
      {item.completed && <span className="completed">Done</span>}
      <span style={priorityStyles[item.priority]}>{item.priority}</span>
      <span>{item.dueDate}</span>
    </li>
  );
};

export default TodoItem;
