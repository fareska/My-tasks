import React from 'react'

export default function Task(props) {

    const completeHandler = (e) => {
        let taskIndex = e.target.id
        props.completeTask(taskIndex)
    }

    return (
        <div>
            {props.task.task}
            <input onClick={completeHandler}  type="checkbox" name="" id={`${props.id}`} />
        </div>
    )
}
