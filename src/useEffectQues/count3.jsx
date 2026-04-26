import React, { useEffect, useRef, useState } from "react";

export const Count3 = () => {
  const [count, setCount] = useState(0);

  const isFirstRender = useRef(true);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    console.log(`Count changed ${count}`);
  }, [count]);

  return (
    <div>
      <button onClick={handleClick}>CLick {count} </button>
    </div>
  );
};
