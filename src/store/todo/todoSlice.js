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
            state.splice(action.payload,1)
        },
        changeChecked(state,action){
            return state.map((todo, index) =>
            index === action.payload ? { ...todo, done: !todo.done } : todo
          );
        }
    }
})

export const { addTodo, removeTodo, changeChecked } = todoSlice.actions
export default todoSlice.reducer