import React from "react";
import { useLocation } from "react-router-dom";

function SuccessPage() {
  const location = useLocation();

  // URLSearchParams를 사용하여 쿼리 파라미터를 가져옴
  const queryParams = new URLSearchParams(location.search);
  const accessToken = queryParams.get("access_token");
  const refreshToken = queryParams.get("refresh_token");

  return (
    <div>
      <h1>Success Page</h1>
      <p>Access Token: {accessToken}</p>
      <p>Refresh Token: {refreshToken}</p>
    </div>
  );
}

export default SuccessPage;
