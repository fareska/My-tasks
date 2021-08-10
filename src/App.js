import { useState, useEffect } from 'react';
import './App.css';
import DeleteButton from './componenets/DeleteButton';
import TaskInput from './componenets/TaskInput';
import TasksContainer from './componenets/TasksContainer';

function App() {

  const [tasks, setTasks] = useState([])

  // useEffect(() => {
  //   localStorage.setItem('tasks', JSON.stringify(tasks))
  // }, [tasks])

  useEffect(() => {
    let locals = JSON.parse(localStorage.getItem('tasks' || '[]'))
    setTasks(locals)
  }, [])

  const addTask = (task) => {
    let taskData = { isCompleted: false, task }
    let tempTasks = [...tasks]
    tempTasks.push(taskData)
    setTasks(tempTasks)
    localStorage.setItem('tasks', JSON.stringify(tempTasks))
  }
  
  const deleteTasks = (btnClicked) => {
    if (btnClicked === 'deleteAll') {
      setTasks([])
      localStorage.setItem('tasks', '[]')
    } else {
      let updated = []
      tasks.forEach(task => !task.isCompleted && updated.push(task))
      setTasks(updated);
      localStorage.setItem('tasks', JSON.stringify(updated))
    }
  }

  const completeTask = (taskId) => {
    let update = [...tasks]
    update.map((t, i) => i === parseInt(taskId) ? t.isCompleted = !t.isCompleted : null)
    setTasks(update)
  }

  return (
    <div className="App">
      <div id="tasksContainer" className="bg-blue-400 h-20" >
        <h1>My Tasks List</h1>
        <TaskInput addTask={addTask} />
        <DeleteButton deleteTasks={deleteTasks} />
        <TasksContainer completeTask={completeTask} tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
