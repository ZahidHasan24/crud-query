import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { worker } from "@uidotdev/react-query-api";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

new Promise((res) => setTimeout(res, 100))
  .then(() =>
    worker.start({
      quiet: true,
      onUnhandledRequest: "bypass",
    })
  )
  .then(() => {
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <div className="container">
            <App />
          </div>
        </BrowserRouter>
      </React.StrictMode>
    );
  });
