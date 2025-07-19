import React from 'react'
import { useState } from 'react'

export default function TaskForm({addTask}) {
    const [task, settask] = useState('')
    const [priority, setpriority] = useState('Medium')
    const [category, setcategory] = useState('General')

    const handlesubmit = (e) =>{

        e.preventDefault()

          addTask({text:task , priority, category, completed:false})

          //reset state
          settask('')
          setpriority("Medium")
          setcategory("General")
    }
  return (

    <form onSubmit={handlesubmit} className='task-form'>
        <div id='inp'>
            <input type='text' 
            placeholder='Enter the task' 
            value={task}
            onChange={(e)=> settask(e.target.value) } />
            <span><button type='submit'>Add Task</button></span>
        </div>
        <div id='btns'>
            <select value={priority} onChange={(e)=>setpriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <select value={category} onChange={(e)=>setcategory(e.target.value)}>
                <option value="General">General</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
            </select>

            
        </div>
    </form>
  )
}
