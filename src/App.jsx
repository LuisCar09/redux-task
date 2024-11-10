import { useState } from "react";
import { addTask } from "./redux/toDosSlice";
import { deleteTask } from "./redux/toDosSlice";
import { useDispatch,useSelector } from "react-redux";
const App = () => {
  const [counter,setCounter] = useState(1)
  const [task,setTask] = useState('')
  const tasks = useSelector((state) => state.task.tasks)

  
  const dispatch = useDispatch()
  
  const saveGlobalTask = () => {
    dispatch(addTask({id:counter,title:task,completed:false}))
    setCounter(counter + 1)
  }
  const deleteGlobalTask = (id) => {
    
    
    dispatch(deleteTask({id,tasks}))
  }
  
  return (
    <div className="taskContainer">
      <form>
        <h1>To Do List!</h1>
        <label htmlFor="taskId" >Task title: </label>
        <input id="taskId" placeholder="Type a new task" value={task} onChange={(e) => setTask(e.target.value)} />
        <button type="button" onClick={saveGlobalTask}>Add task</button>
      </form>

      <div className="taskContainer--taskLists">
        <ul>
        {tasks.map(task => <li style={{listStyle:'none'}} key={task.id}><span style={{margin:'0 20px 20px 0'}}>{task.title}</span> <button style={{margin:'0 20px 20px 0'}} onClick={() => deleteGlobalTask(task.id)} >Delete</button></li>)}
        </ul>
      </div>
    </div>
  );
};

export default App;
