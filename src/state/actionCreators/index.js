import {ADD_TASK, DELETE_ALL, DELETE_COMPLETED, DELETE_TASK, COMPLETE_TASK, SHOW_MODAL, HIDE_MODAL} from './actionTypes'

export const addTask = (task) => {
    return (dispatch) => {
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }
}

export const deleteTask = (id) => {
    return (dispatch) => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }
}

export const deleteAllTasks = () => {
    return (dispatch) => {
        dispatch({
            type: DELETE_ALL
        })
    }
}

export const deleteCompletedTasks = () => {
    return (dispatch) => {
        dispatch({
            type: DELETE_COMPLETED
        })
    }
}

export const completeTask = id => {
    return (dispatch) => {
        dispatch({
            type: COMPLETE_TASK,
            payload: id
        })
    }
}



export const showModal = () => {
    return (dispatch) => {
        dispatch({
            type: SHOW_MODAL,
        })
    }
}

export const hideModal = () => {
    return (dispatch) => {
        dispatch({
            type: HIDE_MODAL,
        })
    }
}