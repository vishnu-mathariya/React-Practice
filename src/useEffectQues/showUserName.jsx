import React, { useEffect, useState } from "react";

export const ShowUserName = () => {
  const [userName, setUserName] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUserName(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h2>User Names</h2>
      <ul>
        {userName.map((user) => (
          <li key={user.id}>{user.username.toUpperCase()}</li>
        ))}
      </ul>
    </div>
  );
};
