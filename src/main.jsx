import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ContextProvider from "./utils/SettingContext.jsx";
import AuthProvider from "./utils/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ContextProvider>
      <App />
    </ContextProvider>
  </AuthProvider>
);
