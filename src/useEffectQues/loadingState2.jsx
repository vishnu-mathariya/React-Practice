import React, { useEffect, useRef, useState } from "react";

export const LoadingState2 = () => {
  const [users, setUers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const timeoutRef = useRef(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/usersrrr")
      .then((res) => res.json())
      .then((data) => {
        timeoutRef.current = setTimeout(() => {
          setUers(data);
          setIsLoading(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        setError("Error occured");
        setIsLoading(false)
      });

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  return (
    <div>
      <h2>Users</h2>

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (

        <p>{error}</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.id} - {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
