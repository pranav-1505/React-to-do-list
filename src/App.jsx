import { useState } from 'react'
import './App.css'
import ToDoAdd from './components/ToDoAdd';
import ToDoList from './components/ToDoList';
function App() {
    const[task, setTask]= useState("")
    const[ToAdds, setToAdds]= useState([])
    const[editID, seteditID]= useState(0)

const handleSubmit =(e)=>{
  e.preventDefault();
debugger
  if(editID){
    const updatedTasks = ToAdds.map((todo) =>
      todo.id === editID ? { ...todo, task } : todo
    );
    setToAdds(updatedTasks)
    seteditID(0);
    setTask("");
    return;
  }

  if(task !== ''){
    setToAdds([{id:`${task}-${Date.now}`, task}, ...ToAdds])
    setTask("")
  }
} 

const handleDelete =(id)=>{
  const deleteTask = ToAdds.filter((s)=> s.id !== id)
  setToAdds([...deleteTask])
}

const handleEdit =(id)=>{
  const editTask = ToAdds.find((o)=> o.id === id)
  setTask(editTask.task)
  seteditID(id)
}

  return (
 <div className='Main-container'>
   <h3>To Do List</h3>
   <ToDoAdd handleSubmit={handleSubmit} task={task} setTask={setTask} editID={editID}/>
   <ToDoList
    ToAdds={ToAdds}
    handleDelete={handleDelete}
    handleEdit={handleEdit}
    />
  </div>
  )
}

export default App
