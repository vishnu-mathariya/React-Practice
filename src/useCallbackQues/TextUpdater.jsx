import React, { useCallback, useState } from 'react'

export const TextUpdater = () => {

  const [text, setText] = useState("")

  const handleInput = useCallback((e) => {

    setText(e.target.value)

  },[])

  return (
    <div>
      <h2>Text Updater</h2>

      <p>Current Text: {text}</p>

      <input type='text' placeholder='Type here...' onChange={handleInput}/>

    </div>
  )
}
