import { Auth0Provider } from "@auth0/auth0-react";

const AuthProvider = ({ children }) => {
  return (
    <Auth0Provider
      domain="dev-5rk4z8lwptb4tei0.us.auth0.com"
      clientId="l7lXBylgpdsrHwxfXIuk1das0L6e5aoC"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
