import { createSlice } from "@reduxjs/toolkit";

const storedTasks = JSON.parse(localStorage.getItem("taskList"));

const initialState = {
    taskList: storedTasks || [],
};


export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.taskList.push(action.payload);
            localStorage.setItem("taskList", JSON.stringify(state.taskList));
        },

        completeTask: (state, action) => {
            const id = action.payload;
            const taskToUpdate = state.taskList.find(task => task.id === id);
            if (taskToUpdate) {
                taskToUpdate.completed = !taskToUpdate.completed;
                localStorage.setItem("taskList", JSON.stringify(state.taskList));
            }
        },

        deleteTask: (state, action) => {
            const idToDelete = action.payload;
            state.taskList = state.taskList.filter(task => task.id !== idToDelete);
            localStorage.setItem("taskList", JSON.stringify(state.taskList));
        },


        editTask: (state, action) => {
            const { id, updatedTask } = action.payload;
            const updatedTaskList = state.taskList.map(task => {
                if (task.id === id) {
                    return updatedTask;
                }
                return task;
            });
            state.taskList = updatedTaskList;
            localStorage.setItem("taskList", JSON.stringify(state.taskList));
        },
    },
});

export const { addTask, completeTask, deleteTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;
