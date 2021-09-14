import { useState, useEffect } from 'react'
import './App.css'
import DeleteButton from './components/DeleteButton'
import Modal from './components/Modal'
import TaskInput from './components/TaskInput'
import TasksContainer from './components/TasksContainer'

import { useSelector } from 'react-redux'


function App() {
  const tasksStore = useSelector((state) => state.tasks)

  // const [tasks, setTasks] = useState([])

  // useEffect(() => {
  //   setTasks(tasksStore)
  // }, [])

  return (
    <div className="App">
      <div id="tasksContainer" className="p-6 h-90 max-w-sm mx-auto mt-3 rounded-xl shadow-md items-center space-x-4" >
        <h1>My Tasks List</h1>
        <TaskInput  />
        <DeleteButton   />
        <TasksContainer  tasks={tasksStore} />
        {/* {(showModal) ? <Modal  hideModal={setShowModal} /> : null} */}
      </div>
    </div>
  )
}

export default App

// useEffect(() => {
//   let locals = JSON.parse(localStorage.getItem('tasks')) || []
//   setTasks(locals)
// }, [])

// const addTask = (task) => {
//   let taskData = { isCompleted: false, task }
//   let tempTasks = [...tasks]
//   tempTasks.push(taskData)
//   setTasks(tempTasks)
//   localStorage.setItem('tasks', JSON.stringify(tempTasks))
// }

// const deleteAllTasks = () => {
//   setShowModal(false)
//     setTasks([])
//     localStorage.setItem('tasks', '[]')
// }

// const deleteTasks = (btnClicked) => {
//   if (btnClicked === 'deleteAll') {
//     setShowModal(true)

//   } else {
//     let updated = []
//     tasks.forEach(task => !task.isCompleted && updated.push(task))
//     setTasks(updated)
//     localStorage.setItem('tasks', JSON.stringify(updated))
//   }
// }

// const completeTask = (taskId) => {
//   let update = [...tasks]
//   update.map((t, i) => i === parseInt(taskId) ? t.isCompleted = !t.isCompleted : null)
//   setTasks(update)
// }