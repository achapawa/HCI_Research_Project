import React from 'react'

function Slider() {
  return (
    <div>
        <h4 className='slider-head'>Slider</h4>
      <div className='slider-main'>
      
      <label className="switch">
        <input type="checkbox" />
        <div className="slider"></div>
            
      </label>
    <div class="slideOne">	
	<input type="checkbox" value="None" id="slideOne" name="check" />
	<label for="slideOne"></label>
</div>
      
    
    </div>
    </div>
  )
}

export default Slider