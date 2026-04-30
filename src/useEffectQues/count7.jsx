import React, { useEffect, useRef, useState } from "react";

export const Count7 = () => {
  const [count, setCount] = useState(0);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;

      return;
    }
     if (count%2 === 0) {
       console.log(`count ${count}`);
    } 
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Click {count}
      </button>
    </div>
  );
};
