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
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer