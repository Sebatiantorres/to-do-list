import { useState } from 'react'
import '../styles/CreateTasks.css'

interface ICreateTasks {
  onCreate: (task: string) => void
}

function CreateTasks({ onCreate }: ICreateTasks) {
  const [task, setTask] = useState<string>('')

  const addTask = (task: string) => {
    if (task) {
      onCreate(task)
    } else {
      console.error('Task cannot be empty')
    }
  }

  return (
    <div className='create-task-component'>
      <div className='label-task-wrapper'>
        <label htmlFor="todo-check">
          Create a new task
        </label>
      </div>
      <div className='input-task-wrapper'>
        <input 
          type="text" 
          id="todo-check" 
          placeholder="Enter a task" 
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button id='add-task' onClick={() => {
          addTask(task)
        }}>
          {'+'}
        </button>
      </div>
    </div>
  )
}

export default CreateTasks