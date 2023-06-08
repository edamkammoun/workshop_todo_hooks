import React from 'react'
import Edit from './Edit'

const TaskCard = ({task,deleteMethode,completeMethod,handleEdit}) => {
  return (
    <div>
        <h1>{task.action}</h1>
        <button onClick={()=>deleteMethode(task.id)} >Delete</button>
        <button onClick={()=>completeMethod(task.id)} >{task.isDone?"Undo":"Complete"}</button>
       <Edit task={task}  handleEdit={handleEdit}/>
        <hr />
    </div>
  )
}

export default TaskCard