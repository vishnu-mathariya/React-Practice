// import { useState } from "react";
import "./App.css";

import { Count } from "./useEffectQues/count1.jsx";
import { Count2 } from "./useEffectQues/count2.jsx";
import { Count3 } from "./useEffectQues/count3.jsx";
import { Count4 } from "./useEffectQues/count4.jsx";
import { Count5 } from "./useEffectQues/count5.jsx";
import { Count6 } from "./useEffectQues/count6.jsx";
import { Count7 } from "./useEffectQues/count7.jsx";
import { Count8 } from "./useEffectQues/count8.jsx";
import { FetchDataFromAPI } from "./useEffectQues/fetchData.jsx";
import { FetchTitle } from "./useEffectQues/fetchTitle.jsx";



function App() {
  // const [show, setShow] =useState(true)
  return (
    <>
      {/* <Count/> */}

      {/* <Count2 /> */}

      {/* <button onClick={() => setShow(!show)}>Toggle comp </button>

      {show && <Count2/>} */}

      {/* <Count3/> */}

      {/* <Count4/> */}

      {/* <Count5/> */}
      {/* <Count6/> */}

      {/* <Count7/> */}

      {/* <Count8/> */}

      {/* <FetchDataFromAPI/> */}
      <FetchTitle/>
    </>
  );
}

export default App;
