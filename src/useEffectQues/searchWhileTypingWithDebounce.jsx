import React, { useEffect, useRef, useState } from "react";

export const SearchWhileTypingWithDebounce = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!search.trim()) {
      setUsers([]);
      setError(null);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setError(null);
      setLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/users?username=${search}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Response is not okk");
          }
          return res.json();
        })
        .then((data) => {
          setUsers(data);
        })
        .catch((err) => {
          console.log(err);
          setError("Error occur");
        })
        .finally(() => setLoading(false));
    }, 500);

    return () => clearTimeout(timeoutRef.current);
  }, [search]);

  return (
    <div>
      <h2>Search User</h2>

      <input
        type="text"
        placeholder="Type username"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : users.length > 0 ? (
        <ul>
          {users.map((User) => (
            <li key={User.id}>
              Username : {User.username}
              <br />
              Email : {User.email}
            </li>
          ))}
        </ul>
      ) : search ? (
        <p>No User Found</p>
      ) : null}
    </div>
  );
};
