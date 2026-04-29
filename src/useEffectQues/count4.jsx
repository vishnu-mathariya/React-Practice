import React, { useEffect, useRef, useState } from "react";

export const Count4 = () => {
  const [count, setCount] = useState(0);

  const isFirstRender = useRef(true);

  useEffect(() => {
    console.log("Mounted ");
  }, []); // first mount

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;

      return;
    }

    console.log(`Count update: ${count}`);
  }, [count]); // when dep change

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Click {count}
      </button>
    </div>
  );
};
