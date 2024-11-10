import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './toDosSlice'
export const store = configureStore({
    reducer:{
        task:taskReducer
    }
})