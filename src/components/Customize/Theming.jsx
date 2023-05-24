import { colors } from "../../assets/data/colors";
import { GlobalSettingContext } from "../../utils/SettingContext";
import {AiOutlineCheck} from "react-icons/ai"
const fonts = [
  "Auto",
  "Lato, sans-serif",
  "Poppins, sans-serif",
  "Raleway, sans-serif",
  "Roboto, sans-serif",
  "monospace, monospace",
];
const Theming = () => {
  const {
    state: { theme, color: contextColor, font },
    dispatch,
  } = GlobalSettingContext();
  return (
    <div className="canvas__section">
      <h2>Theming</h2>
      <div className="canvas__sub">
        <span>mode</span>
        <div>
          <label className="radio__input">
            <input
              onClick={() => dispatch({ type: "SWITCH_THEME" })}
              type="radio"
              id="option1"
              name="options"
              checked={theme === "dark"}
            />
            Dark
          </label>
          <label className="radio__input">
            <input
              onClick={() => dispatch({ type: "SWITCH_THEME" })}
              type="radio"
              id="option1"
              name="options"
              checked={theme === "light"}
            />
            Light
          </label>
        </div>
      </div>
      <div className="canvas__sub">
        <span>Primary Color</span>
        <div>
          {colors.map((color, i) => (
            <span
              onClick={() =>
                dispatch({
                  type: "CHANGE_ITEM",
                  payload: { property: "color", value: color },
                })
              }
              key={i}
              style={{ backgroundColor: color }}
            >
            {
              contextColor === color && <AiOutlineCheck/>
            }

            </span>
          ))}
        </div>
      </div>
      <div className="canvas__sub">
        <span>Font</span>
        <select
          value={font}
          onChange={(e) => {
            dispatch({
              type: "CHANGE_ITEM",
              payload: { property: "font", value: e.target.value },
            });
          }}
        >
          {fonts.map((font, i) => (
            <option key={i} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Theming;
