import images from "../../assets/imgs";
import { GlobalSettingContext } from "../../utils/SettingContext";

const Templates = () => {
  const {dispatch, state:{template}} = GlobalSettingContext();
  return (
    <div className="canvas__section">
      <h2>Templates</h2>
      <div className="canvas__templates">
        <div className="single__template">
          <img src={images.templates.cleanTemplate} alt=""  onClick={() => {
            dispatch({type: "CHANGE_TEMPLATE", payload: "clean"})
          }}/>
          <span>Clean</span>
        </div>
        <div className="single__template">
          <img
            src={images.templates.modernTemplate}
            alt=""
            onClick={() => {
              dispatch({type: "CHANGE_TEMPLATE", payload: "modern"})
            }}
          />
          <span>Modern</span>
        </div>
        
      </div>
    </div>
  );
};

export default Templates;
