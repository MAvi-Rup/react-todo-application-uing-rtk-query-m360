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
            const id = action.payload;
            const taskToUpdate = state.taskList.find(task => task.id === id);
            if (taskToUpdate) {
                taskToUpdate.completed = !taskToUpdate.completed;
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
