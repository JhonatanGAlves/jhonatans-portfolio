import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./globals.css";
import "./i18n/init.js";
import PortfolioContextProvider from "./context/PortfolioContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PortfolioContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PortfolioContextProvider>
);
