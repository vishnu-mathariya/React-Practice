import React, { useEffect, useState } from "react";

export const ShowEvenIdUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(data.map((user) => user));
      })

      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2>Show Even Users</h2>

      <ul>
        {users
          .filter((User) => User.id % 2 === 0)
          .map((User) => (
            <li key={User.id}>{User.id} - {User.name}</li>
          ))}
      </ul>
    </div>
  );
};
