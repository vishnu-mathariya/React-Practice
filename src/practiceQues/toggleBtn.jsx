import { useState } from 'react'

export const ToggleBtn = () => {
  const [isToggle, setisToggle] = useState(false)

  const handleToggle = () => {
    setisToggle(!isToggle)
  }

  return (
    <div>
      <button onClick={handleToggle}>click me</button>
      {isToggle && <h1>Hello</h1>}
    </div>
  )
}




