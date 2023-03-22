import axios from "axios";
import styles from "./LoginRegisterPage.module.css";
import styled from "styled-components";
// import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import Checkbox from "../components/common/Checkbox";
import CheckboxGroup from "../components/common/CheckboxGroup";
const LoginRegisterStyle = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  justify-content: center;

  /* align-items: center; */
  background-color: #f7f7f7;
  div.Register-wrap {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;

    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: flex-end;
    div.Register-container {
      border-radius: 5px;
      width: 100%;
      max-height: calc(100vh - 100px);
      overflow: auto;

      display: flex;

      flex-direction: column;
      background-color: #fff;
      border: 1px solid #e1e2e3;
      div.Register-top {
        padding: 0px 20px;
        height: 64px;
        flex: 0 0 auto;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        div.top-cancel {
          min-width: 64px;
          display: flex;

          justify-content: flex-start;

          align-items: center;
          font-weight: 400;
          font-size: 17px;
          button.canel-button {
            border: none;
            background: none;
            cursor: pointer;
            padding: 8px;
            margin: -8px;
            fill: #000;
            p.cancel-btn-ptag {
              color: #000;
              text-align: center;
              letter-spacing: -0.002em;
              line-height: 26px;
              min-width: 64px;
              display: flex;
              -webkit-box-pack: start;
              justify-content: flex-start;
              -webkit-box-align: center;
              align-items: center;
              font-weight: 400;
              font-size: 17px;
            }
          }
        }
        div.top-newjoin {
          display: flex;
          flex: 1 1 0%;
          -webkit-box-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          align-items: center;
          p.newjoin-ptag {
            color: #000;
            font-weight: 600;
            text-align: center;
            letter-spacing: -0.002em;
            font-size: 18px;
            line-height: 26px;
            display: flex;
            flex: 1 1 0%;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
          }
        }
        div.newjoin-right {
          display: flex;
          min-width: 64px;

          justify-content: flex-end;

          align-items: center;
        }
      }
      div.newjoin-form-start {
        overflow: auto;
        position: relative;
        padding: 20px;
        div.login-Resgister {
          margin: 17px 0px 7px;
          label.title {
            color: #888;
            font-weight: 600;
            text-align: left;
            letter-spacing: 0.0145em;
            font-size: 14px;
            line-height: 20px;
          }
        }
        input.register-input:read-only {
          color: #ccc;

          background-color: #f2f4f7;
          opacity: 1;
        }
        input.register-input {
          width: 100%;
          height: 50px;
          min-height: 50px;
          padding: 0px 12px;
          outline: none;
          background-color: transparent;
          border: 1px solid #e1e2e3;
          color: #333;
          border-radius: 5px;
          font-size: 16px;
          font-weight: 400;
          margin-bottom: 8px;
        }
        p.password-ptag {
          color: #888;
          font-weight: 400;
          text-align: left;
          letter-spacing: 0.0192em;
          font-size: 13px;
          line-height: 18px;
          margin-bottom: 10px;
          margin-top: 0px;
        }
        div.all-agree {
          display: flex;
          flex-direction: row;
          -webkit-box-align: center;
          align-items: center;
          position: relative;
          min-height: 25px;
          width: 100%;
          margin: 28px 0px 10px;
          div.agree-check {
            width: 18px;
            height: 18px;
            font-size: 11px;
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            border-radius: 3px;
            border: 1px solid #ececec;
          }
          input.agree-check-input {
            opacity: 0;
            width: calc(100% - 90px);
            height: 100%;
            position: absolute;
            cursor: pointer;
          }
          div.agree-check-div {
            display: flex;
            flex: 1 1 0%;
            p.agree-check-ptag {
              color: #333;
              font-weight: 600;
              text-align: left;
              letter-spacing: 0.0096em;
              font-size: 15px;
              line-height: 22px;
              margin: 0px 0px 0px 7px;
              word-break: keep-all;
            }
          }
        }
        hr.login-divider {
          border-top: none;
          border-right: none;
          border-left: none;
          border-image: initial;
          width: 100%;
          border-bottom: 1px solid #e1e2e3;
        }
        div.divider-div {
          display: flex;
          flex-direction: row;

          align-items: center;
          position: relative;
          min-height: 25px;
          width: 100%;
          margin: 10px 0px;
          div.agree-check {
            width: 18px;
            height: 18px;
            font-size: 11px;
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            border-radius: 3px;
            border: 1px solid #ececec;
          }
          input.agree-check-input {
            opacity: 0;
            width: calc(100% - 90px);
            height: 100%;
            position: absolute;
            cursor: pointer;
          }
          div.agree-check-div {
            display: flex;
            flex: 1 1 0%;
            p.checkbox-select {
              /* color: #333;
              font-weight: 600;
              text-align: left;
              letter-spacing: 0.0096em;
              font-size: 15px;
              line-height: 22px;
              margin: 0px 0px 0px 7px;
              word-break: keep-all; */
              color: #888;
              font-weight: 500;
              text-align: left;
              letter-spacing: 0.0096em;
              font-size: 15px;
              line-height: 22px;
              margin: 0px 0px 0px 7px;
              word-break: keep-all;
            }
          }
          a.details {
            color: #888;
            font-weight: 600;
            text-align: left;
            letter-spacing: 0.0096em;
            font-size: 15px;
            line-height: 22px;
            cursor: pointer;
            margin: 0px;
          }
        }
        div.login-label-check {
          display: flex;
          margin-left: 28px;
          label.label-check {
            height: 22px;
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            margin-right: 18px;
            cursor: pointer;
            > input[type="checkbox"] {
              display: none;
            }
            .select-span {
              svg {
                color: rgb(136, 136, 136);
                margin-right: 7px;
              }
              .select-svg {
                user-select: none;
                width: 1em;
                height: 1em;
                display: inline-block;
                fill: currentColor;
                -webkit-flex-shrink: 0;
                -ms-flex-negative: 0;
                flex-shrink: 0;
                font-size: inherit;
                path {
                  stroke: #ccc;
                }
              }
            }
            p.check-ptag {
              color: #888;
              font-weight: 400;
              text-align: left;
              letter-spacing: 0.0056em;
              font-size: 16px;
              line-height: 24px;
              margin-left: 0px;
              margin-top: 0px;
              margin-bottom: 0px;
            }
          }
        }
        div.regist-last-button {
          button.last-btn:disabled {
            color: #ccc;
            background-color: #f2f4f7;
            border: none;
            cursor: default;
          }
          button.last-btn {
            width: 100%;
            height: 50px;
            min-height: 50px;
            border-radius: 25px;
            font-size: 16px;
            margin-bottom: 10px;
            cursor: pointer;
            background-color: #36f;
            border: none;
            margin-top: 30px;
            span.btn-span {
              color: #000;
              font-weight: 600;
              text-align: left;
              letter-spacing: 0.0056em;
              font-size: 16px;
              line-height: 24px;
            }
          }
        }
        div {
          div.login-phone-country {
            height: 50px;
            min-height: 50px;
            border-radius: 5px;
            width: 100%;
            border: 1px solid #e1e2e3;
            background-color: #fff;
            margin-bottom: 10px;
            position: relative;
            select.country-select {
              padding-left: 12px;
              width: 100%;
              position: absolute;
              left: 0;
              appearance: none;
              height: 100%;
              border: none;
              background: none;
              z-index: 1;
              font-size: 16px;
              color: #333;
              font-weight: 400;
            }
            div.select-shape {
              position: absolute;
              right: 20px;
              font-size: 10px;
              top: 50%;

              transform: translateY(-50%);
              span.select-span {
                display: flex;
                -webkit-align-items: inherit;
                -webkit-box-align: inherit;
                -ms-flex-align: inherit;
                align-items: inherit;
                -webkit-box-pack: inherit;
                -ms-flex-pack: inherit;
                -webkit-justify-content: inherit;
                justify-content: inherit;
                svg.select-svg {
                  user-select: none;
                  width: 1em;
                  height: 1em;
                  display: inline-block;
                  fill: currentColor;
                  -webkit-flex-shrink: 0;
                  -ms-flex-negative: 0;
                  flex-shrink: 0;
                  font-size: inherit;
                }
              }
            }
          }
          div.phone-auth {
            display: flex;
            flex-direction: row;
            position: relative;
            button.auth-btn {
              height: 50px;
              min-height: 50px;
              font-size: 16px;
              margin-bottom: 10px;
              cursor: pointer;
              background-color: #fff;
              margin-left: 10px;
              padding: 0px 15px;
              width: auto;
              flex: 0 0 auto;
              border-radius: 5px;
              border: 1px solid #e1e2e3;
              span.btn-span {
                color: #ccc;
              }
            }

            button.auth-btn:disabled {
              border: 1px solid #f2f4f7;
              color: #ccc;
              background-color: #f2f4f7;
              border: none;
              cursor: default;
              span.btn-span:disabled {
              }
            }
          }
        }
      }
    }
  }
