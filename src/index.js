import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context";
import { Auth0Provider } from "@auth0/auth0-react";
//Domain: dev-ucxj3l5obyfjomqw.us.auth0.com
//client ID: wGPE9bBzx3yoT5zLN0CMhs2FcCKR9D71
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <Auth0Provider
        domain='dev-ucxj3l5obyfjomqw.us.auth0.com'
        clientId='wGPE9bBzx3yoT5zLN0CMhs2FcCKR9D71'
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
