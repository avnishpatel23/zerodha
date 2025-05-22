import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/Apps"; // ✅ import the app
import { BrowserRouter } from "react-router-dom"; // ✅ import the router
import "./index.css";
import Home from "./components/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ wrap with router */}
      <Home />
    </BrowserRouter>
     <App />
  </React.StrictMode>
);
