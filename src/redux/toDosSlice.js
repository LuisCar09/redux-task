import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks:[]
}

export const taskSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{
        addTask: (state,action) => { 
            const task = action.payload;  
            state.tasks.push(task)
              
        },
        deleteTask:(state,action) => {
            const {id,tasks} = action.payload 
            const filter = tasks.filter(task => task.id !== id)
            state.tasks = filter
   
        }
    }
})

export const {addTask,deleteTask } = taskSlice.actions

export default taskSlice.reducer