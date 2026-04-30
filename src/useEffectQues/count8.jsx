import React, { useEffect, useState, useRef } from "react";

export const Count8 = () => {
  const [count, setCount] = useState(0);

  const countRef = useRef(count);
  const intervalRef = useRef(null);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      console.log("count:", countRef.current);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Click {count}
      </button>
    </div>
  );
};
