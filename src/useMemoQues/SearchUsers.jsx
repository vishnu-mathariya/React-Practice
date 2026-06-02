import React, { useMemo, useState } from "react";

export const SearchUsers = () => {
  const [search, setSearch] = useState("");

  const users = ["Vishnu", "Rahul", "Amit", "Suresh", "Priya", "Pooja"];

  useMemo(() => {
    for(let i=0; i< users.length; i++){
      

    }
  },[search])
  return (
    <div>
      <h2>Search Users</h2>

      <input type="text" placeholder="Search users..." value={search} />
    </div>
  );
};
