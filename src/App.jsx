import "./App.css";
import {CounterApp} from "./practiceQues/counterApp.jsx";
import { LoginLogout } from "./practiceQues/loginLogout.jsx";
import { PassingPropsPtoC } from "./practiceQues/passingPropsPtoC.jsx";
import { ToggleBtn } from "./practiceQues/toggleBtn.jsx";

function App() {
  return (
    <>
      {/* <CounterApp /> */}
      {/* <ToggleBtn /> */}
      {/* <LoginLogout /> */}
      <PassingPropsPtoC  name ="vishnu" age={25}/>
    </>
  )
}

export default App;
