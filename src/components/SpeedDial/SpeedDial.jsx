import { PDFDownloadLink } from "@react-pdf/renderer";
import { GlobalSettingContext } from "../../utils/SettingContext";
import Button from "./../Common/Button";
import PdfDocument from "../pdf/Pdf";

const SpeedDial = () => {
  const { dispatch, state } = GlobalSettingContext();
  return (
    <div className="speedDial">
      <Button
        onClick={() => {
          dispatch({ type: "SWITCH_PREVIEW" });
        }}
      >
        {state.isPreview ? "Cancel Preview" : "Preview"}
      </Button>
      {state.isPreview && (
        <>
          <Button>
            <PDFDownloadLink
              document={<PdfDocument state={state} />}
              fileName="resume.pdf"
            >
              {({ loading }) =>
                loading ? "Loading document..." : "Download PDF"
              }
            </PDFDownloadLink>
          </Button>
        </>
      )}
    </div>
  );
};

export default SpeedDial;
