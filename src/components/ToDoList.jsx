import React from 'react'

const ToDoList = ({ToAdds, handleDelete, handleEdit}) => {
  return (
    <div className='ToDoList'>
    <ul>
    {
      ToAdds.map((item)=>(
        <li className="singleTodo" >
        <span className="todoText" key={item.id}>{item.task}</span>
        <button onClick={() => handleEdit(item.id)}>Edit</button>
        <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
      ))
    }
    </ul> 
    </div>
  )
}

export default ToDoList