/**
 * https://redux-toolkit.js.org/api/createSlice
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //here we will write our reducer
    //Adding todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //removing Todos
    removeTodos:(state,action)=>{
        return state.filter((todo) => todo.id !== action.payload);
    },
    //updating Todos
    updateTodos:(state,action)=>{
        return state.map((todo) => {
            if(todo.id===action.payload.id){
                return{
                    ...todo,
                    item:action.payload.item,
                };
            }
            return todo;
});
    },
},
});

export const {addTodos,removeTodos,updateTodos}=addTodoReducer.actions
export const reducer = addTodoReducer.reducer;
