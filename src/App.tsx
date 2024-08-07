import { useState } from 'react'
import Card from './components/Card'
import CardButtons from './components/CardButtons'
import CreateTasks from './components/CreateTasks'
import Navbar from './components/Navbar'
import './styles/App.css'


function App() {
  const [tasks, setTasks] = useState<string[]>([])

  return (
    <>
      <Navbar />
      <Card>
        <div className="card-content">
          <div className='card-title'>
            <p>Create, manage and remove all To Do List tasks below</p>
          </div>
          <CardButtons />
        </div>
        <CreateTasks
          onCreate={(task: string) => {
            setTasks([...tasks, task])
          }}
        />
        <div className='task-list'>
          {tasks.map((task, index) => (
            <div key={index} className='task'>
              <p>{task}</p>
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}

export default App
