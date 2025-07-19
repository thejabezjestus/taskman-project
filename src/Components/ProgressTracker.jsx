import React from 'react'

export default function ProgressTracker({Tasks}) {
  const completedTasks = Tasks.filter((t)=>t.completed).length
  const totalTasks = Tasks.length
  const percentage = totalTasks == 0 ? 0 : (completedTasks/totalTasks) * 100
  return (
    <div className='progress-tracker'>
        <p>
          {completedTasks} out of {totalTasks} task completed
        </p>
        <div className='progress-bar'> 
          <div className='progress' 
          style={{width: `${percentage}%`}}>


          </div>

        </div>
        
    </div>
  )
}