`;
function LoginRegisterPage() {
  const navigate = useNavigate();
  const goMain = () => {
    navigate("/Main");
  };
  //   if (window.confirm("회원가입을 취소하고 이전 화면으로 되돌아갑니다. 계속하시겠어요?")) {
  //     {goMain}
  //   } else {

  //   }

  //체크박스 시작
  const [service, setService] = useState(false);
  const [marketing, setMarketing] = useState(false);
  //

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [phoneNational, setPhoneNational] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
    const [marketingAgreement, setMarketingAgreement] = useState("");

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("/api/users", {
        //  http://localhost:8085/api/v1/employee/save
        //  http://localhost:3000/api/users
        name: name,
        email: email,
        password: password,
        phoneNational: phoneNational,
        phoneNumber: phoneNumber,
        marketingAgreement: marketingAgreement,
      });
      alert("Employee Registation Successfully");
      navigate("/");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <LoginRegisterStyle>
      <div className="Register-wrap">
        <div className="Register-container">
          <div className="Register-top">
            <div className="top-cancel">
              <button
                type="button"
                className="canel-button"
                onClick={() =>
                  window.confirm(
                    "회원가입을 취소하고 이전 화면으로 되돌아갑니다. 계속하시겠어요?"
                  )
                    ? navigate(-1)
                    : undefined
                }
              >
                <p data-testid="Typography" className="cancel-btn-ptag">
                  취소
                </p>
              </button>
            </div>
            <div className="top-newjoin">
              <p data-testid="Typography" className="newjoin-ptag">
                회원가입
              </p>
            </div>
            <div className="newjoin-right"></div>
          </div>
          <div className="newjoin-form-start">
            <form>
              <div className="login-Resgister">
                <label data-testid="Typography" for="email" className="title">
                  이메일
                </label>
              </div>
              <input
                type="email"
                placeholder="이메일을 입력해주세요."
                name="email"
                data-testid="Input_email"
                className="register-input"
                value={email}
                disabled=""
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <div className="login-Resgister">
                <label
                  data-testid="Typography"
                  for="username"
                  className="title"
                >
                  이름
                </label>
              </div>
              <input
                type="text"
                placeholder="이름을 입력해주세요."
                name="username"
                data-testid="Input_username"
                className="register-input"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <div className="login-Resgister">
                <label data-testid="Typography" for="mobile" className="title">
                  휴대폰 번호
                </label>
              </div>
              <div>
                <div className="login-phone-country">
                  <select className="country-select">
                    <option value="KR">South Korea +82</option>
                    <option value="JP">Japan +81</option>
                    <option value="TW">Taiwan +886</option>
                    <option value="HK">Hong Kong +852</option>
                    <option value="SG">Singapore +65</option>
                    <option value="AF">Afghanistan +93</option>
                    <option value="AL">Albania +355</option>
                    <option value="DZ">Algeria +213</option>
                    <option value="AO">Angola +244</option>
                    <option value="AR">Argentina +54</option>
                    <option value="AM">Armenia +374</option>
                    <option value="AW">Aruba +297</option>
                    <option value="AU">Australia +61</option>
                    <option value="AT">Austria +43</option>
                    <option value="AZ">Azerbaijan +994</option>
                    <option value="BH">Bahrain +973</option>
                    <option value="BD">Bangladesh +880</option>
                    <option value="BY">Belarus +375</option>
                    <option value="BE">Belgium +32</option>
                    <option value="BZ">Belize +501</option>
                    <option value="BJ">Benin +229</option>
                    <option value="BT">Bhutan +975</option>
                    <option value="BO">Bolivia +591</option>
                    <option value="BW">Botswana +267</option>
                    <option value="BR">Brazil +55</option>
                    <option value="BN">Brunei +673</option>
                    <option value="BG">Bulgaria +359</option>
                    <option value="BF">Burkina Faso +226</option>
                    <option value="KH">Cambodia +855</option>
                    <option value="CM">Cameroon +237</option>
                    <option value="CA">Canada +1</option>
                    <option value="CL">Chile +56</option>
                    <option value="CN">China +86</option>
                    <option value="CX">Christmas Island +61</option>
                    <option value="CC">Cocos Islands +61</option>
                    <option value="CO">Colombia +57</option>
                    <option value="KM">Comoros +269</option>
                    <option value="CR">Costa Rica +506</option>
                    <option value="HR">Croatia +385</option>
                    <option value="CU">Cuba +53</option>
                    <option value="CW">Curacao +599</option>
                    <option value="CY">Cyprus +357</option>
                    <option value="CZ">Czech Republic +420</option>
                    <option value="DK">Denmark +45</option>
                    <option value="DJ">Djibouti +253</option>
                    <option value="EC">Ecuador +593</option>
                    <option value="EG">Egypt +20</option>
                    <option value="SV">El Salvador +503</option>
                    <option value="GQ">Equatorial Guinea +240</option>
                    <option value="EE">Estonia +372</option>
                    <option value="ET">Ethiopia +251</option>
                    <option value="FO">Faroe Islands +298</option>
                    <option value="FJ">Fiji +679</option>
                    <option value="FI">Finland +358</option>
                    <option value="FR">France +33</option>
                    <option value="PF">French Polynesia +689</option>
                    <option value="GM">Gambia +220</option>
                    <option value="GE">Georgia +995</option>
                    <option value="DE">Germany +49</option>
                    <option value="GH">Ghana +233</option>
                    <option value="GR">Greece +30</option>
                    <option value="GL">Greenland +299</option>
                    <option value="GT">Guatemala +502</option>
                    <option value="GN">Guinea +224</option>
                    <option value="GY">Guyana +592</option>
                    <option value="HT">Haiti +509</option>
                    <option value="HN">Honduras +504</option>
                    <option value="HU">Hungary +36</option>
                    <option value="IS">Iceland +354</option>
                    <option value="IN">India +91</option>
                    <option value="ID">Indonesia +62</option>
                    <option value="IR">Iran +98</option>
                    <option value="IQ">Iraq +964</option>
                    <option value="IE">Ireland +353</option>
                    <option value="IL">Israel +972</option>
                    <option value="IT">Italy +39</option>
                    <option value="JO">Jordan +962</option>
                    <option value="KZ">Kazakhstan +7</option>
                    <option value="KE">Kenya +254</option>
                    <option value="XK">Kosovo +383</option>
                    <option value="KW">Kuwait +965</option>
                    <option value="KG">Kyrgyzstan +996</option>
                    <option value="LA">Laos +856</option>
                    <option value="LV">Latvia +371</option>
                    <option value="LB">Lebanon +961</option>
                    <option value="LY">Libya +218</option>
                    <option value="LI">Liechtenstein +423</option>
                    <option value="LT">Lithuania +370</option>
                    <option value="LU">Luxembourg +352</option>
                    <option value="MO">Macau +853</option>
                    <option value="MK">Macedonia +389</option>
                    <option value="MG">Madagascar +261</option>
                    <option value="MW">Malawi +265</option>
                    <option value="MY">Malaysia +60</option>
                    <option value="MV">Maldives +960</option>
                    <option value="ML">Mali +223</option>
                    <option value="MT">Malta +356</option>
                    <option value="MH">Marshall Islands +692</option>
                    <option value="MR">Mauritania +222</option>
                    <option value="MU">Mauritius +230</option>
                    <option value="MX">Mexico +52</option>
                    <option value="MD">Moldova +373</option>
                    <option value="MN">Mongolia +976</option>
                    <option value="ME">Montenegro +382</option>
                    <option value="MA">Morocco +212</option>
                    <option value="MZ">Mozambique +258</option>
                    <option value="MM">Myanmar +95</option>
                    <option value="NA">Namibia +264</option>
                    <option value="NP">Nepal +977</option>
                    <option value="NL">Netherlands +31</option>
                    <option value="NC">New Caledonia +687</option>
                    <option value="NZ">New Zealand +64</option>
                    <option value="NI">Nicaragua +505</option>
                    <option value="NE">Niger +227</option>
                    <option value="NG">Nigeria +234</option>
                    <option value="NO">Norway +47</option>
                    <option value="OM">Oman +968</option>
                    <option value="PK">Pakistan +92</option>
                    <option value="PW">Palau +680</option>
                    <option value="PS">Palestine +970</option>
                    <option value="PA">Panama +507</option>
                    <option value="PG">Papua New Guinea +675</option>
                    <option value="PY">Paraguay +595</option>
                    <option value="PE">Peru +51</option>
                    <option value="PH">Philippines +63</option>
                    <option value="PL">Poland +48</option>
                    <option value="PT">Portugal +351</option>
                    <option value="QA">Qatar +974</option>
                    <option value="RE">Reunion +262</option>
                    <option value="RO">Romania +40</option>
                    <option value="RU">Russia +7</option>
                    <option value="RW">Rwanda +250</option>
                    <option value="WS">Samoa +685</option>
                    <option value="SA">Saudi Arabia +966</option>
                    <option value="SN">Senegal +221</option>
                    <option value="RS">Serbia +381</option>
                    <option value="SC">Seychelles +248</option>
                    <option value="SL">Sierra Leone +232</option>
                    <option value="SK">Slovakia +421</option>
                    <option value="SI">Slovenia +386</option>
                    <option value="SB">Solomon Islands +677</option>
                    <option value="SO">Somalia +252</option>
                    <option value="ZA">South Africa +27</option>
                    <option value="SS">South Sudan +211</option>
                    <option value="ES">Spain +34</option>
                    <option value="LK">Sri Lanka +94</option>
                    <option value="SD">Sudan +249</option>
                    <option value="SR">Suriname +597</option>
                    <option value="SE">Sweden +46</option>
                    <option value="CH">Switzerland +41</option>
                    <option value="SY">Syria +963</option>
                    <option value="TJ">Tajikistan +992</option>
                    <option value="TZ">Tanzania +255</option>
                    <option value="TH">Thailand +66</option>
                    <option value="TG">Togo +228</option>
                    <option value="TO">Tonga +676</option>
                    <option value="TN">Tunisia +216</option>
                    <option value="TR">Turkey +90</option>
                    <option value="TM">Turkmenistan +993</option>
                    <option value="UG">Uganda +256</option>
                    <option value="UA">Ukraine +380</option>
                    <option value="AE">United Arab Emirates +971</option>
                    <option value="GB">United Kingdom +44</option>
                    <option value="US">United States +1</option>
                    <option value="UY">Uruguay +598</option>
                    <option value="UZ">Uzbekistan +998</option>
                    <option value="VU">Vanuatu +678</option>
                    <option value="VE">Venezuela +58</option>
                    <option value="VN">Vietnam +84</option>
                    <option value="YE">Yemen +967</option>
                    <option value="ZM">Zambia +260</option>
                    <option value="ZW">Zimbabwe +263</option>
                  </select>
                  <div className="select-shape">
                    <span className="select-span">
                      <svg viewBox="0 0 10 6" className="select-svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5 3.93934L1.28033 0.21967C0.987437 -0.0732233 0.512563 -0.0732233 0.21967 0.21967C-0.0732233 0.512563 -0.0732233 0.987437 0.21967 1.28033L4.46967 5.53033C4.76256 5.82322 5.23744 5.82322 5.53033 5.53033L9.78033 1.28033C10.0732 0.987437 10.0732 0.512563 9.78033 0.21967C9.48744 -0.0732233 9.01256 -0.0732233 8.71967 0.21967L5 3.93934Z"
                          fill=""
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="phone-auth">
                  <input
                    type="text"
                    placeholder="(예시) 01013245768"
                    name="mobile"
                    data-testid="Input_mobile"
                    className="register-input"
                    value={phoneNumber}
                    onChange={(event) => {
                      setPhoneNumber(event.target.value);
                    }}
                  />
                  <button
                    type="button"
                    data-testid="Button"
                    className="auth-btn"
                    disabled=""
                  >
                    <span data-testid="Typography" className="btn-span">
                      인증번호 받기
                    </span>
                  </button>
                </div>
                <div className="phone-auth">
                  <input
                    type="text"
                    placeholder="인증번호를 입력해주세요."
                    name="authCode"
                    data-testid="Input_authCode"
                    readonly=""
                    className="register-input"
                    value=""
                  />
                </div>
              </div>
              <div className="login-Resgister">
                <label
                  data-testid="Typography"
                  for="password"
                  className="title"
                >
                  비밀번호
                </label>
              </div>
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요."
                name="password"
                data-testid="Input_password"
                className="register-input"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <input
                type="password"
                placeholder="비밀번호를 다시 한번 입력해주세요."
                name="passwordConfirm"
                data-testid="Input_passwordConfirm"
                className="register-input"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <p data-testid="Typography" className="password-ptag">
                영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상
                16자 이하로 입력해주세요.
              </p>
              {/* <CheckboxGroup> */}
              <div className="all-agree">
                {/* <div className="agree-check"></div> */}
                {/* <input
                  type="checkbox"
                  name="is_agree_all"
                  data-testid="TermsOption_checkbox_is_agree_all"
                /> */}
                <Checkbox
                  checked={service}
                  onChange={setService}
                  className="agree-check-input"
                ></Checkbox>
                <div className="agree-check-div">
                  <p data-testid="Typography" className="agree-check-ptag">
                    전체 동의
                  </p>
                </div>
              </div>
              <hr className="login-divider" />
              <div className="divider-div">
                {/* <div className="agree-check"></div> */}
                {/* <input
                  type="checkbox"
                  name="is_above_14"
                  data-testid="TermsOption_checkbox_is_above_14"
                  
                /> */}{" "}
                <Checkbox
                  className="agree-check-input"
                  checked={marketing}
                  onChange={setMarketing}
                ></Checkbox>
                <div className="agree-check-div">
                  <p data-testid="Typography" className="checkbox-select">
                    만 14세 이상입니다. (필수)
                  </p>
                </div>
              </div>
              <div className="divider-div">
                {/* <div className="agree-check"></div> */}
                {/* <input
                  type="checkbox"
                  name="is_terms_conditions"
                  data-testid="TermsOption_checkbox_is_terms_conditions"
                  className="agree-check-input"
                /> */}
                <Checkbox
                  className="agree-check-input"
                  checked={marketing}
                  onChange={setMarketing}
                ></Checkbox>
                <div className="agree-check-div">
                  <p data-testid="Typography" className="checkbox-select">
                    원티드 이용약관 동의 (필수)
                  </p>
                </div>
                <a
                  data-testid="Typography"
                  href="https://id.wanted.jobs/terms/ko"
                  target="_blank"
                  className="details"
                >
                  자세히
                </a>
              </div>
              <div className="divider-div">
                {/* <div className="agree-check"></div> */}
                {/* <input
                  type="checkbox"
                  name="is_collect_information"
                  data-testid="TermsOption_checkbox_is_collect_information"
                  className="agree-check-input"
                /> */}
                <Checkbox
                  className="agree-check-input"
                  checked={marketing}
                  onChange={setMarketing}
                ></Checkbox>
                <div className="agree-check-div">
                  <p data-testid="Typography" className="checkbox-select">
                    원티드 개인정보 수집 및 이용 동의 (필수)
                  </p>
                </div>
                <a
                  data-testid="Typography"
                  href="https://id.wanted.jobs/privacy/ko"
                  target="_blank"
                  className="details"
                >
                  자세히
                </a>
              </div>
              <div className="divider-div">
                {/* <div className="agree-check"></div> */}
                {/* <input
                  type="checkbox"
                  name="is_accept_event_all"
                  data-testid="TermsOption_checkbox_is_accept_event_all"
                  className="agree-check-input"
                /> */}
                <Checkbox
                  className="agree-check-input"
                  checked={marketing}
                  onChange={setMarketing}
                ></Checkbox>
                <div className="agree-check-div">
                  <p data-testid="Typography" className="checkbox-select">
                    채용 소식, 커리어 콘텐츠, 이벤트 등 원티드 맞춤 정보 받기
                  </p>
                </div>
              </div>
              {/* </CheckboxGroup> */}
              <div className="login-label-check">
                <label className="label-check"  for="chkBox">
                  <input
                    data-testid="TermsCheck_checkicon_accept_marketing_email"
                    name="accept_marketing_email"
                    type="checkbox"
                    id="chkBox"
                  />
                  <span className="select-span">
                    <svg viewBox="0 0 12 8" className="select-svg">
                      <path 
                        d="M1.5 4L4.5 7L10.5 1"
                        stroke=""
                        fill="none"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <p data-testid="Typography" className="check-ptag">
                    이메일
                  </p>
                </label>
                <label className="label-check" for="chkBox">
                  <input
                    data-testid="TermsCheck_checkicon_accept_marketing_push"
                    name="accept_marketing_push"
                    type="checkbox"
                    id="chkBox"
                  />
                  
                  <span className="select-span">
                    <svg viewBox="0 0 12 8" className="select-svg">
                      <path
                        d="M1.5 4L4.5 7L10.5 1"
                        stroke="var(--theme-palette-colors-gray-300)"
                        fill="none"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <p data-testid="Typography" className="check-ptag">
                    앱 푸시
                  </p>
                </label>
                <label className="label-check" for="chkBox">
                  <input
                    data-testid="TermsCheck_checkicon_accept_marketing_sms"
                    name="accept_marketing_sms"
                    type="checkbox"
                    id="chkBox"
                  />
                  <span className="select-span">
                    <svg viewBox="0 0 12 8" className="select-svg">
                      <path
                        d="M1.5 4L4.5 7L10.5 1"
                        stroke=""
                        fill="none"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <p data-testid="Typography" className="check-ptag">
                    문자 메시지
                  </p>
                </label>
              </div>
              <div className="regist-last-button">
                {/* <div className="css-19u2tlp"></div>
                <div className="css-k88bq3"></div> */}
                <button
                  type="submit"
                  disabled=""
                  data-testid="Button"
                  className="last-btn"
                  onClick={save}
                >
                  <span data-testid="Typography" className="btn-span">
                    가입하기
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LoginRegisterStyle>
  );
}

export default LoginRegisterPage;
