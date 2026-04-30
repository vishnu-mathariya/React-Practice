import React, { useEffect, useRef, useState } from "react";

export const Count6 = () => {
  const [count, setCount] = useState(0);

  const intervalRef = useRef(null);
  const tickRef = useRef(0);
  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      tickRef.current += 1;

      console.log("Tick:", tickRef.current);

      if (tickRef.current >= countRef.current - 1) {
        console.log("Stopping at:", tickRef.current);
        clearInterval(intervalRef.current);
      }
    }, 2000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Click {count}
      </button>
    </div>
  );
};
