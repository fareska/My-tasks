import './App.css'
import DeleteButton from './components/DeleteButton'
import Modal from './components/Modal'
import TaskInput from './components/TaskInput'
import TasksContainer from './components/TasksContainer'

import { useSelector } from 'react-redux'

function App() {
  const tasksStore = useSelector((state) => state.tasks)
  const tasksModalStore = useSelector((state) => state.tasksModal)

  console.log(tasksModalStore)
  return (
    <div className="App">
      <div id="tasksContainer" className="p-6 h-90 max-w-sm mx-auto mt-3 rounded-xl shadow-md items-center space-x-4" >
        <h1>My Tasks List</h1>
        <TaskInput  />
        <DeleteButton />
        <TasksContainer  tasks={tasksStore} />
        {tasksModalStore.isModalOn && <Modal  /> }
      </div>
    </div>
  )
}

export default App

