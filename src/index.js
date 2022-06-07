import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import reduxStore from "./app/reduxStore";
import "./index.css";
import ToggleColorModeProvider from "./utils/ToggleColorMode";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <ToggleColorModeProvider>
        <Router>
          <App />
        </Router>
      </ToggleColorModeProvider>
    </Provider>
  </React.StrictMode>
);
