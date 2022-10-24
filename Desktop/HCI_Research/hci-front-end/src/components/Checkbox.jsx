import React from 'react'
import { useState } from "react";
import "../styles/Checkbox.css"

function Checkbox(props) {
    const [isChecked, setIsChecked] = useState(false);
    const [isClicked, setIsClicked] =useState(false)
    
  return (
    <div>
        <h4 className='head-checkbox'>Checkboxes</h4>
        <div className='checkbox'>
        <label >
            <input type="checkbox"  onChange={() => setIsChecked((prev) => !prev)} />
            <span className='checkmark'>{props.label}</span>
            {isChecked && <div>
            <p>Great!</p>
            </div>}
      </label>
      </div>
      <div className='checkbox'>
      <label>
            <input className='checkbox-2' type="checkbox" />
            <span>Check this</span>
      </label>
      </div>
      
      <h4 className='slider-head'>Slider</h4>
      <div className='slider-main'>
      
      <label className="switch">
        <input type="checkbox" onChange={() => setIsClicked((prev) => !prev)} />
        <div className="slider"></div>
            {isClicked && <div><p>Wow!</p></div>}
      </label>
    <div class="slideOne">	
	<input type="checkbox" value="None" id="slideOne" name="check" />
	<label for="slideOne"></label>
</div>
      
    
    </div>
    </div>
  )
}

export default Checkbox