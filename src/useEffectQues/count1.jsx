import React, { useEffect, useState } from "react";

export const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("effect trigger");
  }, [count]);

  return (
    <>
      <button onClick={() => setCount(prev => prev + 1)}>Count {count}</button>
    </>
  );
};
