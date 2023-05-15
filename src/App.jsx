import Header from "./components/Header";
import "./assets/styles/_global.scss"
import Resume from "./components/Resume/Resume";
import SpeedDial from "./components/SpeedDial/SpeedDial";

const App = () => {
  return (
    <div className="">
      <Header />
      <Resume/>
      <SpeedDial/>
    </div>
  );
};

export default App;
