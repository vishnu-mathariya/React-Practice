import React, { useMemo, useState } from "react";

export const ExpensiveProductCounter = () => {
  const [minPrice, setMinPrice] = useState("");

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Tablet", price: 15000 },
    { id: 4, name: "Mouse", price: 1000 },
    { id: 5, name: "Keyboard", price: 2000 },
  ];

  const filteredProducts = useMemo(() => {
    let result = [];

    for (let i = 0; i < products.length; i++) {
      if (products[i].price <= Number(minPrice)) {
        result.push(products[i]);
      }
    }
    console.log(`minPrice: ${minPrice}`);

    return result;
  }, [minPrice]);

  const productCount = useMemo(() => {
    return filteredProducts.length;
  }, [filteredProducts]);

  const handleInput = (e) => {
    setMinPrice(e.target.value);
  };
  return (
    <div>
      <h2>Expensive Product Counter</h2>
      <p>Minimum Price: {minPrice}</p>

      {filteredProducts.map((product) => (
        <p key={product.id}>
          {product.name} - ₹{product.price}
        </p>
      ))}

      <p>Total Matching product: {productCount}</p>

      <input
        type="number"
        placeholder="Type num..."
        value={minPrice}
        onChange={handleInput}
      />
    </div>
  );
};
