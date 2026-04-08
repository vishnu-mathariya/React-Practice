import React, { useState } from 'react'

export const PassCityPtoC = ({City}) => {
    const [city, setCity] = useState(false);

    const handleShowCity = () =>{
        setCity(!city)
    }
  return (
    <>

    {/* {city ? <h2>City: {City}</h2> : null} */}

    {city && <h2>City: {City}</h2>}

    <button onClick={handleShowCity}>See City </button>
    </>
  )
}
