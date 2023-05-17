import Header from "./components/Header";
import "./assets/styles/_global.scss"
import Resume from "./components/Resume/Resume";
import SpeedDial from "./components/SpeedDial/SpeedDial";
import Customize from "./components/Customize/Customize";

const App = () => {
  return (
    <div className="">
      <Header />
      <Resume/>
      <SpeedDial/>
      <Customize/>
    </div>
  );
};

export default App;
