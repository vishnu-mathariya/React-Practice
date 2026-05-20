import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

export const SearchTodosByUserId = () => {
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);

  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!search.trim()) return;
    const fetchTodos = async () => {
      setError(null);
      setLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos",
        );

        const filteredTodos = response.data.filter(
          (todo) => todo.userId === Number(search) && todo.completed === true,
        );

        const limitedTodos = filteredTodos.slice(0, 6);
        setTodos(limitedTodos);
      } catch (err) {
        console.log(err);
        setError("Error occured");
      } finally {
        setLoading(false);
      }
    };

    timeoutRef.current = setTimeout(() => {
      fetchTodos();
    }, 500);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [search]);

  const handleChange = (e) => {
    const value = e.target.value;

    setSearch(value);

    if (!value.trim()) {
      setError(null);
      setTodos([]);
    }
  };
  return (
    <div>
      <h2>Search Todos By User Id</h2>
      <input
        type="text"
        placeholder="Search Todos..."
        value={search}
        onChange={handleChange}
      />

      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : todos.length > 0 ? (
        <div>
          {todos.map((Todo) => (
            <p key={Todo.id}>
              Todo ID :{Todo.id}
              <br />
              Todo Title :{Todo.title}
              <br />
              Status : {Todo.completed ? "Completed" : "Not Completed"}
              <hr />
            </p>
          ))}
        </div>
      ) : search ? (
        <p>No todo found </p>
      ) : null}
    </div>
  );
};
