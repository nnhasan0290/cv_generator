import Header from "./components/Header";
import "./assets/styles/_global.scss"
import Resume from "./components/Resume/Resume";
import SpeedDial from "./components/SpeedDial/SpeedDial";
import Customize from "./components/Customize/Customize";
import { GlobalSettingContext } from "./utils/SettingContext";

const App = () => {
  const {state:{ bg}} = GlobalSettingContext();
  return (
    <div style={{backgroundColor: bg, minHeight: "100vh"}}>
      <Header />
      <Resume/>
      <SpeedDial/>
      <Customize/>
    </div>
  );
};

export default App;
