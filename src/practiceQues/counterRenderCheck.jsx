import React, { useState } from "react";

export const CounterRenderCheck = () => {
  const [count, setCount] = useState(0);
    console.log("render");
  

  return (
    <>
    
      <button onClick={() => setCount(count + 1)}>Inc :{count}</button>
    </>
  );
};
