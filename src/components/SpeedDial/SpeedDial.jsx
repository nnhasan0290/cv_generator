import { GlobalSettingContext } from "../../utils/SettingContext";
import Button from "./../Common/Button";

const SpeedDial = () => {
  const {
    dispatch,
    state: { isPreview },
  } = GlobalSettingContext();
  return (
    <div className="speedDial">
      <Button
        onClick={() => {
          dispatch({ type: "SWITCH_PREVIEW" });
        }}
      >
        {isPreview ? "Cancel Preview" : "Preview"}
      </Button>
      {isPreview && (
        <>
          <Button>PDF Download</Button>
          <Button>Docs Download</Button>
        </>
      )}
    </div>
  );
};

export default SpeedDial;
