import React, { useState } from "react";

export const InfiniteScrollSimulation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasFetched, setHasFetched] = useState(false);

  const fetchUsers = () => {
    setError(null);
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users?_limit=5&_page=${page}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Response is not okk");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setPage((prev) => prev + 1);
      })

      .catch((err) => {
        console.log(err);
        setError("Error Occur");
      })

      .finally(() => {
        setLoading(false);
        setHasFetched(true);
      });
  };

  return (
    <div>
      <h2>Users List</h2>
      <button onClick={fetchUsers} disabled={loading}>
        {loading ? "Loading..." : "Show Next"}
      </button>

      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : users.length > 0 ? (
        <ul>
          {users.map((User) => (
            <li key={User.id}>
              Name : {User.name}
              <br />
              Email : {User.email}
            </li>
          ))}
        </ul>
      ) : hasFetched ? (
        <p>User not found</p>
      ) : null}
    </div>
  );
};
