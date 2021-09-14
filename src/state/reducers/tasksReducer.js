import {ADD_TASK, DELETE_ALL, DELETE_COMPLETED, DELETE_TASK, COMPLETE_TASK, SHOW_MODAL, HIDE_MODAL} from '../actionCreators/actionTypes'
let tasksIdCounter = 1

const reducer = (state = [], action) => {
    switch (action.type) {
        case (ADD_TASK):
            return [
                ...state,
                {
                    id: tasksIdCounter++,
                    text: action.payload,
                    isCompleted: false
                }
            ]

        case (DELETE_TASK):
            return state.filter(task => task.id != action.payload)

        case (DELETE_ALL):
            return []

        case (DELETE_COMPLETED):
            return  state.filter(task => !task.isCompleted)

        case (COMPLETE_TASK):
            return state.map(task => task.id == action.payload ? { ...task, isCompleted: true } : task)

        default:
            return state
    }
}

export default reducer