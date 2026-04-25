import React, { useEffect, useState } from "react";

export const Count2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {

    console.log("mounted");
    
    const id = setInterval(() => {
        
      console.log("Running...");
    }, 1000);

    return () => {
      console.log("Unmounted");

      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        CLick {count}
      </button>
    </div>
  );
};
