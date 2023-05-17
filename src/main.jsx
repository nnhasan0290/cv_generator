import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import ContextProvider from "./utils/SettingContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-5rk4z8lwptb4tei0.us.auth0.com"
    clientId="l7lXBylgpdsrHwxfXIuk1das0L6e5aoC"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <ContextProvider>
      <App />
    </ContextProvider>
  </Auth0Provider>
);
