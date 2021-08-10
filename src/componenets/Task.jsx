import React from 'react'

export default function Task(props) {

    const completeHandler = (e) => {
        let taskIndex = e.target.id
        props.completeTask(taskIndex)
    }

    return (
        <div id="taskContainer" className={`bg-white m-2 flex justify-between  ${props.task.isCompleted ? 'bg-green-400' : 'bg-white'}`} >
            {props.task.task}
            <div onClick={completeHandler} id={`${props.id}`} className="w-8 h-5.5 bg-green-400 "> V </div>
        </div>
    )
}
