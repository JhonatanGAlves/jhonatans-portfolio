import React from "react";

import ReactDOM from "react-dom/client";

import { App } from "./App.tsx";
import PortfolioContextProvider from "./context/PortfolioContext.tsx";

import "@radix-ui/themes/styles.css";
import "./globals.css";
import "./i18n/init.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PortfolioContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PortfolioContextProvider>
);
