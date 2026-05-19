import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

export const SearchUsersByCompanyName = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!search.trim()) return;
    const fetchUsers = async () => {
      setError(null);
      setLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );

        const filteredUsers = response.data.filter((user) =>
          user.company.name.toLowerCase().includes(search.toLowerCase()),
        );

        const limitedUsers = filteredUsers.slice(0, 4);
        setUsers(limitedUsers);
      } catch (err) {
        console.log(err);
        setError("Error occured");
      } finally {
        setLoading(false);
      }
    };

    timeoutRef.current = setTimeout(() => {
      fetchUsers();
    }, 700);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [search]);

  const handleChange = (e) => {
    const value = e.target.value;

    setSearch(value);

    if (!value.trim()) {
      setError(null);
      setUsers([]);
    }
  };
  return (
    <div>
      <h2>Search User By Company Name</h2>
      <input
        type="text"
        placeholder="Enter company name..."
        value={search}
        onChange={handleChange}
      />

      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : users.length > 0 ? (
        <div>
          {users.map((user) => (
            <p key={user.id}>
              User Name : {user.name}
              <br />
              Email : {user.email}
              <br />
              Company Name : {user.company.name}
              <br />
              Website : {user.website}
              <hr />
            </p>
          ))}
        </div>
      ) : search ? (
        <p>No user found</p>
      ) : null}
    </div>
  );
};
