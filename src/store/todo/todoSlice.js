import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo(state, action) {
            state.unshift(action.payload)
        },
        removeTodo(state, action) {
            console.log(action);
            state.splice(action.payload, 1)
        },
        changeChecked(state, action) {
            return state.map((todo, index) =>
                index === action.payload ? { ...todo, done: !todo.done } : todo
            );
        },
        clearCompleted(state) {
            return state.filter((todo) => !todo.done);
        },
        toggleAll(state, action) {
            const allCompleted = state.every((todo) => todo.done);
            return state.map((todo) => ({
              ...todo,
              done: !allCompleted,
            }));
          },
        },
      });
export const { addTodo, removeTodo, changeChecked, clearCompleted, toggleAll } = todoSlice.actions
export default todoSlice.reducer