import React, { useEffect, useState } from 'react'
import ProgressTracker from './Components/progresstracker'
import TaskForm from './Components/taskform'
import TaskList from './Components/tasklist'
import './style.css'


export default function App() {
    const [Tasks, setTasks] = useState([])
    
    useEffect(()=>{
      localStorage.setItem("tasks", JSON.stringify(Tasks))
    }, [Tasks]);

    const addTask = (task) =>{
     setTasks([...Tasks, task])
    }

    const updateTask = (updatedTask, index) =>{
      const newtask = [...Tasks];
      newtask[index] = updatedTask;
      setTasks(newtask)
    }
    const deleteTask = (index) =>{
      setTasks(Tasks.filter((_, i)=> i != index))
      
    }

    const clearTasks =()=>{
      setTasks([])
    }

  return (
    <div className='App'>
      <header>
        <h1  className='title'>TaskMan</h1>
        <p className='tagline'>Jarvis</p>
      </header>
      <TaskForm addTask = {addTask} />
      <TaskList Tasks = {Tasks} 
       updateTask = {updateTask} 
       deleteTask = {deleteTask} />
      <ProgressTracker Tasks = {Tasks} />
     {Tasks.length>0 && (<button className='clear-btn' 
     onClick={clearTasks} >Clear All Tasks</button>)}
      
    </div>
  )
}
