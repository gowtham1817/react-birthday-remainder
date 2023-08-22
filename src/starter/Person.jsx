import React from 'react'

const Person = ({ img, name, age }) => {
  return (
    <article className='person'>
        <div>

            <img src={img} alt={name} className='img' />
        </div>
      
        <div>
            <h4>{name}</h4>
            <p>{age} years</p>
        </div>
    </article>
  )
}

export default Person