import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRef } from "react";

export const SearchAlbumsByTitles = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [album, setAlbum] = useState([]);

  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!search.trim()) return;

    timeoutRef.current = setTimeout(() => {
      setError(null);
      setLoading(true);
      axios
        .get("https://jsonplaceholder.typicode.com/albums")
        .then((response) => {
          const filterAlbum = response.data.filter((album) =>
            album.title.toLowerCase().includes(search.toLowerCase()),
          );
          const limitedAlbum = filterAlbum.slice(0, 5);

          
          setAlbum(limitedAlbum);
          
          
        })

        .catch((err) => {
          console.log(err);
          setError("Error occured");
        })
        .finally(() => setLoading(false));
    }, 600);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [search]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (!value.trim()) {
      setError(null);
      setAlbum([]);
    }
  };

  return (
    <div>
      <h2>Search Album by Title</h2>
      <input
        type="text"
        placeholder="Enter album title"
        value={search}
        onChange={handleChange}
      />

      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : album.length > 0 ? (
        <ul>
          {album.map((Album) => (
            <li key={Album.id}>
              Album ID : {Album.id}
              <br />
              Album title : {Album.title}
            </li>
          ))}
        </ul>
      ) : search ? (
        <p>No album found</p>
      ) : null}
    </div>
  );
};
