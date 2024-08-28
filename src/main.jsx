import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import KakaoLoginPage from "./kakao/kakao-login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <KakaoLoginPage />
  </StrictMode>
);
