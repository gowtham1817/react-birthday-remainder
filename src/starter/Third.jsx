import React from 'react'
import { useState } from 'react';
const Third = () => {
  
    const [people,setPeople] = useState({

        name:'gowtham',
        age:22,
        hobby:'music'
    });
    
  
  
  
    const removeAll = () =>{
         setPeople({name:'sandy',age:22,hobby:'playing'})
    }
    return (
      <>
       <section className='section'>
           
              <h1>{people.name}</h1>
              <h2>{people.age}</h2>
              <h3>{people.hobby}</h3>
              <button type='button' className='btns'  onClick={removeAll}>Change This</button>
         
       </section>
  
      </>
    )
}

export default Third