
import '../styles/CardButtons.css'
function CardButtons() {
  return (
    <>
        <div className='button-container'>
            <button id='create' className="card-button">Create</button>
            <button id='edit' className="card-button">Edit</button>
            <button id='delete' className="card-button">Delete</button>
    
        </div>
    </>
  )
}

export default CardButtons