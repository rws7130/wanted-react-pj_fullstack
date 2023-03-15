import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import { useState, useEffect } from "react";

const LoginInputPasswordStyle = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  justify-content: center;

  align-items: center;
  background-color: #f7f7f7;
  > div.input-wrap {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;

    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: flex-end;
    div.password-start {
      border-radius: 5px;
      width: 100%;
      max-height: calc(100vh - 100px);
      overflow: auto;

      display: flex;

      flex-direction: column;
      background-color: #fff;
      border: 1px solid #e1e2e3;
      div.password-header {
        padding: 0px 20px;
        height: 64px;
        flex: 0 0 auto;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        div.left-header {
          min-width: 64px;
          display: flex;

          justify-content: flex-start;

          align-items: center;
          font-weight: 400;
          font-size: 17px;
          button.left-btn {
            border: none;
            background: none;
            cursor: pointer;
            padding: 8px;
            margin: -8px;
            fill: #000;
            .btn-span {
              svg {
                user-select: none;
                width: 1em;
                height: 1em;
                display: inline-block;
                fill: currentcolor;
                flex-shrink: 0;
                font-size: 20px;
              }
            }
          }
        }
        div.header-center {
          display: flex;
          flex: 1 1 0%;

          justify-content: center;

          align-items: center;
          p.center-ptag {
            color: #000;
            font-weight: 600;
            text-align: center;
            letter-spacing: -0.002em;
            font-size: 18px;
            line-height: 26px;
            display: flex;
            flex: 1 1 0%;

            justify-content: center;

            align-items: center;
          }
        }
        div.header-right {
          display: flex;
          min-width: 64px;

          justify-content: flex-end;

          align-items: center;
        }
      }
      div.passwd-form-div {
        overflow: auto;
        position: relative;
        padding: 20px;
        div.inner-form {
          margin: 17px 0px 7px;
          label.form-label {
            color: #888;
            font-weight: 600;
            text-align: left;
            letter-spacing: 0.0145em;
            font-size: 14px;
            line-height: 20px;
          }
        }
        input.input-passwd {
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
        button.next-btn:disabled {
          color: #ccc;
          background-color: #f2f4f7;
          border: none;
          cursor: default;
        }
        button.next-btn {
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
          span.inner-next-text:disabled {
            color: #ccc;
          }
          span.inner-next-text {
            color: #000;
            font-weight: 600;
            text-align: left;
            letter-spacing: 0.0056em;
            font-size: 16px;
            line-height: 24px;
          }
        }
        button.passwd-clearchange-btn {
          width: 100%;
          height: 50px;
          min-height: 50px;
          border-radius: 25px;
          font-size: 16px;
          margin-bottom: 10px;
          cursor: pointer;
          background-color: #fff;
          border: none;
          margin-top: 10px;
          span.clearchange-span {
            color: #36f;
            font-weight: 600;
            text-align: left;
            letter-spacing: 0.0145em;
            font-size: 14px;
            line-height: 20px;
          }
        }
        button.next-btn span {
          color: #fff;
        }
      }
    }
  }
`;

function LoginInputPage() {
  return (
    <LoginInputPasswordStyle>
      <div className="input-wrap">
        <div className="password-start">
          <div className="password-header">
            <div className="left-header">
              <button type="button" className="left-btn">
                <span className="btn-span">
                  <svg viewBox="0 0 18 18" className="passwd-svg">
                    <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                  </svg>
                </span>
              </button>
            </div>
            <div className="header-center">
              <p data-testid="Typography" className="center-ptag">
                이메일로 로그인
              </p>
            </div>
            <div className="header-right"></div>
          </div>
          <div className="passwd-form-div">
            <form>
              <div className="inner-form">
                <label
                  data-testid="Typography"
                  for="email"
                  className="form-label"
                >
                  비밀번호
                </label>
              </div>
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요."
                name="password"
                data-testid="Input_password"
                className="input-passwd"
                value=""
              />
              <button
                type="submit"
                data-testid="Button"
                data-attribute-id="signup__email__login"
                className="next-btn"
                disabled=""
              >
                <span data-testid="Typography" className="inner-next-text">
                  다음
                </span>
              </button>
              <button
                type="button"
                data-testid="Button"
                className="passwd-clearchange-btn"
              >
                <span data-testid="Typography" className="clearchange-span">
                  비밀번호 초기화/변경
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </LoginInputPasswordStyle>
  );
}

export default LoginInputPage;
