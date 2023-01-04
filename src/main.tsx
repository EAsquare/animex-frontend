import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "../theme/global";
import { AppThemeProvider } from "../theme/ThemeContext";

import 'semantic-ui-css/semantic.min.css'

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppThemeProvider>
      <GlobalStyle />
      <App />
    </AppThemeProvider>
  </React.StrictMode>
);
