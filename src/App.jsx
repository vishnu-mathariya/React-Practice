import { SearchCommentsByEmail } from "./useEffectQues/SearchCommentsByEmail.jsx";
import { SearchPostsByBody } from "./useEffectQues/searchPostsByBody.jsx";
import { SearchUserByName } from "./useEffectQues/searchUserByName.jsx";

function App() {
  return (
    <>
      
      {/* <SearchUserByName/> */}
      {/* <SearchPostsByBody/> */}
      <SearchCommentsByEmail/>
    </>
  );
}

export default App;
