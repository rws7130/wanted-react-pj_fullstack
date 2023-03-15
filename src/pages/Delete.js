import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsGlobe } from "react-icons/bs";

const LoginValid = styled.div`
  /* display: flex;
    justify-content: center; */
  align-items: center;

  color: ${(props) => (props.valid ? "transparent" : "orange")};
  padding: 6px 3px;
  position: relative;
  top: 6px;
  font-size: 13px;
`;

const PasswordValid = styled.div`
  /* display: flex;
    justify-content: center; */
  align-items: center;
  color: ${(props) => (props.valid ? "transparent" : "orange")};
  padding: 6px 3px;
  position: relative;
  top: -15px;
  font-size: 13px;
`;

const Lanoption = styled.div`
  margin-right: 25px;
  width: 93px;
  height: 36px;
  background: rgba(0, 0, 0, 0.4);
  margin: 20px 0 0 0;
`;
function Login() {
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);
  const [valid2, setValid2] = useState(false);
  const [passvalid, pasetValid] = useState(false);

  // 여기에 있는 id와 연동해서 valid 상태가 변경 되어야 함
  let [id, setId] = useState("");
  let [pw, setPw] = useState("");
  const [button, setButton] = useState(true);

  useEffect(() => {
    id.includes("@") && pw.length >= 5 ? setButton(false) : setButton(true);
  }, [id, pw]); // id와 pw가 변경될 때마다 실행 , 이부분 고쳐서 실행됨

  useEffect(() => {
    setValid(id.includes("@")); // id에 @가 포함된 경우 valid를 true로, 아니면 false로 변경
  }, [id]); // id가 바뀌었을 때

  useEffect(() => {
    setValid2(pw.length >= 5); // pw의 길이가 5 이상인 경우 valid를 true로, 아니면 false로 변경
  }, [pw]); // pw가 바뀌었을 때

  const navigate = useNavigate();
  const goToMain = () => {
    window.localStorage.setItem("authorized", true); // 인증 처리
    navigate("/Main");
  };
  const realId = "riscmp@naver.com";
  const realPw = "12345678";
  // 로그인

  // const inputPassword = (e) => {
  //   setPassword(e.target.value);
  // }; 

  // const inputPassword2 = (b) => {
  //   pasetValid(b.target.value);
  // };
  // 이메일시작;
  useEffect(() => {
    if (password.length < 5) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [password]);
  // 패스워드시작
  useEffect(() => {
    if (passvalid.length < 5) {
      setValid2(false);
    } else {
      setValid2(true);
    }
  }, [passvalid]);

  //
  // const goAction = () => {
  //   dispatch(
  //     LoginAction({
  //       email: "abcd@gmail.com",
  //       name: "abcd",
  //     })
  //   );
  //   window.localStorage.setItem("token", "123456");
  // };

  return (
    <body>
      <div className={styles["overlay-login"]}>
        <section>
          {/* src="https://assets.nflxext.com/ffe/siteui/vlv3/afc06103-4d6a-4236-b496-34b671a7e9ba/39dc98ce-1991-4d60-97c1-d3a0ef2ad327/KR-ko-20221003-popsignuptwoweeks-perspective_alpha_Questions_large.jpg"
          alt=""
        > */}
        </section>
        <div className={styles["nfHeaderlogin-headersignupBasicHeader"]}>
          <a
            href="/"
            nfHeaderlogin-headersignupBasicHeader
            className={styles["svg-nfLogo signupBasicHeader"]}
            data-uia="netflix-header-svg-logo"
          >
            <svg
              viewBox="0 0 111 30"
              data-uia="netflix-logo"
              className={styles["svg-icon-netflix-logo"]} //svg-icon  앞에 지움
              aria-hidden="true"
              focusable="false"
            >
              <g id={styles["netflix-logo"]}>
                <path
                  d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                  id="Fill-14"
                ></path>
              </g>
            </svg>
            {/* <span className="screen-reader-text">Netflix 홈</span> */}
          </a>
        </div>

        <div className={styles["login-container"]}>
          <div className={styles["hybrid-login"]}>
            <h1>로그인</h1>
            <form method="" className="" action>
              <div className={styles["email-input"]}>
                <input
                  id="id"
                  type="text"
                  className={styles["email1"]}
                  // onChange={inputPassword}
                  onChange={(e) => {
                    setId(e.target.value);
                  }}
                  onKeyUp={Login}
                  placeholder="이메일 주소 또는 전화번호"
                />
                <PasswordValid valid={valid}>
                  정확한 이메일 주소를 입력하세요.
                </PasswordValid>

                {/* <label
                  htmlFor=""
                  className="email-text"
                  placeholder="이메일 주소 또는 전화번호"
                ></label> */}
                {/* <div id="" className="inputError" data-uia="login-field+error">
                  정확한 이메일 주소를 입력하세요.
                </div> */}
                {/* <div className="fail-input"></div> */}

                {/* <label
                  htmlFor=""
                  className="email-text"
                  placeholder="이메일 주소 또는 전화번호"
                ></label> */}
                <input
                  id="password"
                  type="text"
                  className={styles["email2"]}
                  // onChange={inputPassword2}
                  placeholder="비밀번호"
                  onChange={(e) => {
                    setPw(e.target.value);
                  }}
                  onKeyUp={Login}
                />

                <LoginValid valid={valid2}>
                  비밀번호는 4~60자 사이여야 합니다.
                </LoginValid>
                {/* <div id="" class="inputError" data-uia="password-field+error">
                  비밀번호는 4~60자 사이여야 합니다.
                </div> */}
                {/* <div className="fail-input"></div> */}
              </div>
              <button
                className={styles["login-button"]}
                disabled={button}
                onClick={(e) => {
                  if (realId == id) {
                    if (realPw == pw) {
                      e.stopPropagation();
                      goToMain();
                    }
                  } else {
                    alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
                  }
                }}
              >
                로그인
              </button>
              <div className={styles["hybrid-login-form-help"]}>
                <div className={styles["ui-binary-inputlogin-remember-me"]}>
                  <input
                    type="checkbox"
                    className=""
                    name="rememberMe"
                    id="bxid_rememberMe_true"
                    value="true"
                    tabindex="0"
                    data-uia="rememberMe"
                  ></input>
                  <label for="bxid_rememberMe_true" data-uia="label+rememberMe">
                    <span
                      className={styles["login-remember-me-label-text"]}
                      // style={{ textDecoration: "none" }}
                    >
                      로그인 정보 저장
                    </span>
                  </label>
                  <div className="helper"></div>
                </div>
                <a
                  className={styles["login-help-link"]}
                  target="_self"
                  data-uia="login-help-link"
                  href="/LoginHelp"
                >
                  도움이 필요하신가요?
                </a>
              </div>
            </form>
          </div>

          <div className={styles["hybrid-login-form-other"]}>
            <div class={styles["login-signup-now"]} data-uia="login-signup-now">
              Netflix 회원이 아닌가요?{" "}
              <a class="" target="_self" href="/">
                지금 가입하세요
              </a>
              .
            </div>
            <div
              class={styles["login-explain"]}
              data-uia="recaptcha-terms-of-use"
            >
              <p>
                <div className={styles.thispage}>
                  이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이
                  아님을 확인합니다.
                </div>

                <button
                  class={styles["login-expbtn"]}
                  data-uia="recaptcha-learn-more-button"
                >
                  자세히 알아보기.
                </button>
              </p>
              <div
                class={styles["last-comments"]}
                data-uia="recaptcha-disclosure"
              >
                <span data-uia="recaptcha-disclosure-text">
                  Google reCAPTCHA가 수집하는 정보에는 Google{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    data-uia="recaptcha-privacy-link"
                    target="_blank"
                  >
                    개인정보처리방침
                  </a>
                  과{" "}
                  <a
                    href="https://policies.google.com/terms"
                    data-uia="recaptcha-tos-link"
                    target="_blank"
                  >
                    서비스 약관
                  </a>
                  이 적용되며, 해당 정보는 reCAPTCHA 서비스 제공, 관리 및 개선과
                  일반적인 보안 유지에 사용됩니다(Google의 개인 맞춤 광고에 사용
                  안 함).
                </span>
              </div>
            </div>
          </div>
          {/* <div class="recaptcha-terms-of-use" data-uia="recaptcha-terms-of-use">
            <p>
              <span>
                이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이
                아님을 확인합니다.
              </span>
              &nbsp;
              <button
                class="recaptcha-terms-of-use--link-button"
                data-uia="recaptcha-learn-more-button"
              >
                자세히 알아보기.
              </button>
            </p>
            <div
              class="recaptcha-terms-of-use--disclosure"
              data-uia="recaptcha-disclosure"
            >
              <span id="" data-uia="recaptcha-disclosure-text">
                Google reCAPTCHA가 수집하는 정보에는 Google{" "}
                <a
                  href="https://policies.google.com/privacy"
                  id="recaptcha-privacy-link"
                  data-uia="recaptcha-privacy-link"
                  target="_blank"
                >
                  개인정보처리방침
                </a>
                과{" "}
                <a
                  href="https://policies.google.com/terms"
                  id="recaptcha-tos-link"
                  data-uia="recaptcha-tos-link"
                  target="_blank"
                >
                  서비스 약관
                </a>
                이 적용되며, 해당 정보는 reCAPTCHA 서비스 제공, 관리 및 개선과
                일반적인 보안 유지에 사용됩니다(Google의 개인 맞춤 광고에 사용
                안 함).
              </span>
            </div>
          </div> */}
        </div>
        <div className={styles["login-footer"]}>
          <div className={styles["last-box"]}>
            <p className={styles["footer-top"]}>
              질문이 있으신가요? 문의 전화: &nbsp;
              <a className="footer-top-a" href="tel:080-001-9587">
                080-001-9587
              </a>
            </p>
            <ul className={styles["footer-link"]}>
              <li className={styles["footer-link-item"]}>
                <a className="footer-link" href="#!">
                  <span>자주 묻는 질문</span>
                </a>
              </li>
              <li className={styles["footer-link-item"]}>
                <a className="footer-link" href="#!">
                  <span>고객 센터</span>
                </a>
              </li>
              <li className={styles["footer-link-item"]}>
                <a className="footer-link" href="#!">
                  <span>이용 약관</span>
                </a>
              </li>
              <li className={styles["footer-link-item"]}>
                <a className="footer-link" href="#!">
                  <span>개인정보</span>
                </a>
              </li>
              <li className={styles["footer-link-item"]}>
                <a className="footer-link" href="#!">
                  <span>쿠키 설정</span>
                </a>
              </li>
              <li className={styles["footer-link-item"]}>
                <a className="footer-link" href="#!">
                  <span>회사 정보</span>
                </a>
              </li>
            </ul>
            <div class="lang-selection-container" id="lang-switcher">
              <div
                data-uia="language-picker+container"
                class={styles["ui-select-wrapper"]}
              >
                <Lanoption>
                  {/* // className={styles["home-icon"]} */}
                  <BsGlobe className={styles["home-icon"]}></BsGlobe>
                  <select name="lan" id={styles["header-lan"]}>
                    {/* <TiArrowSortedDown className={styles.arrow}> */}
                    <option value="">한국어</option>
                    <option value="">English</option>
                    {/* </TiArrowSortedDown> */}
                  </select>
                </Lanoption>
              </div>
            </div>
            <p class={styles["footer-country"]}>넷플릭스 대한민국</p>
            <div class={styles["copy-text"]}>
              <div class={styles["copy-text-block"]}>
                넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
                제2018-서울종로-0426호 전화번호: 080-001-9587
              </div>
              <div class={styles["copy-text-block"]}>
                대표: 레지널드 숀 톰프슨
              </div>
              <div class={styles["copy-text-block"]}>
                이메일 주소: korea@netflix.com
              </div>
              <div class={styles["copy-text-block"]}>
                주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동
                20층 우편번호 03161
              </div>
              <div class={styles["copy-text-block"]}>
                사업자등록번호: 165-87-00119
              </div>
              <div class={styles["copy-text-block"]}>
                클라우드 호스팅: Amazon Web Services Inc.
              </div>
              <div id="" class={styles["copy-text-block"]} data-uia="">
                <a href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1658700119">
                  공정거래위원회 웹사이트
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Login;