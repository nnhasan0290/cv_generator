import { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import IconButton from "../Common/IconButton";
import Sections from "./Sections";
import Templates from "./Templates";
import Theming from "./Theming";
import { GlobalSettingContext } from "../../utils/SettingContext";

const Customize = () => {
  const [showCanvas, setShowCanvas] = useState(false);
  const {state:{bg}} = GlobalSettingContext()
  return (
    <div className="customize">
      <span className="customize__action" onClick={() => setShowCanvas(true)}>
        <FiSettings size={22} />
      </span>
      {showCanvas && (
        <div className="customize__canvas" style={{backgroundColor: bg}}>
          <div className="canvas__head">
            <h2>Customizer</h2>
            <IconButton
              icon={<RxCross2 />}
              onClick={() => setShowCanvas(false)}
            />
          </div>
          <Theming/>
          <Templates/>
          <Sections/>
        </div>
      )}
    </div>
  );
};

export default Customize;
