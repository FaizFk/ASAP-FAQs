import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthLanguageProvider } from "./context/AuthLanguageContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthLanguageProvider>
      <App />
    </AuthLanguageProvider>
  </StrictMode>
);
