import React from 'react'

const ToDoAdd = ({handleSubmit, task, setTask, editID }) => {
  return (
    <div className='ToDoAdd'>
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={(e)=> setTask(e.target.value)}/>
      <button type="submit">{editID ? "Edit":"Add"}</button>
    </form>
    </div>
  )
}

export default ToDoAdd