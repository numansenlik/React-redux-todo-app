import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo(state, action) {
            console.log("add:::", state, action);
            state.push(action.payload)
        }
    }
})

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer