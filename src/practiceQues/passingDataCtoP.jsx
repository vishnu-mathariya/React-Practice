// import React from 'react'

// export const Child = ({sendData}) => {
//   return (
//     <>
//     <button onClick={() => sendData("Hello Parent")}>Send data</button>
//     </>
//   )
// }

// ===============================



// import React from 'react'

// export const Child = ({sendData}) => {
//   return (
//     <button onClick={()=>sendData("Pune")}>Send City</button>
//   )
// }



import React, { useState } from 'react'

export const Child = ({InpVal}) => {
    const [storeTypeVal, setStoreTypeVal] = useState("")

    const handleStoreTypeValue = (e) => {
        setStoreTypeVal((e.target.value))
    }
  return (
    <>

     <input type="text"  onChange={handleStoreTypeValue}/>

    <button onClick={()=>InpVal(storeTypeVal)}>Send value</button>


    
    </>
    

  )
}
