import React, { useEffect, useRef, useState } from "react";

export const SearchPhotosByTitle = () => {
  const [search, setSearch] = useState("");
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!search.trim()) {
      setError(null);
      setPhotos([]);
      return;
    }
    timeoutRef.current = setTimeout(() => {
      setError(null);
      setLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/photos?title=${search.trim()}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Response is not okk");
          }
          return res.json();
        })
        .then((data) => {
          setPhotos(data);
        })
        .catch((err) => {
          console.log(err);
          setError("Error occur");
        })
        .finally(() => setLoading(false));
    }, 700);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [search]);

  return (
    <div>
      <h2>Search Photos by Title</h2>
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
      ) : photos.length > 0 ? (
        <div>
          {photos.map((Photo) => (
            <div key={Photo.id}>
              Title : {Photo.title}
              <br />
              Thumbnail image : <img  src={Photo.thumbnailUrl}
              alt={Photo.title}/>
            </div>
          ))}
        </div>
      ) : search ? (
        <p>No photo found</p>
      ) : null}
    </div>
  );
};
