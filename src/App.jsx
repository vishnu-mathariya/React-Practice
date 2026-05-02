// import { useState } from "react";
import "./App.css";
import { FetchUsersWithErrorHandling } from "./useEffectQues/fetchUsersWithErrorHandling.jsx";

import { LoadingState } from "./useEffectQues/loadingState.jsx";
import { LoadingState2 } from "./useEffectQues/loadingState2.jsx";
import { RetryBtnWithErrorHandling } from "./useEffectQues/retryBtnWithErrorHandling.jsx";

function App() {
  // const [show, setShow] = useState(true);
  return (
    <>
      {/* <button onClick={() => setShow(!show)}>isToggle</button>

      {show && <LoadingState />} */}

      {/* <LoadingState2/> */}

      {/* <FetchUsersWithErrorHandling/> */}
      <RetryBtnWithErrorHandling/>
    </>
  );
}

export default App;
