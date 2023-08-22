import React, { useState } from 'react'
import { data } from '../datas/data'
const Secondone = () => {
  console.log(data)
  const [people,setPeople] = useState(data);
  

  const removeOne = (id) =>{
      const newPeople = people.filter((pep)=> pep.id !== id);
      setPeople(newPeople);
  }

  const removeAll = () =>{
      setPeople([]);
  }
  return (
    <>
     <section className='section'>
         
            {people.map((dat)=>(

               <div key={dat.id}>

                  <h2>{dat.name}</h2>
                  <button type='button' onClick={()=>removeOne(dat.id)} className='btns'>remove</button>
               </div>
                
            ))}
           
           <button type='button' className='btns'  onClick={removeAll}>remove all</button>
       
     </section>

    </>
  )
}

export default Secondone