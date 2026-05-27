import { SearchCommentsByEmail } from "./useEffectQues/SearchCommentsByEmail.jsx";
import { SearchPostsByBody } from "./useEffectQues/searchPostsByBody.jsx";
import { SearchPostsByTitle1 } from "./useEffectQues/SearchPostsByTitle1.jsx";
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

      {/* <SearchTodosByUserId/> */}
      <SearchPostsByTitle1/>
      
    </>
  );
}

export default App;
