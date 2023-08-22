import React from 'react'
import Person from './Person'
const List = ({birthday,setBirthday}) => {
   
  return (
    <>
    
       <section>
            {birthday.map((dat)=>{
               return <Person key={dat.id} {...dat} />;
            })}
                

        
       </section>
    </>
  )
}

export default List