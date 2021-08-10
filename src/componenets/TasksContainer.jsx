import React from 'react'
import Task from './Task'

export default function TasksContainer(props) {
    
    const tasks = props.tasks

    console.log('TasksContainer' , tasks);
    return (
        <div>
            {tasks.map((t,i)=> {
                return(
                    <Task key={i} id={i} task={t} completeTask={props.completeTask} />
                )
            })}
        </div>
    )
}
