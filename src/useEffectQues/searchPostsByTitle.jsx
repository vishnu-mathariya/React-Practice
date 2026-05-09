import React, { useEffect, useState } from "react";
import { useRef } from "react";

export const SearchPostsByTitle = () => {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!search.trim()) {
      setError(null);
      setPost([]);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setError(null);
      setLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/posts?title=${search}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Response is not okk");
          }
          return res.json();
        })
        .then((data) => {
          setPost(data);
        })
        .catch((err) => {
          console.log(err);
          setError("Error Occur");
        })
        .finally(() => setLoading(false));
    }, 500);
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [search]);

  return (
    <div>
      <h2>Search Posts</h2>
      <input
        type="text"
        placeholder="Search title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : post.length > 0 ? (
        <ul>
          {post.map((Post) => (
            <li key={Post.id}>
              Title : {Post.title}
              <br />
              Body : {Post.body}
            </li>
          ))}
        </ul>
      ) : search ? (
        <p>No Posts Found</p>
      ) : null}
    </div>
  );
};
