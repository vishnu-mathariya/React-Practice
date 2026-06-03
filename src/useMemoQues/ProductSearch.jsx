import React, { useMemo, useState } from "react";

export const ProductSearch = () => {
  const [search, setSearch] = useState("");

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
      if (products[i].name.toLowerCase().includes(search.toLowerCase())) {
        result.push(products[i]);
      }
    }
    return result;
  }, [search]);

  const totalPrice = useMemo(() => {
    let total = 0;
    for (let i = 0; i < filteredProducts.length; i++) {
      total += filteredProducts[i].price;
    }
    return total;
  }, [filteredProducts]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <h2>Search Products</h2>

      <p>Search:{search}</p>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name}-{product.price}
          </li>
        ))}
      </ul>

      <h3>Total: {totalPrice}</h3>

      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};
