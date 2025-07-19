import React from 'react'

export default function TaskList({Tasks, updateTask, deleteTask}) {
  const toggleComplete = (index)=>{
    const updatedTask = {...Tasks[index], completed : !Tasks[index].completed }
    updateTask(updatedTask, index)
  }

  return (
    <ul className='task-list'>
      {Tasks.map((task, index)=>(
        <li key={index} className= {task.completed ? 'completed': '' }>
          <div>
            <span>{task.text}</span>
            <small>({task.priority}), ({task.category})</small>
          </div>
          <div>
            <button onClick={()=>toggleComplete(index)}>
              {task.completed ? "undo": "complete"}</button>
            <button onClick={()=>deleteTask(index)}>Delete</button>
          </div>
        </li>
      ))}

    </ul>
  )
}
