import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export default function Task(props) {

    const actions = bindActionCreators(actionCreators, useDispatch())

    return (
        <div id="taskContainer" className={`bg-white mt-2 pl-2 flex justify-between  ${props.task.isCompleted ? 'bg-green-400 line-through' : 'bg-white'}`} >
            {props.task.text}
            <div onClick={ e => actions.completeTask(parseInt(e.target.id))} id={`${props.task.id}`} className="w-8 h-5.5 bg-green-400 "> V </div>
        </div>
    )
}
