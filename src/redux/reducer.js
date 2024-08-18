import { createSlice } from "@reduxjs/toolkit";

// Initialize state from localStorage or set an empty array
const initialState = JSON.parse(localStorage.getItem("todos")) || [];

// Create a Redux slice for managing todos
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Add a new todo to the state and localStorage
    addTodos: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    // Remove a todo from the state and localStorage
    removeTodos: (state, action) => {
      const newState = state.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    },
    // Update an existing todo's item in the state and localStorage
    updateTodos: (state, action) => {
      const newState = state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, item: action.payload.item }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    },
    // Mark a todo as completed in the state and localStorage
    completeTodos: (state, action) => {
      const newState = state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: true }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    },
  },
});

// Export actions and reducer from the slice
export const { addTodos, removeTodos, updateTodos, completeTodos } = todoSlice.actions;
export const reducer = todoSlice.reducer;
