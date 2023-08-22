import React, { useState } from 'react'

const Usestate = () => {
  const [value,setValue] = useState(0)
  const handleClick = () =>{

    setValue(value+1)
  }
  const handleC = () =>{

    setValue(value-1)
  }
  return (
    <div>
        <h1>{value}</h1>
        <button className='btn' type='button' onClick={handleC}>Decrease</button>
        <button className='btn' type='button' onClick={handleClick}>Increase</button>
        
    </div>
  )
}

export default Usestate