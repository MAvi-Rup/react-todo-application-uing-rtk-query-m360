import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    taskList: [],

}

export const taskSlice = createSlice({
    name: "TaskManager",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.taskList.push(action.payload)
        },


    },
})
export const { addTask, editTask, completeTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;