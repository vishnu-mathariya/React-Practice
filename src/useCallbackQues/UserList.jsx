import React, { useCallback, useState } from 'react'

export const UserList = () => {

  const [users, setUsers] = useState([])

  const handleUser = useCallback(() => {
    setUsers((prev) =>{
      const newUser = `User ${prev.length + 1}`

      return [...prev, newUser]
    })
  },[])


  return (
    <div>
      <h2>User List </h2>

      {users.map((user) => (
        <div key={user.id}>{user.users}</div>
      ))}
      <button onClick={handleUser}>Add User</button>


    </div>
  )
}
