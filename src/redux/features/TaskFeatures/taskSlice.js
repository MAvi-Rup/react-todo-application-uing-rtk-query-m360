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

        completeTask: (state, action) => {
            const { id } = action.payload;
            const index = state.taskList.findIndex(task => task.id === id);
            if (index !== -1) {
                state.taskList[index].completed = true;
            }
        },

        deleteTask: (state, action) => {
            const idToDelete = action.payload;
            state.taskList = state.taskList.filter(task => task.id !== idToDelete);
        },
    },
});

export const { addTask, completeTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
