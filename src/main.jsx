import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import dotenv from 'dotenv'
// // dotenv.config();
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Toaster position="bottom-center" reverseOrder={false} />
  </StrictMode>
);
