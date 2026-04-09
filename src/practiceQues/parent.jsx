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


// import React, { useState } from 'react'
// import { Child } from './passingDataCtoP'

// export const Parent = () => {

//     const [sendCity, setSendCity] = useState("")

//     const handleSendCity = (city) =>{

//         // normal btn logic 

//         // setSendCity(city);

//         // toggle btn logic if else

//         // if (sendCity){
//         //     setSendCity("");
//         // } else{
//         //     setSendCity(city)
//         // }

//        // toggle btn logic  shorthand syntax

//         setSendCity(sendCity ? "" : city)

//     }
//   return (
//     <>
//     <Child  sendData = {handleSendCity}/>
//     <p>City form child: {sendCity}</p>
//     </>
//   )
// }




import React, { useState } from 'react'
import { Child } from './passingDataCtoP'

export const Parent = () => {

    const [inputVal, setInputVal] = useState("");

    const handleInputVal = (value) =>{
        setInputVal(value)
    }

    

  return (
    <>
    <Child InpVal = {handleInputVal}/>
  
    <p >Input value form child: {inputVal}</p>
    </>
    
  )
}
