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

import React, { useState } from "react";

export const PassingPropsPtoC = ({ name, age }) => {

    const [show, setShow] = useState(false);

    const handleClick = () => {
        // setShow(true)
        setShow(!show)
    }

  return (
    <>
      {/* {show ? <h2>Name: {name}  Age: {age}</h2> : null} */}

      {show && <h2>Name: {name}  Age: {age}</h2>}
      <button onClick={handleClick}>click me</button>
      
    </>

    
  );
};
