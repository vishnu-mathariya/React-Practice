import { SearchCommentsByEmail } from "./useEffectQues/SearchCommentsByEmail.jsx";
import { SearchPostsByBody } from "./useEffectQues/searchPostsByBody.jsx";
import { SearchTodosByUserId } from "./useEffectQues/SearchTodosByUserId.jsx";
import { SearchUserByName } from "./useEffectQues/searchUserByName.jsx";
import { SearchUsersByCompanyName } from "./useEffectQues/SearchUsersByCompanyName.jsx";

function App() {
  return (
    <>
      
      {/* <SearchUserByName/> */}
      {/* <SearchPostsByBody/> */}
      {/* <SearchCommentsByEmail/> */}
      {/* <SearchUsersByCompanyName/> */}

      <SearchTodosByUserId/>
      
    </>
  );
}

export default App;
