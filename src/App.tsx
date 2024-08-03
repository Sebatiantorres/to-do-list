import Card from './components/Card'
import Navbar from './components/Navbar'
import './styles/App.css'

function App() {
  return (
    <>
      <Navbar />
      <Card className='success'>
        <h2>Card title</h2>
        <p>Card content</p>
      </Card>
    </>
  )
}

export default App
