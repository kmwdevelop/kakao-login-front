import axios from "axios";

const KakaoLoginPage = () => {
  return (
    <div>
      <h1>카카오 로그인 테스트</h1>
      <button id="custom-login-btn" onClick={onclickLogin}>
        카카오 로그인
      </button>
    </div>
  );
};

const onclickLogin = () => {
  alert("카카오 로그인 버튼 클릭");
  // axios.get("http://localhost:3000/kakao/login").then((res) => {
  //   console.log(res);
  // });
  axios.get("http://localhost:5174/kakaoLogin").then((res) => {
    console.log(res);
  });
};

export default KakaoLoginPage;
