import React, { useEffect, useState } from "react";

export const FetchUsersWithErrorHandling = () => {
  const [users, setUsers] = useState([]);

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/usersrrr")
      .then((res) => {
        if (!res.ok) throw new Error("Res is not okk ");
        return res.json();
    
      })
      .then((data) => {
        setUsers(data);
        // setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Error occured ");
        // setLoading(false);
      })

      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <h2>Users</h2>

      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {users.map((user) => (
            <div key={user.id}>{user.name}</div>
          ))}
        </>
      )}
    </div>
  );
};
