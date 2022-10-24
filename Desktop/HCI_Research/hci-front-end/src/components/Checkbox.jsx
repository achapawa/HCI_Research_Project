import React from 'react'
import { useState } from "react";
import "../styles/Checkbox.css"

function Checkbox(props) {
    const [isChecked, setIsChecked] = useState(false);
   
    
  return (
    <div className='main-check'>
        <h4 className='head-checkbox'>Checkboxes</h4>
        <div className='checkbox'>
        <label >
            <input className="check-1" type="checkbox"  onChange={() => setIsChecked((prev) => !prev)} />
            <span className='checkmark'>{props.label}</span>
            {isChecked && <div>
            <p>Great!</p>
            </div>}
      </label>
      </div>
      <div className='checkbox'>
      <label className='script'>
            <input  type="checkbox"  className='check-2'/>
            <span className='geekmark'></span>
      </label>
      </div>
      
    </div>
  )
}

export default Checkbox