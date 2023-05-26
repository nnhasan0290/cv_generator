import { PDFViewer } from "@react-pdf/renderer"
import PdfDocument from "./Pdf"
import { GlobalSettingContext } from "../../utils/SettingContext"

const PdfPreview = () => {
    const {state} = GlobalSettingContext()
    return(
        <PDFViewer
        style={{
          position: "fixed",
          width: "100vw",
          top: 0,
          zIndex: "1",
          height: "100vh",
        }}>
        <PdfDocument state={state}/>
      </PDFViewer>
    )
}

export default PdfPreview