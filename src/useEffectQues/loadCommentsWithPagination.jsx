import React, { useState } from "react";

export const LoadCommentsWithPagination = () => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const loadComments = () => {
    setLoading(true);
    setError(null);

    fetch(
      `https://jsonplaceholder.typicode.com/comments?_limit=10&_page=${page}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Response is not okk");
        }
        return res.json();
      })
      .then((data) => {
        setComments((prev) => [...prev, ...data]);

        setPage((prev) => prev + 1);
      })
      .catch((err) => {
        console.log(err);
        setError("Error Occur");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <h2>Comments with Paginations</h2>
      <button onClick={loadComments} disabled={loading}>{loading ? "Loading..." : comments.length > 0 ? "Load More Comments": "Load Comments"}</button>

      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : comments.length > 0 ? (
        <ul>
          {comments.map((Comment) => (
            <li key={Comment.id}>{Comment.email}</li>
          ))}
        </ul>
      ) : (
        <p>No Comments found</p>
      )}
    </div>
  );
};
