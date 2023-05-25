import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { GlobalSettingContext } from "../../utils/SettingContext";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
    padding: 10,
  },
  identity: {
    margin: 10,
    fontSize: "16px",
  },
  section: {
    margin: 10,
    fontSize: "16px",
    alignSelf: "flex-start",
    
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  summary: {
    marginTop: "8px",
  },
  singleSec: {
    marginBottom: "8px",
    wordSpacing: "wrap",
  },
  secTitle: {
    marginBottom: "5px",
    fontSize: "21px",
    width: "150px",
  },
  sectionWrap : {
    maxWidth: "70%"
  }
});

// Create Document Component
const MyDocument = () => {
  const { state } = GlobalSettingContext();
  return (
    <PDFViewer
      style={{
        position: "fixed",
        width: "100vw",
        top: 0,
        zIndex: "1",
        height: "100vh",
      }}
    >
      <Document>
        <Page size="A4" style={{...styles.page, color: state.color, backgroundColor: state.bg}}>
          <View style={{...styles.identity, ...state.template.identityStyle}}>
            <Text style={styles.heading}>{state.identity.name}</Text>
            <Text>{state.identity.location}</Text>
            <Text>{state.identity.phone}</Text>
            <Text>{state.identity.email}</Text>
            <Text style={styles.summary}>{state.identity.summary}</Text>
          </View>
          {state.sections
            .filter((each) => each.activated === true)
            .map((section) => {
              return (
                <View
                  style={{ ...styles.section, ...state.template.sectionStyle }}
                >
                  <View>
                    <Text style={styles.secTitle}>{section.title}</Text>
                  </View>
                  <View style={styles.sectionWrap}>
                    {section.addedItems.map((item) => {
                      return (
                        <View style={styles.singleSec}>
                          {Object.keys(item)
                            .filter((each) => each !== "id")
                            .map((val, i) => (
                              <Text key={i}>{item[val]}</Text>
                            ))}
                        </View>
                      );
                    })}
                  </View>
                </View>
              );
            })}
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default MyDocument;
