import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // BrowserRouter 사용
import "./App.css";
import SuccessPage from "./success/success";
import KakaoLoginPage from "./kakao/kakao-login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        {/* 기본 경로를 KakaoLoginPage 컴포넌트로 설정 */}
        <Route path="/" element={<KakaoLoginPage />} />
        <Route path="/kakaoLogin" element={<KakaoLoginPage />} />
        <Route path="/success" element={<SuccessPage />} />
        {/* 잘못된 URL 입력 시 KakaoLoginPage로 리디렉션 */}
        <Route path="*" element={<KakaoLoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
