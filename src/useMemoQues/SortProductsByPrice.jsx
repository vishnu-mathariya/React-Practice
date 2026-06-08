import React, { useMemo, useState } from "react";

export const SortProductsByPrice = () => {
  const [sortOrder, setSortOrder] = useState("asc");

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Tablet", price: 15000 },
    { id: 4, name: "Mouse", price: 1000 },
    { id: 5, name: "Keyboard", price: 2000 },
  ];

  const sortedProducts = useMemo(() => {
    let sorted = [...products];

    if (sortOrder === "asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else {
      sorted.sort((a, b) => b.price - a.price);
    }

    return sorted;
  }, [sortOrder]);

  return (
    <div>
      <h2>Sort Products By Price</h2>

      <p>Current Sort: {sortOrder}</p>

      <button onClick={() => setSortOrder("asc")}>Low to High</button>
      <button onClick={() => setSortOrder("desc")}>High to Low</button>

      {sortedProducts.map((product) => (
        <p key={product.id}>
          {product.name} - {product.price}
        </p>
      ))}
    </div>
  );
};
