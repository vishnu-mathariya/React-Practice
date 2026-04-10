import React, { useState } from 'react'
import { ChildComp } from './childComp'

export const ParentComp = () => {

    const [receiveName, setReceiveName] = useState("")

    const [isVisible, setIsVisible] = useState(false)

    const handleReceiveName = (Name) =>{
        setReceiveName(Name)
    }

    const handleTogglebtn = () => {
       setIsVisible(!isVisible)

    }

    const handleClear = () => {
        setReceiveName("");
        setIsVisible(false)
    }
  return (
    <div>
        <ChildComp  Rname = {handleReceiveName} />

        <h1>
            {receiveName && isVisible
            ? `Welcome ${receiveName}`
            : "Please enter your name "
            }
        </h1>

        <button onClick={handleTogglebtn}>{isVisible ? "Hide Greeting" : "Show Greeting"}</button>

        <button onClick={handleClear}>Clear name </button>
        


        <p>Receive name form child :{receiveName} </p>
    </div>
  )
}
