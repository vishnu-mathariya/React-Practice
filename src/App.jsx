// import { useState } from "react";
import "./App.css";

import { LoadingState } from "./useEffectQues/loadingState.jsx";
import { LoadingState2 } from "./useEffectQues/loadingState2.jsx";

function App() {
  // const [show, setShow] = useState(true);
  return (
    <>
      {/* <button onClick={() => setShow(!show)}>isToggle</button>

      {show && <LoadingState />} */}

      <LoadingState2/>
    </>
  );
}

export default App;
