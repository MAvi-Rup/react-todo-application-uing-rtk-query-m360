import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../redux/features/TaskFeatures/taskSlice';


export const store = configureStore({
    reducer: {
        task: taskReducer,
    },
})