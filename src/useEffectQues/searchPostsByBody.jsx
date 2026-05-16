import React, { useEffect, useRef, useState } from "react";

export const SearchPostsByBody = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);

  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!search.trim()) return;

    timeoutRef.current = setTimeout(() => {
      setError(null);
      setLoading(true);

      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Response is not okk");
          }
          return res.json();
        })
        .then((data) => {
          const filteredPosts = data.filter((posts) =>
            posts.body.toLowerCase().includes(search.toLowerCase()),
          );
          const limitedPosts = filteredPosts.slice(0, 10);

          setPosts(limitedPosts);
        })
        .catch((err) => {
          console.log(err);
          setError("Erorr occured");
        })
        .finally(() => setLoading(false));
    }, 700);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [search]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (!value.trim()) {
      setPosts([]);
      setError(null);
    }
  };
  return (
    <div>
      <h2>Search Posts By Body</h2>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
      />

      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : posts.length > 0 ? (
        <div>
          {posts.map((Post) => (
            <p key={Post.id}>
              Post Title : {Post.title}
              <br />
              Post Body : {Post.body}
            </p>
          ))}
        </div>
      ) : search ? (
        <p>No post found</p>
      ) : null}
    </div>
  );
};
