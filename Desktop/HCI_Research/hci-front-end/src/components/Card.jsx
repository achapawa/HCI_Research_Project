import {React, useState} from 'react'
import "../styles/Card.css"

function Card() {
    
  return (
    <div className='cards'>
     <div className='card'>
        <button className='card-but'>16 GB</button>
        <button className='card-but'>16 GB</button>
        <button className='card-but'>16 GB</button>
        <button className='card-but'>16 GB</button>
     </div>
     <div className='card'>
    <form>
    <div className="radio">
      <label>
        <input type="radio" value="option1" checked={true} />
        Option 1
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="option2" />
        Option 2
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="option3" />
        Option 3
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="option4" />
        Option 4
      </label>
    </div>
  </form>
  </div>
  </div>

  )
}

export default Card