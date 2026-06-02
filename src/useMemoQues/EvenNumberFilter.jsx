import React, { useMemo, useState } from "react";

export const EvenNumberFilter = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const evenNum = useMemo(() => {
    let evenArr = [];

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evenArr.push(numbers[i]);
      }
    }
    return evenArr;
  }, [numbers]);

  const handleAddNum = () => {
    const lastNumber = numbers[numbers.length - 1];

    setNumbers([...numbers, lastNumber + 1]);
  };

  return (
    <div>
      <h2>Filter Even Number </h2>

      <p>All Numbers:{numbers.join(",")}</p>

      <p>Even Numbers:{evenNum.join(",")}</p>

      <button onClick={handleAddNum}>Add Num</button>
    </div>
  );
};
