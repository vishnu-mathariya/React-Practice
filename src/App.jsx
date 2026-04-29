// import { useState } from "react";
import "./App.css";

import { Count } from "./useEffectQues/count1.jsx";
import { Count2 } from "./useEffectQues/count2.jsx";
import { Count3 } from "./useEffectQues/count3.jsx";
import { Count4 } from "./useEffectQues/count4.jsx";



function App() {
  // const [show, setShow] =useState(true)
  return (
    <>
      {/* <Count/> */}

      {/* <Count2 /> */}

      {/* <button onClick={() => setShow(!show)}>Toggle comp </button>

      {show && <Count2/>} */}

      {/* <Count3/> */}

      <Count4/>
    </>
  );
}

export default App;
