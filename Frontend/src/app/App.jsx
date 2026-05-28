import './App.css'
import { useState } from 'react'

function App() {

  const [titleInput, setTitleInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')
  const [search, setSearch] = useState('')

  const [tasks, setTasks] = useState([
    {
      title: 'Learn React',
      description: 'Practice hooks and components',
      status: 'pending'
    },
    {
      title: 'Build Backend',
      description: 'Create Express APIs',
      status: 'completed'
    }
  ])

  const addTask = () => {

    if (
      titleInput.trim() === '' ||
      descriptionInput.trim() === ''
    ) return

    setTasks([
      ...tasks,
      {
        title: titleInput,
        description: descriptionInput,
        status: 'pending'
      }
    ])

    setTitleInput('')
    setDescriptionInput('')
  }

  const toggleTask = (index) => {

    const updatedTasks = [...tasks]

    updatedTasks[index].status =
      updatedTasks[index].status === 'completed'
        ? 'pending'
        : 'completed'

    setTasks(updatedTasks)
  }

  const deleteTask = (index) => {

    const updatedTasks = tasks.filter(
      (_, i) => i !== index
    )

    setTasks(updatedTasks)
  }

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
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
                  checked={task.status === 'completed'}
                  onChange={() => toggleTask(index)}
                />

                <div>

                  <h3
                    className={
                      task.status === 'completed'
                        ? 'completed-task'
                        : ''
                    }
                  >
                    {task.title}
                  </h3>

                  <p>
                    {task.description}
                  </p>

                </div>

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
            placeholder="Task title..."
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                document.getElementById('descriptionInput').focus()
              }
            }}
            className="task-input"
          />

          <input
            id="descriptionInput"
            type="text"
            placeholder="Task description..."
            value={descriptionInput}
            onChange={(e) => setDescriptionInput(e.target.value)}
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