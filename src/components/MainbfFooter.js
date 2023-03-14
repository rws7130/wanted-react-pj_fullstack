import styled from "styled-components";

import { useState, useEffect } from "react";

const BfFooterStyle = styled.section`
  padding: 60px 0 80px;

  > div.bfFooter-wrapper {
    @media (min-width: 1200px) {
      max-width: 1060px;
      width: 87.72%;
    }
    margin: 0 auto;
    div.bfFooter-header {
      justify-content: center;
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      grid-gap: 8px;
      gap: 8px;
      div.bfFooter-title {
        text-align: center;
        div.bfFooter-title-wrapper {
          h2.bfFooter-title-content {
            @media (min-width: 1200px) {
              font-size: 22px;
            }
            font-size: 18px;
            line-height: 1.33;
            font-weight: 700;
            color: #333;
          }
          > * {
            margin-left: 4px;
          }
        }
      }
    }
    > div.btFooter-container-grid {
      border: 1px solid #ececec;
      border-radius: 4px;
      color: #333;
      flex-wrap: wrap;
      align-items: flex-start;
      display: flex;
      justify-content: flex-start;
      div.btFooter-container-ingrid1 {
        padding: 18px 0 0;
        border-right: 1px solid #ececec;
        width: 25%;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        height: 100px;
        a.btFooter-recruit {
          height: 32px;
          font-size: 32px;
          span.btFooter-recruit-svg {
            display: flex;

            align-items: inherit;

            justify-content: center;
            svg.btFooter-recruit-icon {
              user-select: none;
              width: 1em;
              height: 1em;
              display: inline-block;
              fill: currentColor;
              -ms-flex-negative: 0;
              flex-shrink: 0;
              font-size: inherit;
            }
          }
        }
        > button.btFooter-container-btn {
          height: 50px;
          font-size: 16px;
          color: #171717;
          padding: 6px 8px;
          //
          position: relative;

          display: inline-flex;

          align-items: center;

          justify-content: center;
          vertical-align: middle;
          min-width: 64px;
          padding: 0 27px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          /* border-radius: 25px; */
          font-size: 16px;
          font-weight: 700;
          line-height: normal;
          border: none;
          background-color: white;

          cursor: pointer;
          right: -72px;
          > span.btFooter-container-label {
            width: 100%;
            font-size: inherit;
            font-weight: inherit;
            display: inherit;
            -ms-flex-align: inherit;
            align-items: inherit;
            -ms-flex-pack: inherit;
            justify-content: inherit;
            color: inherit;
            > span.btFooter-container-svg {
              margin-right: -1px;
              margin-left: 2px;
              > span.btFooter-container-icon {
                display: flex;
                align-items: inherit;
                justify-content: inherit;
                > svg.btFooter-container-icon2 {
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
            > span {
              margin-top: 0;
            }
          }
        } /* */
      }
      /* 2번째 */
      div.btFooter-container-ingrid2 {
        padding: 18px 0 0;
        border-right: 1px solid #ececec;
        width: 25%;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        height: 100px;
        a.btFooter-recruit {
          height: 32px;
          font-size: 32px;
          right: -110px;
          position: relative;
          /* svg {
            defs {
              path {
              }
            }
            g {
              mask {
              }
              use {
              }
              g {
                path {
                }
              }
            }
          } */
        }
        > button.btFooter-container-btn {
          height: 50px;
          font-size: 16px;
          color: #171717;
          padding: 6px 8px;
          //
          position: relative;

          display: inline-flex;

          align-items: center;

          justify-content: center;
          vertical-align: middle;
          min-width: 64px;
          padding: 0 27px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          /* border-radius: 25px; */
          font-size: 16px;
          font-weight: 700;
          line-height: normal;
          border: none;
          background-color: white;
          top: 30px;
          right: -40px;

          cursor: pointer;
          > span.btFooter-container-label {
            width: 100%;
            font-size: inherit;
            font-weight: inherit;
            display: inherit;
            -ms-flex-align: inherit;
            align-items: inherit;
            -ms-flex-pack: inherit;
            justify-content: inherit;
            color: inherit;
            > span.btFooter-container-svg {
              margin-right: -1px;
              margin-left: 2px;
              > span.btFooter-container-icon {
                display: flex;
                align-items: inherit;
                justify-content: inherit;
                > svg.btFooter-container-icon2 {
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
            > span {
              margin-top: 0;
            }
          }
        } /* */
      }
      /* 3번째 */
      div.btFooter-container-ingrid3 {
        padding: 18px 0 0;
        border-right: 1px solid #ececec;
        width: 25%;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        height: 100px;
        a.btFooter-recruit {
          height: 32px;
          font-size: 32px;
          position: relative;
          right: -110px;
        }
        > button.btFooter-container-btn {
          height: 50px;
          font-size: 16px;
          color: #171717;
          padding: 6px 8px;
          //
          position: relative;

          display: inline-flex;

          align-items: center;

          justify-content: center;
          vertical-align: middle;
          min-width: 64px;
          padding: 0 27px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          /* border-radius: 25px; */
          font-size: 16px;
          font-weight: 700;
          line-height: normal;
          border: none;
          background-color: white;
          top: 30px;
          right: -40px;

          cursor: pointer;
          > span.btFooter-container-label {
            width: 100%;
            font-size: inherit;
            font-weight: inherit;
            display: inherit;
            -ms-flex-align: inherit;
            align-items: inherit;
            -ms-flex-pack: inherit;
            justify-content: inherit;
            color: inherit;
            > span.btFooter-container-svg {
              margin-right: -1px;
              margin-left: 2px;
              > span.btFooter-container-icon {
                display: flex;
                align-items: inherit;
                justify-content: inherit;
                > svg.btFooter-container-icon2 {
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
            > span {
              margin-top: 0;
            }
          }
        } /* */
      }
      /* 4번째 */
      div.btFooter-container-ingrid4 {
        padding: 18px 0 0;
        border-right: 1px solid #ececec;
        width: 25%;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        height: 100px;
        a.btFooter-recruit {
          height: 32px;
          font-size: 32px;
          right: -110px;
          position: relative;
        }
        > button.btFooter-container-btn {
          height: 50px;
          font-size: 16px;
          color: #171717;
          padding: 6px 8px;
          //
          position: relative;

          display: inline-flex;

          align-items: center;

          justify-content: center;
          vertical-align: middle;
          min-width: 64px;
          padding: 0 27px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          /* border-radius: 25px; */
          font-size: 16px;
          font-weight: 700;
          line-height: normal;
          border: none;
          background-color: white;
          top: 30px;
          right: -40px;


          cursor: pointer;
          > span.btFooter-container-label {
            width: 100%;
            font-size: inherit;
            font-weight: inherit;
            display: inherit;
            -ms-flex-align: inherit;
            align-items: inherit;
            -ms-flex-pack: inherit;
            justify-content: inherit;
            color: inherit;
            > span.btFooter-container-svg {
              margin-right: -1px;
              margin-left: 2px;
              > span.btFooter-container-icon {
                display: flex;
                align-items: inherit;
                justify-content: inherit;
                > svg.btFooter-container-icon2 {
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
            > span {
              margin-top: 0;
            }
          }
        } /* */
      }
    }
  }
`;
function MainbfFooter() {
  return (
    <BfFooterStyle>
      <div className="bfFooter-wrapper">
        <div className="bfFooter-header">
          <div className="bfFooter-title">
            <div className="bfFooter-title-wrapper">
              <h2 className="bfFooter-title-content">
                채용 정보를 찾고 계셨나요?
              </h2>
            </div>
          </div>
        </div>
        <div className="btFooter-container-grid">
          <div className="btFooter-container-ingrid1">
            <a className="btFooter-recruit" href="/wdlist">
              <span className="btFooter-recruit-svg">
                <svg className="btFooter-recruit-icon" viewBox="0 0 24 24">
                  <path d="M9.47375 1.89474C13.6597 1.89474 17.0527 5.2878 17.0527 9.47369C17.0527 10.2532 16.9341 11.0197 16.7041 11.7514C16.5471 12.2505 16.0153 12.5279 15.5161 12.371C15.017 12.2141 14.7396 11.6822 14.8966 11.1831C15.069 10.6345 15.158 10.0597 15.158 9.47369C15.158 6.33424 12.6132 3.78948 9.47375 3.78948C6.33428 3.78948 3.78952 6.33424 3.78952 9.47369C3.78952 12.6125 6.33466 15.1579 9.47375 15.1579C11.0057 15.1579 12.4626 14.5505 13.514 13.5044C13.8507 13.1694 14.3761 13.1397 14.7463 13.4147L14.8524 13.5064L21.8282 20.4883C22.198 20.8584 22.1977 21.4583 21.8276 21.8281C21.4911 22.1643 20.9648 22.1946 20.594 21.9193L20.4878 21.8275L14.1361 15.4699L14.0594 15.5312C12.8519 16.4355 11.3781 16.9722 9.8318 17.0443L9.47375 17.0526C5.28818 17.0526 1.89478 13.6589 1.89478 9.47369C1.89478 5.2878 5.28785 1.89474 9.47375 1.89474Z"></path>
                </svg>
              </span>
            </a>
            <button className="btFooter-container-btn">
              <span className="btFooter-container-label">
                채용공고
                <span className="btFooter-container-svg">
                  <span className="btFooter-container-icon">
                    <svg
                      className="btFooter-container-icon2"
                      viewBox="0 0 18 18"
                    >
                      <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                    </svg>
                  </span>
                </span>
              </span>
            </button>
          </div>
          <div className="btFooter-container-ingrid2">
            <a
              className="btFooter-recruit"
              data-attribute-id="home__recruit__click"
              data-kind="profile"
              href="/profile"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                xmlns="https://www.w3.org/2000/svg"
              >
                <defs>
                  <path
                    d="M16.46 12.565c-.631.802-1.025 1.667-1.039 2.59-.02 1.45.793 2.538 2.286 3.154l.116.038c3.487.898 5.788 2.958 5.788 5.03l.014 1.226c0 .026-.194.188-.35.189H4.662c-.136 0-.274-.122-.274-.178l-.014-1.248c0-1.997 2.086-3.93 5.412-4.868a4.468 4.468 0 0 0 1.275-.538c.775-.474 1.316-1.135 1.448-2.014a.875.875 0 0 0-1.731-.259c-.044.292-.256.552-.629.779a2.898 2.898 0 0 1-.795.337c-4.04 1.137-6.73 3.632-6.73 6.573l.014 1.248c0 1.062.965 1.918 2.024 1.918h18.613c1.061-.003 2.099-.871 2.099-1.949l-.014-1.227c0-3.003-2.9-5.612-7.039-6.697-.825-.354-1.16-.816-1.15-1.49.006-.473.248-1.003.663-1.53.272-.346.545-.606.71-.736l.087-.08c1.233-1.29 2.03-3 2.03-4.666 0-3.648-3.053-6.709-6.692-6.709-3.639 0-6.692 3.061-6.692 6.709 0 1.57.443 2.914 1.357 4.048a.875.875 0 1 0 1.363-1.097c-.655-.813-.97-1.768-.97-2.951 0-2.682 2.27-4.959 4.942-4.959s4.941 2.276 4.941 4.959c0 1.162-.587 2.437-1.506 3.417-.258.211-.6.545-.944.981z"
                    id="IconProfileThick-a"
                  ></path>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <mask id="IconProfileThick-b" fill="#fff">
                    <use xlinkHref="#IconProfileThick-a"></use>
                  </mask>
                  <use
                    fill="#333"
                    fillRule="nonzero"
                    xlinkHref="#IconProfileThick-a"
                  ></use>
                  <g mask="url(#IconProfileThick-b)" fill="#333">
                    <path d="M0 0h28v28H0z"></path>
                  </g>
                </g>
              </svg>
            </a>
            <button
              className="btFooter-container-btn"
              data-attribute-id="home__recruit__click"
              data-kind="profile"
            >
              <span className="btFooter-container-label">
                내 프로필
                <span className="btFooter-container-svg">
                  <span className="btFooter-container-icon">
                    <svg
                      className="btFooter-container-icon2"
                      viewBox="0 0 18 18"
                    >
                      <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                    </svg>
                  </span>
                </span>
              </span>
            </button>
          </div>
          <div className="btFooter-container-ingrid3">
            <a
              className="btFooter-recruit"
              data-attribute-id="home__recruit__click"
              data-kind="matchup"
              href="/matchup/intro"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 28 28"
                xmlns="https://www.w3.org/2000/svg"
              >
                <defs>
                  <path
                    d="M10.208 25.083a.875.875 0 0 1-.875-.875v-6.125h-1.75v6.125a.875.875 0 0 1-.875.875H2.042a.875.875 0 0 1-.875-.875V4.375c0-.483.391-.875.875-.875h12.833c.483 0 .875.392.875.875v3.791h9.625c.446 0 .814.334.868.766l.007.11v10.5a.875.875 0 0 1-1.75 0V9.917h-8.75v13.416h9.625a.875.875 0 0 1 0 1.75H10.208zM14 5.25H2.917v18.083h2.916v-6.125c0-.483.392-.875.875-.875h3.5c.484 0 .875.392.875.875v6.125H14V5.25zm4.375 10.792c.644 0 1.167.522 1.167 1.166v1.167a1.167 1.167 0 0 1-2.334 0v-1.167c0-.644.523-1.166 1.167-1.166zm0-4.667c.644 0 1.167.522 1.167 1.167v1.166a1.167 1.167 0 0 1-2.334 0v-1.166c0-.645.523-1.167 1.167-1.167zm-11.5 0a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1h-.333a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h.333zm0-4.667a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1h-.333a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h.333z"
                    id="building-icon-a"
                  ></path>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <mask id="building-icon-b" fill="#fff">
                    <use xlinkHref="#building-icon-a"></use>
                  </mask>
                  <use
                    fill="#333"
                    fillRule="nonzero"
                    xlinkHref="#building-icon-a"
                  ></use>
                  <g mask="url(#building-icon-b)" fill="#333">
                    <path d="M0 0h28v28H0z"></path>
                  </g>
                </g>
              </svg>
            </a>
            <button className="btFooter-container-btn">
              <span className="btFooter-container-label">
                매치업
                <span className="btFooter-container-svg">
                  <span className="btFooter-container-icon">
                    <svg
                      className="btFooter-container-icon2"
                      viewBox="0 0 18 18"
                    >
                      <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                    </svg>
                  </span>
                </span>
              </span>
            </button>
          </div>
          <div className="btFooter-container-ingrid4">
            <a
              className="btFooter-recruit"
              data-attribute-id="home__recruit__click"
              data-kind="salary"
              href="/salary"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  d="M4.66699 10.51C5.55699 10.51 6.30999 11.11 6.54099 11.927H13.875C14.168 11.927 14.406 12.165 14.406 12.458C14.406 12.752 14.168 12.99 13.875 12.99H6.54099C6.30999 13.807 5.55799 14.406 4.66699 14.406C3.77499 14.406 3.02299 13.806 2.79199 12.989H1.12499C0.831994 12.989 0.593994 12.752 0.593994 12.459C0.593994 12.165 0.831994 11.927 1.12499 11.927H2.79199C3.02399 11.109 3.77599 10.51 4.66699 10.51V10.51ZM4.66699 11.573C4.17799 11.573 3.78099 11.97 3.78099 12.458C3.78099 12.947 4.17799 13.344 4.66699 13.344C5.15499 13.344 5.55199 12.947 5.55199 12.458C5.55199 11.97 5.15499 11.573 4.66699 11.573ZM10.333 5.55299C11.225 5.55299 11.977 6.15199 12.208 6.96899H13.875C14.168 6.96899 14.406 7.20699 14.406 7.49999C14.406 7.79299 14.168 8.03099 13.875 8.03099H12.208C11.976 8.84899 11.224 9.44799 10.333 9.44799C9.44299 9.44799 8.68999 8.84799 8.45899 8.03199H1.12499C0.831994 8.03199 0.593994 7.79299 0.593994 7.49999C0.593994 7.20699 0.831994 6.96899 1.12499 6.96899H8.45899C8.68999 6.15199 9.44199 5.55199 10.333 5.55199V5.55299ZM10.333 6.61499C9.84499 6.61499 9.44799 7.01099 9.44799 7.49999C9.44799 7.98899 9.84499 8.38499 10.333 8.38499C10.822 8.38499 11.219 7.98899 11.219 7.49999C11.219 7.01099 10.822 6.61499 10.333 6.61499V6.61499ZM4.66699 0.593994C5.55699 0.593994 6.30999 1.19299 6.54099 2.00999H13.875C14.168 2.00999 14.406 2.24799 14.406 2.54199C14.406 2.83499 14.168 3.07199 13.875 3.07199L6.54099 3.07399C6.30899 3.89099 5.55799 4.48999 4.66699 4.48999C3.77599 4.48999 3.02399 3.88999 2.79199 3.07399L1.12499 3.07299C0.831994 3.07299 0.593994 2.83499 0.593994 2.54199C0.593994 2.24799 0.831994 2.00999 1.12499 2.00999H2.79199C3.02399 1.19299 3.77599 0.593994 4.66699 0.593994V0.593994ZM4.66699 1.65599C4.17799 1.65599 3.78099 2.05299 3.78099 2.54199C3.78099 3.02999 4.17799 3.42699 4.66699 3.42699C5.15499 3.42699 5.55199 3.02999 5.55199 2.54199C5.55199 2.05299 5.15499 1.65599 4.66699 1.65599V1.65599Z"
                  fill="#333"
                ></path>
              </svg>
            </a>
            <button
              className="btFooter-container-btn"
              data-attribute-id="home__recruit__click"
              data-kind="salary"
            >
              <span className="btFooter-container-label">
                직군별 연봉
                <span className="btFooter-container-svg">
                  <span className="btFooter-container-icon">
                    <svg
                      className="btFooter-container-icon2"
                      viewBox="0 0 18 18"
                    >
                      <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                    </svg>
                  </span>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </BfFooterStyle>
  );
}

export default MainbfFooter;
