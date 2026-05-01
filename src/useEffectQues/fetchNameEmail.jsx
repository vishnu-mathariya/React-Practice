import React, { useEffect, useState } from "react";

export const FetchNameEmail = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((Data) => {
        setData(Data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h2>User Name - Email</h2>

      {data.map((Data) => (
        <p key={Data.id}>
          {Data.name} - {Data.email}
        </p>
      ))}
    </div>
  );
};
