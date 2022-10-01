import {createSlice} from "@reduxjs/toolkit";
import {Todo} from "../../types/todo.type";

export const TodoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state:Todo[], action) => {
            const todo ={
                id: Math.random(),
                title: action.payload,
                completed: false,
            };
            state.push(todo);
        }
    }
})

export const {addTodo} = TodoSlice.actions;
export default TodoSlice.reducer;
