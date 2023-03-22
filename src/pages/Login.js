import styled from "styled-components";
import styles from "./Login.module.css";
import { useState, useEffect } from "react";
//
import { BsFacebook } from "react-icons/bs";
import { RiAppleLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { ImBubble } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PageLogin = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f7f7f7;
  display: flex;
  //

  justify-content: center;

  align-items: center;
  div.login-container {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    div.container-inner {
      border-radius: 5px;
      width: 100%;
      max-height: calc(100vh - 100px);
      overflow: auto;
      flex-direction: column;
      background-color: #fff;
      border: 1px solid #e1e2e3;
      scrollbar-width: none;
      -ms-overflow-style: none;

      div.container-inner2 {
        overflow: auto;
        position: relative;
        padding: 20px;
        div.wanted-logo {
          /* display: flex; */

          justify-content: center;

          align-items: center;
          /* margin: 0 auto;
          margin-bottom: 30px;
          padding-top: 56px; */
          span.login-wanted-logo {
            display: flex;

            align-items: inherit;

            justify-content: inherit;
            margin: 0 auto;
            margin-bottom: 30px;
            padding-top: 56px;
            svg.login-wanted-svg {
              display: inline-block;
              fill: currentColor;
              flex-shrink: 0;
              font-size: inherit;
              width: 93px;
              height: 28px;
              path {
              }
            }
          }
          form {
            h1.login-form {
              color: #000;
              font-weight: 700;
              text-align: center;
              letter-spacing: -0.023em;
              font-size: 24px;
              line-height: 32px;
            }
            h2.login-form-h2 {
              color: #888;
              font-weight: 400;
              text-align: center;
              letter-spacing: 0.145em;
              font-size: 14px;
              line-height: 20px;
              margin-bottom: 45px;
              margin-top: 20px;
            }
            div.form-email {
              margin: 17px 0px 7px;
              label.form-email-label {
                color: #888;
                font-weight: 600;
                text-align: left;
                letter-spacing: 0.0145em;
                font-size: 14px;
                line-height: 20px;
              }
            }
            input.form-input {
              width: 100%;
              height: 50px;
              min-height: 50px;
              padding: 0px 12px;
              outline: none;
              background-color: transparent;
              border: 1px solid #e1e2e3;
              color: black;
              border-radius: 5px;
              font-size: 16px;
              font-weight: 400;
              margin-bottom: 8px;
            }
            button.form-email-button {
              width: 100%;
              height: 50px;
              min-height: 50px;
              border-radius: 25px;
              font-size: 16px;
              margin-bottom: 10px;
              cursor: pointer;
              background-color: #f2f4f7;
              border: none;
              margin-top: 30px;
              color: #ccc;
              span.form-email-btspan {
                color: #ccc;
                font-weight: 600;
              }
            }
            p.icon-ptag {
              color: #888;
              font-weight: 500;
              text-align: center;
              letter-spacing: 0.031em;
              font-size: 11px;
              line-height: 14px;
              text-transform: capitalize;
              margin-top: 8px;
              margin-bottom: 0;
              text-transform: capitalize;
            }
            p.form-or-p {
              color: #939393;
              font-weight: 600;
              text-align: center;
              letter-spacing: 0.025em;
              font-size: 12px;
              line-height: 16px;
              margin-top: 5px;
              margin-bottom: 15px;
            }
            div.form-links {
              display: flex;

              flex-direction: row;
              margin: 0 auto;
              max-width: 360px;
              justify-content: center;

              button {
                -webkit-flex: 1;
                -ms-flex: 1;
                flex: 1;
                margin: 0;
                max-width: 25%;
              }
              /*  */
              button.links-btn2 {
                display: flex;
                flex-direction: column;
                -webkit-box-align: center;
                align-items: center;
                -webkit-box-pack: start;
                justify-content: flex-start;
                border: none;
                background: none;
                cursor: pointer;
                padding: 0px;
                span::after {
                  position: relative;
                  content: "";
                  left: -27px;
                  top: 0px;
                  width: 56px;
                  height: 56px;
                  border-radius: 50%;
                  border: 1px solid #e1e2e3;
                  box-sizing: border-box;
                }
                span.link-icon-span {
                  display: flex;
                  -webkit-box-align: inherit;
                  -ms-flex-align: inherit;
                  align-items: inherit;
                  -webkit-box-pack: inherit;
                  justify-content: inherit;
                  svg {
                    width: 56px;
                    height: 56px;

                    z-index: 99;
                    position: relative;
                    left: 28px;
                  }
                  .svg {
                    user-select: none;
                    width: 1em;
                    height: 1em;
                    display: inline-block;
                    fill: currentColor;
                    -webkit-flex-shrink: 0;
                    -ms-flex-negative: 0;
                    flex-shrink: 0;
                    font-size: inherit;
                    width: 56px;
                    height: 56px;
                  }
                }
              }
              /*  */
              button.links-btn1 {
                display: flex;
                flex-direction: column;
                -webkit-box-align: center;
                align-items: center;
                -webkit-box-pack: start;
                justify-content: flex-start;
                border: none;
                background: none;
                cursor: pointer;
                padding: 0px;
                span.link-icon-span {
                  display: flex;
                  -webkit-box-align: inherit;
                  -ms-flex-align: inherit;
                  align-items: inherit;
                  -webkit-box-pack: inherit;
                  justify-content: inherit;
                  svg {
                    width: 56px;
                    height: 56px;
                  }
                  .svg {
                    user-select: none;
                    width: 1em;
                    height: 1em;
                    display: inline-block;
                    fill: currentColor;
                    -webkit-flex-shrink: 0;
                    -ms-flex-negative: 0;
                    flex-shrink: 0;
                    font-size: inherit;
                    width: 56px;
                    height: 56px;
                  }
                }
              }
            }
            button.account-login-footer {
              background-color: transparent;
              border: none;
              width: 100%;
              cursor: pointer;
              p {
                margin-bottom: 0;

                display: inline-flex;

                justify-content: center;

                align-items: center;
              }
              p.account-login-footerp {
                color: #767676;
                font-weight: 600;
                text-align: center;
                letter-spacing: 0.0145em;
                font-size: 14px;
                line-height: 20px;
                margin-top: 30px;
                span.account-login-footerSpan {
                  display: flex;

                  align-items: inherit;

                  justify-content: inherit;
                  svg.account-login-footersvg {
                    user-select: none;
                    width: 1em;
                    height: 1em;
                    display: inline-block;
                    fill: currentColor;
                    -webkit-flex-shrink: 0;
                    -ms-flex-negative: 0;
                    flex-shrink: 0;
                    font-size: inherit;
                    margin-left: 3px;
                    width: 12px;
                    height: 12px;
                  }
                }
              }
            }
            hr.footer-hr {
              border: none;
              width: 100%;
              border-bottom: 1px solid #e1e2e3;
              margin-top: 30px;
              margin-bottom: 30px;
            }
            div.login-footer {
              margin: 30px auto 15px auto;
              display: flex;
              flex-direction: row;
              justify-content: center;
              a.login-footer-a {
                color: #767676;
                font-weight: 600;
                text-align: center;
                letter-spacing: 0.0192em;
                font-size: 13px;
                line-height: 18px;
              }
              a:first-of-type {
                margin-right: 12px;
              }
              a:last-child {
                font-weight: 900;
              }
            }
            p.footer-p {
              color: #888;
              font-weight: 400;
              text-align: center;
              letter-spacing: 0.025em;
              font-size: 12px;
              line-height: 16px;
              margin-bottom: 30px;
            }
            div.login-lan-select {
              /* height: 50px;
              min-height: 50px;
              border-radius: 5px;
              width: 80%;
              border: 1px solid var(--theme-palette-colors-bluegray-200);
              background-color: var(--theme-palette-colors-contents-bg);
              margin-bottom: 10px;
              position: relative;
              height: 34px;
              min-height: 34px; */
              display: flex;
              width: 100%;
              justify-content: center;
              div.login-lan-selectwrap {
                width: 140px;
                position: relative;
                img {
                  position: absolute;
                  left: 15px;
                  top: 9px;
                  width: 23px;
                  height: 16px;
                  border-radius: 2px;
                  z-index: 1;
                  border: 1px solid #e1e2e3;
                }
                div.select-div {
                  height: 50px;
                  min-height: 50px;
                  border-radius: 5px;
                  width: 100%;
                  border: 1px solid #e1e2e3;
                  background-color: #fff;
                  margin-bottom: 10px;
                  position: relative;
                  height: 34px;
                  min-height: 34px;
                  div {
                    right: 13px;
                  }
                  select {
                    padding-left: 45px;
                    font-size: 13px;
                    font-weight: 600;
                    width: 100%;
                    position: absolute;
                    left: 0;
                    appearance: none;
                    height: 100%;
                    border: none;
                    background: none;
                    z-index: 1;
                    /* font-size: 16px; */
                    color: var(--theme-palette-colors-gray-900);
                    /* font-weight: 400; */
                  }
                  div.select-footer {
                    position: absolute;
                    right: 20px;
                    font-size: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    span.select-footer-img {
                      display: flex;
                      align-items: inherit;
                      justify-content: inherit;
                      svg.link-icon-svg {
                        user-select: none;
                        width: 1em;
                        height: 1em;
                        display: inline-block;
                        fill: currentColor;

                        flex-shrink: 0;
                        font-size: inherit;
                        path {
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    div.container-inner::-webkit-scrollbar {
      display: none;
    }
  }
`;
function Login() {
  const navigate = useNavigate();
  // const goMain = () => {
  //   navigate("/Main");
  // };
  // const goApple = () => {
  //   navigate("/Login");
  // };
  // const goGoogle = () => {
  //   navigate("/Login");
  // };
  // const realEmail = "riscmp@naver.com";

  async function login(event) {
    event.preventDefault();
    try {
      await axios
        .post("/api/users/:email", {
          //Post 명세서 확인

          // password: password,  

          email: email,
          // password: password,
          // phoneNational: phoneNational,
          // phoneNumber: phoneNumber,
          // marketingAgreement: marketingAgreement,
        })
        .then(
          (res) => {
            console.log(res.data);

            if (res.data.message == "Email not exits") {
              alert("Email not exits");
            } else if (res.data.message == "Login Success") {
              navigate("/LoginInputPage");
            } else {
              alert("Incorrect Email not match");
            }
          },
          (fail) => {
            console.error(fail); // Error!
          }
        );
    } catch (err) {
      alert(err);
    }
  }

  const [marketingAgreement, setmarketingAgreement] = useState("");
  const [phoneNational, setphoneNational] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);
  const [valid2, setValid2] = useState(false);
  const [passvalid, pasetValid] = useState(false);

  // 여기에 있는 id와 연동해서 valid 상태가 변경 되어야 함
  // let [id, setId] = useState("");
  // let [pw, setPw] = useState("");

  const [button, setButton] = useState(true);

  // 새로 작성해보는 코드 시작
  const [inputId, setInputId] = useState("");
  // const [inputPw, setInputPw] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  // const handleInputPw = (e) => {
  //   setInputPw(e.target.value);
  // };

  <input
    type="email"
    className="form-control"
    placeholder="Enter email"
    name="input_id"
    value={inputId}
    onChange={handleInputId}
  />;

  // <input
  //   type="password"
  //   className="form-control"
  //   placeholder="Enter password"
  //   name="input_pw"
  //   value={inputPw}
  //   onChange={handleInputPw}
  // />

  // 새로 작성해보는 코드 끝

  useEffect(() => {
    email.includes("@") && email.length >= 5
      ? setButton(false)
      : setButton(true);
  }, [email]); // id와 pw가 변경될 때마다 실행 , 이부분 고쳐서 실행됨

  useEffect(() => {
    setValid(email.includes("@")); // id에 @가 포함된 경우 valid를 true로, 아니면 false로 변경
  }, [email]); // id가 바뀌었을 때

  useEffect(() => {
    setValid2(email.length >= 5); // pw의 길이가 5 이상인 경우 valid를 true로, 아니면 false로 변경
  }, [email]); // pw가 바뀌었을 때

  // const navigate = useNavigate();
  const goToLoginInput = () => {
    window.localStorage.setItem("authorized", true); // 인증 처리
    navigate("/LoginInputPage");
  };

  const goToLoginRegisterPage = () => {
    window.localStorage.setItem("authorized", true); // 인증 처리
    navigate("/LoginRegisterPage");
  };
  // const realId = "riscmp@naver.com";
  // const realPw = "12345678";
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
  // useEffect(() => {
  //   axios
  //     .post("/api/users/logIn")
  //     .then((response) => console.log(response.data));
  // }, []);

  return (
    <>
      <PageLogin>
        {/* <div className="login-container">
          <div className="wanted-logo"></div>
        </div> */}
        <div className="login-container">
          <div className="container-inner">
            <div className="container-inner2">
              <div className="wanted-logo">
                <span className="login-wanted-logo">
                  <svg viewBox="0 0 93 28" className="login-wanted-svg">
                    <path
                      d="M4.77051 23H8.68066L11.626 13.7578L14.5967 23H18.5068L22.874 9.28906H18.9639L16.4248 18.0996L13.4541 9.28906H9.79785L6.82715 18.0996L4.28809 9.28906H0.37793L4.77051 23ZM22.8486 16.1191C22.8486 19.6865 25.1084 23.3301 29.5264 23.3301C31.0371 23.3428 32.332 22.9111 33.3857 22.1621V23H36.9658V9.28906H33.3857V10.127C32.332 9.37793 31.0371 8.94629 29.5264 8.95898C25.1084 8.95898 22.8486 12.5518 22.8486 16.1191ZM26.3271 16.1191C26.3145 13.6689 27.9902 12.2725 29.9326 12.2598C31.8496 12.2725 33.3604 13.6309 33.3604 16.0938C33.3604 18.5693 31.8496 20.0166 29.9326 20.0039C27.9268 20.0166 26.3145 18.5693 26.3271 16.1191ZM39.1494 23H42.8564V15.1035C42.8564 13.5166 43.7832 12.2725 45.4209 12.2598C47.1855 12.2725 47.9346 13.4658 47.9346 15.002V23H51.6416V14.3418C51.6416 11.3457 50.0928 8.9209 46.6904 8.9082C45.2432 8.9209 43.6309 9.54297 42.7803 10.8887V9.28906H39.1494V23ZM52.708 12.5645H55.1963V18.9375C55.1963 21.6035 56.8594 23.3301 59.5381 23.3301C60.6172 23.3301 61.29 23.1396 61.6201 23V19.7754C61.4297 19.8516 60.9219 19.9023 60.4775 19.9023C59.4238 19.9023 58.8779 19.5088 58.8779 18.3027V12.5645H61.6201V9.28906H58.8779V4.69336L55.2471 6.2168V9.28906H52.708V12.5645ZM62.8389 16.1445C62.8389 20.0928 65.3652 23.3428 69.5166 23.3301C72.5381 23.3428 74.7217 21.6035 75.6865 19.0898L72.3857 18.4043C71.8398 19.585 70.8369 20.3594 69.5166 20.3594C67.752 20.3594 66.5586 18.9756 66.2666 17.1094H76.1436C76.1816 16.792 76.1943 16.4746 76.1943 16.1445C76.1943 11.9551 73.4395 8.95898 69.5166 8.95898C65.4414 8.95898 62.8389 12.1836 62.8389 16.1445ZM66.4443 14.5449C66.9014 13.1992 67.9932 12.2598 69.5166 12.2598C71.04 12.2598 72.1445 13.1992 72.6143 14.5449H66.4443ZM77.4131 16.1191C77.4131 20.1055 79.9395 23.3428 84.0908 23.3301C85.6016 23.3428 86.8965 22.8984 87.9502 22.1621V23L91.5049 23.0254V3.27148L87.874 4.69336V10.0762C86.7568 9.32715 85.4365 8.95898 84.0908 8.95898C80.0029 8.95898 77.4131 12.1201 77.4131 16.1191ZM80.8662 16.1191C80.8662 13.6562 82.542 12.2725 84.4717 12.2598C86.4141 12.2725 87.9121 13.6309 87.9248 16.0684C87.9121 18.5693 86.4141 20.0166 84.4717 20.0039C82.4912 20.0166 80.8662 18.5693 80.8662 16.1191Z"
                      fill="var(--theme-palette-colors-black-100)"
                    ></path>
                  </svg>
                </span>
                <form>
                  <h1
                    data-testid="Typography"
                    color="var(--theme-palette-colors-black-100)"
                    className="login-form"
                  >
                    나다운 일의 시작, 원티드
                  </h1>
                  <h2
                    data-testid="Typography"
                    color="var(--theme-palette-colors-gray-600)"
                    className="login-form-h2"
                  >
                    취업, 이직, 커리어 콘텐츠까지
                    <br />
                    커리어 성장의 모든 것
                  </h2>
                  <div className="form-email">
                    <label
                      data-testid="Typography"
                      color="var(--theme-palette-colors-gray-600)"
                      className="form-email-label"
                    >
                      이메일
                    </label>
                  </div>
                  <input
                    type="email"
                    placeholder="이메일을 입력해주세요."
                    name="email"
                    data-testid="Input_email"
                    className="form-input"
                    defaultValue=""
                    value={email}
                    // onChange={handleInputId}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    // onKeyUp={Login}

                    // onClick={(e) => {
                    //   e.stopPropagation();
                    //   goToLoginInput();
                    // }}{(e) => {
                    //   if (realemail == email) {
                    //      {
                    //       e.stopPropagation();
                    //       goToMain();
                    //     }
                    //   } else {
                    //     alert("올바른 이메일을 입력해주세요.");
                    //   }
                    // }}
                  />

                  <button
                    type="submit"
                    className="form-email-button"
                    disabled={button}
                    onClick={login}
                    // onClick
                    //   if (realEmail == email) {
                    //     Login.stopPropagation();
                    //     goToLoginInput();
                    //   } else {
                    //     Login.stopPropagation();
                    //     goToLoginRegisterPage();
                    //   }
                    // }}
                  >
                    <span
                      data-testid="Typography"
                      color="var(--theme-palette-colors-black-100)"
                      className="form-email-btspan"
                    >
                      이메일로 계속하기
                    </span>
                  </button>

                  <p
                    data-testid="Typography"
                    color="var(--theme-palette-colors-gray-500)"
                    className="form-or-p"
                  >
                    또는
                  </p>
                  <div className="form-links">
                    <button
                      type="button"
                      data-attribute-id="signupLogin__start"
                      data-method="apple"
                      className="links-btn1"
                      onClick={() =>
                        (window.location.href =
                          "https://appleid.apple.com/auth/authorize?scope=name%20email&response_mode=form_post&response_type=code%20id_token&client_id=com.wantedlab.wanted.web&state=BDKKHWVwJXKAJZEf&redirect_uri=https%3A%2F%2Fid-api.wanted.jobs%2Fv1%2Fproviders%2Fapple%2Fauth")
                      }
                    >
                      <span className="link-icon-span">
                        <svg viewBox="0 0 57 56" className="link-icon-svg">
                          <path
                            d="M0.5 28C0.5 12.536 13.036 0 28.5 0C43.964 0 56.5 12.536 56.5 28C56.5 43.464 43.964 56 28.5 56C13.036 56 0.5 43.464 0.5 28Z"
                            fill="black"
                          ></path>
                          <path
                            d="M28.8182 19.359C30.0068 19.359 31.4968 18.5307 32.384 17.4264C33.1876 16.4256 33.7736 15.0279 33.7736 13.6302C33.7736 13.4404 33.7568 13.2506 33.7233 13.0953C32.4008 13.147 30.8104 14.0098 29.8561 15.1659C29.1028 16.046 28.4164 17.4264 28.4164 18.8413C28.4164 19.0484 28.4499 19.2555 28.4666 19.3245C28.5503 19.3418 28.6843 19.359 28.8182 19.359ZM24.6329 40.2381C26.2568 40.2381 26.9767 39.1165 29.0023 39.1165C31.0615 39.1165 31.5135 40.2036 33.3215 40.2036C35.0961 40.2036 36.2847 38.5126 37.4064 36.8561C38.6619 34.958 39.1809 33.0944 39.2144 33.0081C39.0972 32.9736 35.6988 31.5414 35.6988 27.5209C35.6988 24.0352 38.3773 22.465 38.528 22.3442C36.7535 19.7214 34.0581 19.6524 33.3215 19.6524C31.3294 19.6524 29.7055 20.8947 28.6843 20.8947C27.5794 20.8947 26.1229 19.7214 24.3986 19.7214C21.1173 19.7214 17.7858 22.5168 17.7858 27.7969C17.7858 31.0755 19.0247 34.5438 20.5481 36.787C21.8539 38.6851 22.9923 40.2381 24.6329 40.2381Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                      <p
                        data-testid="Typography"
                        color="var(--theme-palette-colors-gray-600)"
                        className="icon-ptag"
                      >
                        Apple
                      </p>
                    </button>
                    <button
                      type="button"
                      data-attribute-id="signupLogin__start"
                      data-method="facebook"
                      className="links-btn1"
                      onClick={() =>
                        (window.location.href =
                          "https://www.facebook.com/login.php?skip_api_login=1&api_key=316787678519888&kid_directed_site=0&app_id=316787678519888&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fdisplay%3Dpage%26scope%3Demail%252Cpublic_profile%252Cuser_friends%26locale%3Den_US%26client_id%3D316787678519888%26state%3DIVkdMRVUKVKhilER%26redirect_uri%3Dhttps%253A%252F%252Fid-api.wanted.jobs%252Fv1%252Fproviders%252Ffacebook%252Fauth%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Df05b387e-2ecf-4fe1-b029-64aabe4ac3ed%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fid-api.wanted.jobs%2Fv1%2Fproviders%2Ffacebook%2Fauth%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DIVkdMRVUKVKhilER%23_%3D_&display=page&locale=ko_KR&pl_dbl=0")
                      }
                    >
                      <span className="link-icon-span">
                        <svg viewBox="0 0 57 56" className="link-icon-svg">
                          <path
                            d="M0.5 28C0.5 12.536 13.036 0 28.5 0C43.964 0 56.5 12.536 56.5 28C56.5 43.464 43.964 56 28.5 56C13.036 56 0.5 43.464 0.5 28Z"
                            fill="#1877F2"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M28.5 14.2855C20.9256 14.2855 14.7857 20.4253 14.7857 27.9997C14.7857 34.8445 19.801 40.5181 26.3578 41.5467V31.9645H22.8744V27.9997H26.3578V24.9785C26.3578 21.5417 28.404 19.6423 31.5377 19.6423C33.038 19.6423 34.607 19.9111 34.607 19.9111V23.2848H32.8776C31.1743 23.2848 30.6422 24.3421 30.6422 25.4269V27.9997H34.4465L33.839 31.9645H30.6422V41.5467C37.199 40.5181 42.2143 34.8445 42.2143 27.9997C42.2143 20.4253 36.0744 14.2855 28.5 14.2855Z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </span>
                      <p
                        data-testid="Typography"
                        color="var(--theme-palette-colors-gray-600)"
                        className="icon-ptag"
                      >
                        Facebook
                      </p>
                    </button>
                    <button
                      type="button"
                      data-attribute-id="signupLogin__start"
                      data-method="google"
                      className="links-btn2 "
                      onClick={() =>
                        (window.location.href =
                          "https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&scope=profile%20email%20openid&access_type=online&include_granted_scopes=true&client_id=792010635012-vi1rjnvg0n9d2f2noe9c74jvea78vlvs.apps.googleusercontent.com&state=UraHqWwXKtyCaKsO&redirect_uri=https%3A%2F%2Fid-api.wanted.jobs%2Fv1%2Fproviders%2Fgoogle%2Fauth&service=lso&o2v=2&flowName=GeneralOAuthFlow")
                      }
                    >
                      <span className="link-icon-span">
                        <svg viewBox="0 0 57 56" className="link-icon-svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M41.6657 28.3122C41.6657 27.34 41.5789 26.4044 41.4158 25.5068H28.5V30.8112H35.8813C35.5629 32.5255 34.5968 33.9792 33.1446 34.9514V38.3922H37.5758C40.1693 36.0044 41.6657 32.4889 41.6657 28.3122Z"
                            fill="#3D82F0"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M28.5003 41.7146C32.2032 41.7146 35.3072 40.4864 37.5761 38.3927L33.1449 34.9504C31.9167 35.7733 30.3457 36.2594 28.5003 36.2594C24.9285 36.2594 21.9053 33.8472 20.8264 30.606H16.2443V34.1595C18.5011 38.6411 23.1396 41.7146 28.5003 41.7146Z"
                            fill="#31A752"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20.8261 30.606C20.5518 29.7831 20.3964 28.9039 20.3964 28.0002C20.3964 27.0966 20.5518 26.2174 20.8261 25.3945V21.841H16.244C15.316 23.6924 14.7857 25.7877 14.7857 28.0002C14.7857 30.2128 15.316 32.3081 16.244 34.1595L20.8261 30.606Z"
                            fill="#F9BA00"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M28.5003 19.7407C30.5133 19.7407 32.322 20.4325 33.7422 21.7917L37.6767 17.8588C35.3011 15.6447 32.1971 14.2855 28.5003 14.2855C23.1396 14.2855 18.5011 17.359 16.2443 21.842L20.8264 25.394C21.9053 22.1529 24.9285 19.7407 28.5003 19.7407Z"
                            fill="#E64234"
                          ></path>
                        </svg>
                      </span>
                      <p
                        data-testid="Typography"
                        color="var(--theme-palette-colors-gray-600)"
                        className="icon-ptag"
                      >
                        Google
                      </p>
                    </button>
                    <button
                      type="button"
                      data-attribute-id="signupLogin__start"
                      data-method="kakao"
                      className="links-btn1 "
                      onClick={() =>
                        (window.location.href =
                          "https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fresponse_type%3Dcode%26state%3DYHLRjjNRIkdeJhhO%26redirect_uri%3Dhttps%253A%252F%252Fid-api.wanted.jobs%252Fv1%252Fproviders%252Fkakao%252Fauth%26through_account%3Dtrue%26client_id%3Dd270c6f88893a0836c4f7a578e551037#login")
                      }
                    >
                      <span className="link-icon-span">
                        <svg viewBox="0 0 57 56" className="link-icon-svg">
                          <path
                            d="M0.5 28C0.5 12.536 13.036 0 28.5 0C43.964 0 56.5 12.536 56.5 28C56.5 43.464 43.964 56 28.5 56C13.036 56 0.5 43.464 0.5 28Z"
                            fill="#FEE500"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M28.5 16.2063C21.5606 16.2063 15.9286 20.5812 15.9286 25.9617C15.9286 29.3183 18.1034 32.2474 21.4223 34.0326L20.0269 39.1492C20.0005 39.2509 20.006 39.3583 20.0424 39.4569C20.0788 39.5555 20.1446 39.6406 20.2307 39.7008C20.3169 39.761 20.4195 39.7934 20.5246 39.7937C20.6297 39.7939 20.7324 39.7621 20.8189 39.7023L26.9286 35.6417C27.444 35.6417 27.972 35.7297 28.5 35.7297C35.4394 35.7297 41.0714 31.3549 41.0714 25.9617C41.0714 20.5686 35.4394 16.2063 28.5 16.2063Z"
                            fill="#181600"
                          ></path>
                        </svg>
                      </span>
                      <p
                        data-testid="Typography"
                        color="var(--theme-palette-colors-gray-600)"
                        className="icon-ptag"
                      >
                        Kakao
                      </p>
                    </button>
                  </div>
                  {/*  */}
                  <button type="button" className="account-login-footer">
                    <p
                      data-testid="Typography"
                      color="var(--theme-palette-colors-gray-700)"
                      className="account-login-footerp"
                    >
                      계정을 잊으셨나요?
                      <span className="account-login-footerSpan">
                        <svg
                          viewBox="0 0 12 12"
                          color="var(--theme-palette-colors-gray-600)"
                          className="account-login-footersvg"
                        >
                          <path
                            d="M3.34467 9.71967C3.05178 10.0126 3.05178 10.4874 3.34467 10.7803C3.63756 11.0732 4.11244 11.0732 4.40533 10.7803L8.65533 6.53033C8.94822 6.23744 8.94822 5.76256 8.65533 5.46967L4.40533 1.21967C4.11244 0.926777 3.63756 0.926777 3.34467 1.21967C3.05178 1.51256 3.05178 1.98744 3.34467 2.28033L7.06434 6L3.34467 9.71967Z"
                            fill="var(--theme-palette-colors-gray-600)"
                          ></path>
                        </svg>
                      </span>
                    </p>
                  </button>
                  <hr className="footer-hr"></hr>
                  <div className="login-footer">
                    <a
                      data-testid="Typography"
                      color="var(--theme-palette-colors-gray-700)"
                      href="https://id.wanted.jobs/terms/ko"
                      target="_blank"
                      className="login-footer-a"
                    >
                      이용약관
                    </a>
                    <a
                      data-testid="Typography"
                      color="var(--theme-palette-colors-gray-700)"
                      href="https://id.wanted.jobs/privacy/ko?user=true"
                      target="_blank"
                      className="login-footer-a"
                    >
                      개인정보처리방침
                    </a>
                  </div>
                  <p
                    data-testid="Typography"
                    color="var(--theme-palette-colors-gray-600)"
                    className="footer-p"
                  >
                    © Wantedlab, Inc.
                  </p>

                  <div className="login-lan-select">
                    <div className="login-lan-selectwrap">
                      <img
                        src="https://static.wanted.co.kr/images/wantedoneid/ico_KR.svg"
                        className="select-img"
                      />
                      <div className="select-div">
                        <select className="select">
                          <option value="ko_KR" selected="">
                            한국어
                          </option>
                          <option value="en_US">English</option>
                          <option value="ja">日本語</option>
                        </select>
                        <div className="select-footer">
                          <span className="select-footer-img">
                            <svg viewBox="0 0 10 6" className="link-icon-svg">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5 3.93934L1.28033 0.21967C0.987437 -0.0732233 0.512563 -0.0732233 0.21967 0.21967C-0.0732233 0.512563 -0.0732233 0.987437 0.21967 1.28033L4.46967 5.53033C4.76256 5.82322 5.23744 5.82322 5.53033 5.53033L9.78033 1.28033C10.0732 0.987437 10.0732 0.512563 9.78033 0.21967C9.48744 -0.0732233 9.01256 -0.0732233 8.71967 0.21967L5 3.93934Z"
                                fill="var(--theme-palette-colors-gray-900)"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </PageLogin>
    </>
  );
}

//

export default Login;
