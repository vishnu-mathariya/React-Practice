import "./App.css";
import {CounterApp} from "./practiceQues/counterApp.jsx";
import { LoginLogout } from "./practiceQues/loginLogout.jsx";
import { PassCityPtoC } from "./practiceQues/passCityPtoC.jsx";
import { PassingPropsPtoC } from "./practiceQues/passingPropsPtoC.jsx";
import { ToggleBtn } from "./practiceQues/toggleBtn.jsx";

function App() {
  return (
    <>
      {/* <CounterApp /> */}
      {/* <ToggleBtn /> */}
      {/* <LoginLogout /> */}
      {/* <PassingPropsPtoC  name ="vishnu" age={25}/> */}

      <PassCityPtoC City="Pune"/>
    </>
  )
}

export default App;
