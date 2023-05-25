import Header from "./components/Header";
import "./assets/styles/_global.scss";
import Resume from "./components/Resume/Resume";
import SpeedDial from "./components/SpeedDial/SpeedDial";
import Customize from "./components/Customize/Customize";
import { GlobalSettingContext } from "./utils/SettingContext";
import MyDocument from "./components/pdf/Pdf";

const App = () => {
  const {
    state: { bg, isPreview, template },
  } = GlobalSettingContext();

  return (
    <div style={{ backgroundColor: bg, minHeight: "100vh" }}>
      {!isPreview && (
        <>
          <Header />
          <Resume />
          <Customize />
        </>
      )}
      <SpeedDial />
      {isPreview && <MyDocument template={template} />}
    </div>
  );
};

export default App;
