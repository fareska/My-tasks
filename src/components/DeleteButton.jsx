import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state/index'

const  DeleteButton = () => {
    const dispatch = useDispatch()
    return (
        <div id="buttonsContainer" className="flex" >
            <button
                className="bg-red-400 w-40 hover:bg-red-600 rounded p-1 m-2 ml-0"
                name="deleteAll"
                onClick={(e) => dispatch(actionCreators.deleteAllTasks(e.target.name))}
            >
                Delete All
            </button>
            <button
                className="bg-red-400 w-40 hover:bg-red-600 rounded m-2"
                name="deleteCompleted"
                onClick={() => dispatch(actionCreators.deleteCompletedTasks())}
            >
                Delete Completed
            </button>
        </div>
    )
}

export default DeleteButton