// import React from 'react'

// export const Child = ({sendData}) => {
//   return (
//     <>
//     <button onClick={() => sendData("Hello Parent")}>Send data</button>
//     </>
//   )
// }

// ===============================

// import React from 'react'

// export const Child = ({sendData}) => {
//   return (
//     <button onClick={()=>sendData("Pune")}>Send City</button>
//   )
// }

import React, { useState } from "react";

export const Child = ({ InpVal }) => {
  const [storeTypeVal, setStoreTypeVal] = useState("");

  const handleStoreTypeValue = (e) => {
    setStoreTypeVal(e.target.value);
  };

  const handleSend = () => {
    InpVal(storeTypeVal); // send to parent
    setStoreTypeVal(""); // clear input
  };
  return (
    <>
      <input type="text" value={storeTypeVal} onChange={handleStoreTypeValue} />

      <button onClick={handleSend}>Send value</button>
    </>
  );
};
