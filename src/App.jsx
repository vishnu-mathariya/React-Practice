// import { useState } from "react";
import "./App.css";
import DateCalculation from "./assets/project/dateCalculation.jsx";
import RegisterForm from "./assets/project/registerForm.jsx";
import { FetchUsersWithErrorHandling } from "./useEffectQues/fetchUsersWithErrorHandling.jsx";
import { InfiniteScrollSimulation } from "./useEffectQues/infiniteScrollSimulation.jsx";
import { LoadCommentsWithPagination } from "./useEffectQues/loadCommentsWithPagination.jsx";

import { LoadingState } from "./useEffectQues/loadingState.jsx";
import { LoadingState2 } from "./useEffectQues/loadingState2.jsx";
import { LoadpostsWithPagination } from "./useEffectQues/loadpostsWithPagination.jsx";
import { RetryBtnWithErrorHandling } from "./useEffectQues/retryBtnWithErrorHandling.jsx";
import { SearchAlbumsByTitle } from "./useEffectQues/searchAlbumsByTitle.jsx";
import { SearchPhotosByTitle } from "./useEffectQues/searchPhotosByTitle.jsx";
import { SearchPostsById } from "./useEffectQues/searchPostsById.jsx";
import { SearchPostsByTitle } from "./useEffectQues/searchPostsByTitle.jsx";
import { SearchTodosByTaskTitle } from "./useEffectQues/searchTodosByTaskTitle.jsx";
import { SearchUserById } from "./useEffectQues/searchUserById.jsx";
import { SearchWhileTypingWithDebounce } from "./useEffectQues/searchWhileTypingWithDebounce.jsx";

function App() {
  // const [show, setShow] = useState(true);
  return (
    <>
      {/* <button onClick={() => setShow(!show)}>isToggle</button>

      {show && <LoadingState />} */}

      {/* <LoadingState2/> */}

      {/* <FetchUsersWithErrorHandling/> */}
      {/* <RetryBtnWithErrorHandling/> */}
      {/* <SearchUserById/> */}

      {/* <SearchPostsById/> */}
      {/* <LoadpostsWithPagination/> */}
      {/* <LoadCommentsWithPagination/> */}
      {/* <InfiniteScrollSimulation/> */}
      {/* <SearchWhileTypingWithDebounce/> */}
      {/* <SearchPostsByTitle/> */}
      {/* <SearchTodosByTaskTitle/> */}
      {/* <SearchAlbumsByTitle/> */}
      {/* <SearchPhotosByTitle/> */}

      {/* <RegisterForm/> */}
      <DateCalculation/>
    </>
  );
}

export default App;
