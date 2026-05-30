import React, { useMemo, useState } from "react";

export const CalculateTotalPrice = () => {
  const [price, setPrice] = useState(100);
  const [quantity, setQuantity] = useState(2);
  const [count, setCount] = useState(0);

  const totalPrice = useMemo(() => {
    console.log("Calculating Total Price...");

    return price * quantity;
  }, [price, quantity]);

  

  return (
    <div>
      <h2>Calculate Total Price</h2>

      <div>
        Price : {price}
        <br />
        Quantity: {quantity}
        <br />
        Total Price: {totalPrice}
      </div>

      <h2>Count:{count}</h2>
      <button onClick={() => setPrice((prev) => prev + 1)}>
        Increase Price
      </button>
      <button onClick={() => setPrice((prev) => prev - 1)}>
        Decrease Price
      </button>
      <button onClick={() => setQuantity((prev) => prev + 1)}>
        Increase Quantity
      </button>
      <button onClick={() => setQuantity((prev) => prev - 1)}>
        Decrease Quantity
      </button>

      <button onClick={() => setCount(count + 1)}>Coun</button>
    </div>
  );
};
