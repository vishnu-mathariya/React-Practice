import React, { useEffect, useState, useRef } from "react";

export const SearchAlbumsByTitle = () => {
  const [search, setSearch] = useState("");
  const [album, setAlbum] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!search.trim()) {
      setAlbum([]);
      setError(null);
      return 
    }
   timeoutRef.current =  setTimeout(() => {
    setError(null)
    setLoading(true)
      fetch(`https://jsonplaceholder.typicode.com/albums?title=${search}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Response is not okk");
          }
          return res.json();
        })
        .then((data) => {
          setAlbum(data);
        })
        .catch((err) => {
          console.log(err);
          setError("Error occur");
        })
        .finally(() => setLoading(false));
    }, 600);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [search]);

  return (
    <div>
      <h2>Search Album By Title</h2>
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
      ) : album.length > 0 ? (
        <ul>
          {album.map((Album) => (
            <li key={Album.id}>
              Album : {Album.title}
              <br />
              User Id : {Album.userId}
            </li>
          ))}
        </ul>
      ) : search ? (
        <p>No Album Found</p>
      ) : null}
    </div>
  );
};
