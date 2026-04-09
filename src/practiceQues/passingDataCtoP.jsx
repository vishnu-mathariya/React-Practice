// import React from 'react'

// export const Child = ({sendData}) => {
//   return (
//     <>
//     <button onClick={() => sendData("Hello Parent")}>Send data</button>
//     </>
//   )
// }

// ===============================



import React from 'react'

export const Child = ({sendData}) => {
  return (
    <button onClick={()=>sendData("Pune")}>Send City</button>
  )
}
