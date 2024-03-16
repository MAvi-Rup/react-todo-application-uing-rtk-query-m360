import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    taskList: [],
};

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.taskList.push(action.payload);
        },
    },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
