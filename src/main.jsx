import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss"; // Chemin relatif correct

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
