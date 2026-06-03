import React, { useMemo, useState } from "react";

export const SearchUsers = () => {
  const [search, setSearch] = useState("");

  const users = ["Vishnu", "Rahul", "Amit", "Suresh", "Priya", "Pooja"];

  const filteredUsers = useMemo(() => {
    let result = [];
    for (let i = 0; i < users.length; i++) {
      if (users[i].toLowerCase().includes(search.toLowerCase())) {
        result.push(users[i]);
      }
    }
    return result;
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h2>Search Users</h2>

      <p>Search: {search}</p>
      {filteredUsers.map((user) => (
        <p key={user}>{user}</p>
      ))}

      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};
