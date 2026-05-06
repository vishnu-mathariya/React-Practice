import React, { useState } from "react";

export const SearchUserById = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState({});
  const [id, setId] = useState("");

  const fetchUsers = () => {
    setIsLoading(true);
    setError(null);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Res is not okk");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
        setError("Something went wrong");
      })

      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <h2>Search user by ID</h2>
      <input type="text" 
      placeholder="Enter user id"  
      value={id} 
      onChange={(e) => setId(e.target.value)} />

      <button onClick={fetchUsers}>Search</button>

      {error ? (
        <p>Something went wrong</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : users ? (
        <div>
          <p>Name: {users.name}</p>  
          <p>Email: {users.email}</p>
        </div>
      ) : null}

      
    </div>
  );
};
