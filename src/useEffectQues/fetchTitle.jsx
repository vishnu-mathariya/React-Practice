import React, { useEffect, useState } from "react";

export const FetchTitle = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setTitles(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2> Titles</h2>
      <div>
        {titles.map((Title) => (
          <h3 key={Title.id}>{Title.title}</h3>
        ))}
      </div>
    </div>
  );
};
