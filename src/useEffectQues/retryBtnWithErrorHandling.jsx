import React, { useEffect, useState, useRef } from "react";

export const RetryBtnWithErrorHandling = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const timeoutRef = useRef(null);

  const fetchUsers = () => {
    setError(null);
    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/usersr")
      .then((res) => {
        if (!res.ok) throw new Error("Res is not okk ");
        return res.json();
      })
      .then((data) => {
        timeoutRef.current = setTimeout(() => {
          console.log("Loading...");
          setUsers(data);
          setLoading(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);

        timeoutRef.current = setTimeout(() => {
          setError("Error occured");
          setLoading(false);
        }, 2000);
      });
  };

  useEffect(() => {
    fetchUsers();

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div>
      <h2>Users</h2>

      {error ? (
        <>
          <p>{error}</p>
          <button onClick={fetchUsers}>Retry</button>
        </>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((User) => (
            <li key={User.id}>{User.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
