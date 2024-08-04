import Card from './components/Card'
import CardButtons from './components/CardButtons'
import CreateTasks from './components/CreateTasks'
import Navbar from './components/Navbar'
import './styles/App.css'


function App() {
  return (
    <>
      <Navbar />
      <Card>
      <div className="card-content">
        <CreateTasks />
        <div className='card-title'>
          <h2>Card title</h2>
        </div>
        <CardButtons />
      </div>
      <p>Card content</p>
      </Card>
    </>
  )
}

export default App
