import React, { useEffect, useRef, useState } from "react";

export const SearchTodosByTaskTitle = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);

  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!search.trim()) {
      setError(null);
      setTodos([]);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setError(null);
      setLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/todos?title=${search}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Response is not okk");
          }
          return res.json();
        })
        .then((data) => {
          setTodos(data);
        })
        .catch((err) => {
          console.log(err);
          setError("Error occur");
        })
        .finally(() => setLoading(false));
    }, 800);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [search]);

  return (
    <div>
      <h2>Search Todos</h2>
      <input
        type="text"
        placeholder="Search Titles"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h2>Search Todos By Title </h2>

      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : todos.length > 0 ? (
        <ul>
          {todos.map((Todo) => (
            <li key={Todo.id}>
              Title: {Todo.title}
              <br />
              Completed : {Todo.completed ? "Yes" : "No"}
            </li>
          ))}
        </ul>
      ) : search ? (
        <p>No Todos Found</p>
      ) : null}
    </div>
  );
};
