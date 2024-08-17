import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('todos')) || [];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('todos', JSON.stringify(state));
    },
    removeTodos: (state, action) => {
      const newState = state.filter((todo) => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(newState));
      return newState;
    },
    updateTodos: (state, action) => {
      const newState = state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, item: action.payload.item };
        }
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(newState));
      return newState;
    },
    completeTodos: (state, action) => {
      const newState = state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: true };
        }
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addTodos, removeTodos, updateTodos, completeTodos } =
  addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
