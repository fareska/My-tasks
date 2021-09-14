import { combineReducers } from "redux"
import tasksReducer from './tasksReducer'
import tasksModalReducer from './tasksModalReducer'

const reducers = combineReducers({
    tasks: tasksReducer,
    tasksModal: tasksModalReducer
})

export default reducers