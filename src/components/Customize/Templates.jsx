import templates from "../../assets/data/template";
import { GlobalSettingContext } from "../../utils/SettingContext";

const Templates = () => {
  const {dispatch, state} = GlobalSettingContext();
  return (
    <div className="canvas__section">
      <h2>Templates</h2>

      <div className="canvas__templates">
        {
          templates.map((template, index) => (
        <div className="single__template" key={index}>
          <img className={`${state.template.name === template.name && "active"}`} src={template.demoImg} alt=""  onClick={() => {
            dispatch({type: "CHANGE_TEMPLATE", payload: template.name})
          }}/>
          <span>{template.name}</span>
        </div>

          ))
        }
        
        
      </div>
    </div>
  );
};

export default Templates;
