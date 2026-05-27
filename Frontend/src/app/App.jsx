import './App.css'
import { useState } from 'react'

function App() {

  const [taskInput, setTaskInput] = useState('')
  const [search, setSearch] = useState('')

  const [tasks, setTasks] = useState([
    { text: 'Learn React', completed: false },
    { text: 'Build Backend', completed: true }
  ])

  const addTask = () => {

    if (taskInput.trim() === '') return

    setTasks([
      ...tasks,
      {
        text: taskInput,
        completed: false
      }
    ])

    setTaskInput('')
  }

  const toggleTask = (index) => {

    const updatedTasks = [...tasks]

    updatedTasks[index].completed =
      !updatedTasks[index].completed

    setTasks(updatedTasks)
  }

  const deleteTask = (index) => {

    const updatedTasks = tasks.filter(
      (_, i) => i !== index
    )

    setTasks(updatedTasks)
  }

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="main">

      <div className="screen">

        <div className="header">
          Task Tracker
        </div>

        <div className="search-container">

          <input
            type="text"
            placeholder="Search tasks"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />

        </div>

        <div className="tasks-container">

          {filteredTasks.map((task, index) => (

            <div className="task-card" key={index}>

              <div className="task-left">

                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(index)}
                />

                <span
                  className={
                    task.completed ? 'completed-task' : ''
                  }
                >
                  {task.text}
                </span>

              </div>

              <button
                className="delete-btn"
                onClick={() => deleteTask(index)}
              >
                ✕
              </button>

            </div>

          ))}

        </div>

        <div className="bottom-input">

          <input
            type="text"
            placeholder="Write a task..."
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                addTask()
              }
            }}
            className="task-input"
          />

          <button
            className="add-btn"
            onClick={addTask}
          >
            +
          </button>

        </div>

      </div>

    </div>
  )
}

export default App