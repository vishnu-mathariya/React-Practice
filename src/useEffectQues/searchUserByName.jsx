import React, { useEffect, useRef, useState } from "react";

export const SearchUserByName = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");

  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!search.trim()) {
      setError(null);
      setUser([]);
      return;
    }
    timeoutRef.current = setTimeout(() => {
      setError(null);
      setLoading(true);
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Response is not okk");
          }
          return res.json();
        })
        .then((data) => {
          const filteredUsers = data.filter((user) => 
        user.name.toLowerCase().includes(search.toLowerCase()))
          setUser(filteredUsers)
        })
        .catch((err) => {
          console.log(err);
          setError("Error occured");
        })
        .finally(() => setLoading(false));
    }, 500);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [search]);
  return (
    <div>
        <h2>Search Users by Name</h2>
      <input
        type="text"
        placeholder="Search user name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : user.length > 0 ? (
        <ul>
          {user.map((UserName) => (
            <li key={UserName.id}>
              Name : {UserName.name}
              <br />
              Email : {UserName.email}
              <br />
              Company name: {UserName.company.name}
            </li>
          ))}
        </ul>
      ) : search ? (
        <p>user not found </p>
      ) : null}
    </div>
  );
};
