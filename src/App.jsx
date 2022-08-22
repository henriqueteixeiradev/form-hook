import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "./routes/Routes";
import { GlobalStyle } from "../src/styles/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Routes />
    <GlobalStyle />
  </React.StrictMode>
);
