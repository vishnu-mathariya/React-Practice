import React, { useMemo, useState } from 'react'

export const UppercaseConverter = () => {
  const [text, setText] = useState("")

 const upperText =  useMemo(()=>{
  return text.toUpperCase()
  

  },[text])

  const handleInput = (e)=>{
    setText(e.target.value)

  }

  return (
    <div>
      <h2>Uppercase Converter</h2>


      <p>Original Text: {text}</p>
      <p>Uppercase Text: {upperText}</p>

      <input 
      type='text'
      placeholder='Enter Text'
      value={text}
      onChange={handleInput}
      />

    </div>
  )
}
