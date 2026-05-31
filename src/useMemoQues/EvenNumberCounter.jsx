import React, { useMemo, useState } from "react";

export const EvenNumberCounter = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const evenCount = useMemo(() => {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
         count++;
      }
    }
    return count;
  }, [numbers]);

  const handleAddNumber = () => {
    const lastNumber = numbers[numbers.length - 1];

    setNumbers([...numbers, lastNumber + 1]);
  };

  const handleRemoveNumber = () => {
    if (numbers.length > 0) {
      setNumbers(numbers.slice(0, -1));
    }
  };

  return (
    <div>
      <h2>Even Number Counter</h2>
      <p>Numbers: {numbers.join(",")}</p>
      <h3>Even Count : {evenCount}</h3>

      <button onClick={handleAddNumber}>
        Add Num
      </button>
      <button  onClick={handleRemoveNumber}>
        Remove Num
      </button>
    </div>
  );
};
