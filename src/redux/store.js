import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../redux/features/TaskFeatures/taskSlice';
import priorityFilterReducer from '../redux/features/priorityFilterSlice';


export const store = configureStore({
    reducer: {
        task: taskReducer,
        priorityFilter: priorityFilterReducer,
    },
})