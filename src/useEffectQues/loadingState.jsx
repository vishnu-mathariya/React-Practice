import React, { useEffect, useRef, useState } from "react";

export const LoadingState = () => {
  const [users, setusers] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const timeoutId = useRef(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        timeoutId.current = setTimeout(() => {
            console.log("Timeout execute");
            
          setusers(data);
          setIsLoading(false);
        }, 5000);
      })

      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });

      return () =>{
        clearTimeout(timeoutId.current)
      }
  }, []);

  return (
    <div>
      <h2>Users</h2>

      {isLoading ? (
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
