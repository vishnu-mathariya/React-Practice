import "./App.css";
import { ParentComp } from "./miniApp/parentComp.jsx";
import {CounterApp} from "./practiceQues/counterApp.jsx";
import { CounterRenderCheck } from "./practiceQues/counterRenderCheck.jsx";
import { FruitList, Fruits, RenderList, RenderUser, RenderUser1, ShowProduct, ShowTask, Student } from "./practiceQues/list&Keys.jsx";
import { LoginLogout } from "./practiceQues/loginLogout.jsx";
import { Parent } from "./practiceQues/parent.jsx";
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

      {/* <PassCityPtoC City="Pune"/> */}

      {/* <Parent/> */}
      {/* <ParentComp/> */}
      {/* <FruitList/>
      <Student/>
      <Fruits/>
      <RenderList/>
      <RenderUser/>
      <ShowTask/>
      <ShowProduct/>
      <RenderUser1/> */}

      <CounterRenderCheck/>
    </>
  )
}

export default App;
