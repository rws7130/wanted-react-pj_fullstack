import styled from "styled-components";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";

const NavBar = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #fff;
  -webkit-box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  z-index: 800;

  > .MainBar {
    width: 100%;
    position: fixed;
    top: 0;
    background-color: #fff;
    -webkit-box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
    box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
    z-index: 800;

    > nav.MainBarNav {
      display: flex;
      -ms-flex-align: center;
      align-items: center;
      -ms-flex-pack: justify;
      justify-content: space-between;
      flex-wrap: wrap;
      flex-direction: row;
      > .Navtop {
        @media (min-width: 768px) and (max-width: 991px) {
          padding: 15px 0;
        }
        @media (min-width: 768px) and (max-width: 991px) {
          height: 60px;
          width: 100%;
          /* padding: 15px 20px; */
        }
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: justify;
        justify-content: space-between;

        > .Navtoplogo {
          display: flex;
          > .MainBarhamberger {
            margin-top: -2px;
            margin-right: 15px;
          }
          > button {
            margin: 0;
            padding: 0;
            border: 0;
            background: none;
            cursor: pointer;
            font-family: inherit;
            > img {
              width: 17px;
              height: 14px;
              object-fit: contain;
              vertical-align: middle;
            }
          }
        }
      }
    }
  }
`;

function Header() {
  return (
    <NavBar role="presentation">
      <div className="MainBar" role="presentation">
        <nav className="MainBarNav">
          <div className="Navtop">
            <div className="Navtoplogo">
              <button
                type="button"
                aria-label="job category menu button"
                data-attribute-id="gnb"
                data-gnb-kind="jobCategoryMenu"
                className="MainBarhamberger"
              >
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&amp;w=17&amp;q=75"
                  alt="hamberger menu"
                  height="14"
                />
              </button>
              <a
                href="/"
                className="MainBar_MainBar_logo__bGymr"
                aria-label="home link"
                data-attribute-id="gnb"
                data-gnb-kind="home"
              >
                <svg width="74" height="21" viewBox="0 0 140 32">
                  <path
                    fill="currentColor"
                    d="M89.8 2.2l-5.6 2.4v4.8h-3.8v5.2h3.8v10.2c0 4.2 2.6 7 6.6 7 1.6 0 2.6-.4 3.2-.6V26c-.2 0-1 .2-1.8.2-1.6 0-2.4-.6-2.4-2.6v-8.8H94V9.6h-4.2V2.2zM28.6 9.6l-4 14-4.6-14h-5.6l-4.6 14L6 9.6H0l6.8 21.8h6l4.4-14.6 4.6 14.6h6l6.8-21.8zM134.4 2.2v8.6c-1.4-1-3-1.6-4.8-1.8h-.4-1.6c-5 .4-8.2 4.2-9.2 9-.2.8-.2 1.4-.2 2.2V22c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.4V0l-5.4 2.2zm-5.2 24.4c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM116.2 18c-.8-5.2-4.6-9-10-9s-9.2 3.8-10 9c-.2.8-.2 1.6-.2 2.6v1.6c.6 5.6 4.4 10 10.2 10 4.6 0 8-2.8 9.4-6.8l-5-1.2c-.8 1.8-2.4 3.2-4.4 3.2-2.8 0-4.6-2.2-5-5.2h15.2v-1.6c0-1 0-1.8-.2-2.6zm-14.8 0c.8-2.2 2.4-3.6 4.8-3.6s4 1.6 4.8 3.6h-9.6zM50.6 11c-1.4-1-3.2-1.8-5.2-1.8H44.8h-.6c-5.2.4-8.6 4-9.4 9-.2.8-.2 1.4-.2 2.2v1.8c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.6V9.6h-5.6V11zm-5.2 15.6c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM71.2 9c-2.2 0-4.6 1-6 3.2V9.6h-5.6v21.8h5.6V18.8c0-2.6 1.4-4.6 4-4.6 2.8 0 3.8 2 3.8 4.4v12.8h5.6V17.6c.2-4.8-2.2-8.6-7.4-8.6z"
                  ></path>
                </svg>
              </a>
            </div>
            <button
              id="gnbSignupBtn"
              className="xsSignUpButton"
              type="button"
              data-attribute-id="gnb"
              data-gnb-kind="signupLogin"
            >
              회원가입하기
            </button>
          </div>
          <ul className="Menu_classNameName__gGcYQ">
            <li
              className="xsHomeButton xsOnly selectedNav"
              data-attribute-id="gnb"
              data-gnb-kind="home"
            >
              <a href="/" className="" aria-label="">
                홈
              </a>
            </li>
            <li className="" data-attribute-id="gnb" data-gnb-kind="jobs">
              <a href="/jobsfeed" className="" aria-label="">
                채용
              </a>
            </li>
            <li className="" data-attribute-id="gnb" data-gnb-kind="event">
              <a href="/events" className="" aria-label="">
                이벤트
              </a>
            </li>
            <li
              className="smMoreVisible"
              data-attribute-id="gnb"
              data-gnb-kind="salary"
            >
              <a href="/salary" className="" aria-label="">
                직군별 연봉
              </a>
            </li>
            <li
              className="smMoreVisible"
              data-attribute-id="gnb"
              data-gnb-kind="resume"
            >
              <a href="/cv/list" className="" aria-label="">
                이력서
              </a>
            </li>
            <li
              className="smMoreVisible"
              data-attribute-id="gnb"
              data-gnb-kind="community"
            >
              <a href="/community" className="" aria-label="">
                커뮤니티
                <em>
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    width="18"
                    height="11"
                    viewBox="0 0 18 11"
                  >
                    <g
                      fill="none"
                      fill-rule="evenodd"
                      // font-family="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                      // font-size="9"
                      // font-weight="500"
                    >
                      <g fill="#36F">
                        <g>
                          <g>
                            <g>
                              <g>
                                <g>
                                  <g>
                                    <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                                      <tspan x="0" y="8">
                                        New
                                      </tspan>
                                    </text>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </em>
              </a>
            </li>
            <li
              className="smMoreVisible"
              data-attribute-id="gnb"
              data-gnb-kind="freelancer"
            >
              <a
                href="https://www.wanted.co.kr/gigs/experts"
                className=""
                aria-label=""
                target="_blank"
                rel="noopener noreferrer"
              >
                프리랜서
              </a>
            </li>
            <li
              className="smMoreVisible"
              data-attribute-id="gnb"
              data-gnb-kind="aiScore"
            >
              <a href="/aiscore/resume" className="" aria-label="">
                AI 합격예측
                <span>
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    width="18"
                    height="11"
                    viewBox="0 0 18 11"
                  >
                    <g
                      fill="none"
                      fill-rule="evenodd"
                      // font-family="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                      // font-size="9"
                      // font-weight="500"
                    >
                      <g fill="#36F">
                        <g>
                          <g>
                            <g>
                              <g>
                                <g>
                                  <g>
                                    <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                                      <tspan x="0" y="8">
                                        Beta
                                      </tspan>
                                    </text>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              </a>
            </li>
          </ul>
          <aside className="Aside_classNameName___e5Bi">
            <ul>
              <li>
                <button
                  className="searchButton"
                  type="button"
                  data-attribute-id="gnb"
                  data-gnb-kind="search"
                >
                  {/* <svg
                    xmlns="https://www.w3.org/2000/svg"
                    xmlns:xlink="https://www.w3.org/1999/xlink"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  > */}
                  {/* <defs>
                      <path
                        id="qt2dnsql4a"
                        d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
                      ></path>
                    </defs>
                    <g fill="none" fill-rule="evenodd">
                      <use
                        fill="#333"
                        fill-rule="nonzero"
                        stroke="#333"
                        stroke-width=".3"
                        xlink:href="#qt2dnsql4a"
                      ></use>
                    </g> */}
                  {/* </svg> */}
                </button>
              </li>
              <li>
                <button
                  className="signUpButton"
                  type="button"
                  data-attribute-id="gnb"
                  data-gnb-kind="signupLogin"
                >
                  회원가입/로그인
                </button>
              </li>
              <li
                className="mdMoreVisible leftDivision"
                data-attribute-id="gnb"
                data-gnb-kind="forEmployers"
              >
                <a className="dashboardButton" href="/dashboard">
                  기업 서비스
                </a>
              </li>
              <li className="Aside_visibleMenu__Dki9n">
                <button
                  className="menuButton"
                  type="button"
                  data-attribute-id="gnb"
                  data-gnb-kind="photo"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 10a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 10zm7 0a2 2 0 1 1-.001 4.001A2 2 0 0 1 19 10zM5 10a2 2 0 1 1-.001 4.001A2 2 0 0 1 5 10z"
                    ></path>
                  </svg>
                </button>
              </li>
            </ul>
            <div className="Aside_visibleMenu__Dki9n"></div>
          </aside>
        </nav>
      </div>
    </NavBar>
  );
}
export default Header;
