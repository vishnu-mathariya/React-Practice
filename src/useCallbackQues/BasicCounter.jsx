import React, { useCallback, useState } from "react";

export const CounterWithCallback = () => {
  const [count, setCount] = useState(0);

  const handleInc = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleDec = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  const handleReset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div>
      <h2>Counter</h2>

      <p>Counter : {count}</p>

      <button onClick={handleInc}>Inc</button>
      <button onClick={handleDec}>Dec</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
