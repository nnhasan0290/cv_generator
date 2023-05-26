import { PDFDownloadLink } from "@react-pdf/renderer";
import { GlobalSettingContext } from "../../utils/SettingContext";
import Button from "./../Common/Button";
import PdfDocument from "../pdf/Pdf";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-hot-toast";

const SpeedDial = () => {
  const { dispatch, state } = GlobalSettingContext();
  const { isAuthenticated } = useAuth0();
  return (
    <div className="speedDial">
      {state.isPreview ? (
        <Button
          onClick={() => {
            dispatch({ type: "SWITCH_PREVIEW" });
          }}
        >
          Cancel Preview
        </Button>
      ) : (
        <Button
          onClick={() => {
            if (isAuthenticated) {
              dispatch({ type: "SWITCH_PREVIEW" });
            } else {
              toast.error("Please Login to Preview");
            }
          }}
        >
          {"Preview"}
        </Button>
      )}
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
