// MSAL configuration
export const msalConfig = {
  auth: {
    clientId: "db552657-e6d1-48d3-a58f-397cdcea73fe", // Azure AD Application (client) ID
    authority: "https://login.microsoftonline.com/ce5c9e34-9906-4081-8a98-69ec394244f1", // Tenant ID
    redirectUri: window.location.origin, // Must match the redirect URI registered in Azure AD
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"]
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
  graphUsersEndpoint: "https://graph.microsoft.com/v1.0/users"
};
