// import React from 'react'

// export const PassingPropsPtoC = (prop) => {
//   return (
//     <h1>
//         Name: {prop.name}, 
//         Age: {prop.age}
//     </h1>
//   )
// }


// using destructuring 


import React from 'react'

export const PassingPropsPtoC = ({name, age}) => {

  return (
    <>
    
   <h2>Hello {name}</h2>
   
   <p>Age : {age}</p>
   </>
   
  )
 
  
}
