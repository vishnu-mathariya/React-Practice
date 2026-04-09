// import React, { useState } from 'react'
// import { Child } from './passingDataCtoP'

// export const Parent = () => {

//     const [message, setMessage] = useState()

//     const receiveData = (data)=>{
//         setMessage(data)
//     }
//   return (
//     <>
//     <Child sendData = {receiveData}/>
//     <p>Message form child: {message}</p>
//     </>
//   )
// }


// ================================


import React, { useState } from 'react'
import { Child } from './passingDataCtoP'

export const Parent = () => {

    const [sendCity, setSendCity] = useState("")

    const handleSendCity = (city) =>{
        // setSendCity(city);
        if (sendCity){
            setSendCity("");
        } else{
            setSendCity(city)
        }

    }
  return (
    <>
    <Child  sendData = {handleSendCity}/>
    <p>City form child: {sendCity}</p>
    </>
  )
}
