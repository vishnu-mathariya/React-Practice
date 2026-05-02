import React, { useEffect, useState } from "react";

export const RetryBtnWithErrorHandling = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [btn, setBtn] = useState();

  const fetchUsers = () =>{
    
    fetch("https://jsonplaceholder.typicode.com/usersrr")
      .then((res) => {
        if(!res.ok) throw new Error("Res is not okk ")
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
        setError("Error occured")
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchUsers()
    
  }, [btn]);

  

  

  return (
    <div>
      <h2>Users</h2>

      {error ? (
        <p>{error}</p>
        
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((User) => (
            <li key={User.id}>{User.name}</li>
          ))}
        </ul>
      )}

      <button onClick={() => setBtn(!btn)}>Retry</button>
    </div>
  );
};
