import { GlobalSettingContext } from "../../utils/SettingContext"

const Theming = () => {
  const {state:{theme}, dispatch} = GlobalSettingContext()
    return(
        <div className="canvas__section">
            <h2>Theming</h2>
            <div className="canvas__sub">
              <span>mode</span>
              <div>
                <label className="radio__input">
                  <input onClick={() => dispatch({type: "SWITCH_THEME"})} type="radio" id="option1" name="options" checked={theme === "dark"} />
                  Dark
                </label>
                <label className="radio__input">
                  <input onClick={() => dispatch({type: "SWITCH_THEME"})} type="radio" id="option1" name="options" checked={theme === "light"}/>
                  Light
                </label>
              </div>
            </div>
            <div className="canvas__sub">
              <span>Primary Color</span>
              <div>
                <span>1</span>
                <span>1</span>
                <span>1</span>
                <span>1</span>
                <span>1</span>
              </div>
            </div>
            <div className="canvas__sub">
              <span>Font</span>
              <select>
                <option>option one</option>
                <option>option one</option>
                <option>option one</option>
                <option>option one</option>
              </select>
            </div>
          </div>
    )
}

export default Theming