import React, { useState } from 'react'
import { data } from '../datas/data'
import List from './List';
const Birthdayremainder = () => {
  const [birthday,setBirthday] = useState(data);
  const handleClick = () => {

    setBirthday([])
   }
  
  return (
      <>
        <main>
            <section className='container'>
               <h3>{birthday.length} Birthdays Today</h3>
               <List  birthday={birthday}  setBirthday={setBirthday} />
               <button type="button" className='btn'  onClick={handleClick}>CLEAR ALL</button>  
            </section>
           
        </main>
      
      </>
  )
}

export default Birthdayremainder