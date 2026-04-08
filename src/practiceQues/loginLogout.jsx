import React, { useState } from 'react'

export const LoginLogout = () => {
    const [islogin, setIsLogin] = useState(false);

   const  handleToggle  = () =>{
    setIsLogin(!islogin)
   } 


  return (
    <div>

        {/* {islogin ? <h1>welcome</h1> : <h1>Please login </h1>} */}

        <h1>{islogin ? "welcome" : "please login "}</h1>
        <button onClick={handleToggle}>
            {islogin ? "Logout" : "Login"}
            
        </button>



    </div>
  )
}
