import { CounterWithCallback } from "./useCallbackQues/BasicCounter.jsx";
import { TextUpdater } from "./useCallbackQues/TextUpdater.jsx";
import { SearchCommentsByEmail } from "./useEffectQues/SearchCommentsByEmail.jsx";
import { SearchPostsByBody } from "./useEffectQues/searchPostsByBody.jsx";
import { SearchPostsByTitle1 } from "./useEffectQues/SearchPostsByTitle1.jsx";
import { SearchTodosByUserId } from "./useEffectQues/SearchTodosByUserId.jsx";
import { SearchUserByName } from "./useEffectQues/searchUserByName.jsx";
import { SearchUsersByCompanyName } from "./useEffectQues/SearchUsersByCompanyName.jsx";
import { CalculateTotalPrice } from "./useMemoQues/CalculateTotalPrice.jsx";
import { CharacterCounter } from "./useMemoQues/CharacterCounter.jsx";
import { EvenNumberCounter } from "./useMemoQues/EvenNumberCounter.jsx";
import { EvenNumberFilter } from "./useMemoQues/EvenNumberFilter.jsx";
import { ExpensiveProductCounter } from "./useMemoQues/ExpensiveProductCounter.jsx";
import { ProductSearch } from "./useMemoQues/ProductSearch.jsx";
import { ReverseText } from "./useMemoQues/ReverseText.jsx";
import { SearchUsers } from "./useMemoQues/SearchUsers.jsx";
import { SortProductsByPrice } from "./useMemoQues/SortProductsByPrice.jsx";
import { UppercaseConverter } from "./useMemoQues/UppercaseConverter.jsx";
import { VowelCounter } from "./useMemoQues/VowelCounter.jsx";
import { WordCounter } from "./useMemoQues/WordCounter.jsx";

function App() {
  return (
    <>
      {/* <SearchUserByName/> */}
      {/* <SearchPostsByBody/> */}
      {/* <SearchCommentsByEmail/> */}
      {/* <SearchUsersByCompanyName/> */}

      {/* <SearchTodosByUserId/> */}
      {/* <SearchPostsByTitle1/> */}
      {/* <CalculateTotalPrice /> */}
      {/* <EvenNumberCounter/> */}

      {/* <UppercaseConverter/> */}

      {/* <CharacterCounter/> */}

      {/* <WordCounter /> */}
      {/* <ReverseText /> */}
      {/* <VowelCounter/> */}
      {/* <EvenNumberFilter/> */}

      {/* <SearchUsers/> */}

      {/* <ProductSearch/> */}

      {/* <ExpensiveProductCounter/> */}

      {/* <SortProductsByPrice/> */}

      {/* <CounterWithCallback/> */}

      <TextUpdater/>

    </>
  );
}

export default App;
