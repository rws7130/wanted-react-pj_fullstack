import styled from "styled-components";
// import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import styles from "./MainSection.module.css";
import "./slick.css";
import "./slick-theme.css";
import Slider from "react-slick";
import { Mainslider } from "./DummyData";

const SectionStyle = styled.section`
  position: relative;
  scroll-margin-top: 4px;
  padding: 60px 0;
  height: 1318.64px;

  > .section-wrapper {
    @media (min-width: 1200px) {
      max-width: 1060px;
      width: 87.72%;
    }
    margin: 0 auto;
    > div.title {
      text-align: center;
      > div.title-wrapper {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        > h2.title-name {
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
          line-height: normal;
        }
        button {
          margin-top: 3px;
          border: none;
          background: white;
        }
      }
    }
    div.career-Content-List {
      position: relative;
      div.interest-Tag-Slide {
        @media (min-width: 1200px) {
          margin: 30px 0;
        }
        width: 100%;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: row;
        flex-direction: row;
        position: relative;
        margin: 20px 0;
        -ms-flex: 1 1;
        flex: 1 1;
        grid-gap: 8px;
        gap: 8px;
        div.scroll-Snap {
          max-width: calc(100% - 40px - 8px);
          position: relative;
          display: -ms-flexbox;
          display: flex;
          div.scroll-Snap-Hide {
            grid-gap: 8px;
            gap: 8px;
            display: -ms-flexbox;
            display: flex;
            padding-bottom: 0.5px;
            -ms-flex-direction: row;
            flex-direction: row;
            -ms-flex-align: center;
            align-items: center;
            /* overflow-x: scroll;
            overflow-y: hidden; */
            scroll-snap-type: x mandatory;
            overscroll-behavior: contain;
            /* .slick-slider.slick-initialized { */
            button.scroll-Snap-Button {
              white-space: nowrap;
              color: #36f !important;
              border-color: #36f !important;
              display: -ms-flexbox !important;
              display: flex !important;
              padding: 9px 22px !important;
              font-weight: 600 !important;
              font-size: 15px !important;
              line-height: 146.7% !important;
              -ms-flex-negative: 0;
              flex-shrink: 0;
              color: #8a8a8a !important;
              border-color: #e1e2e4 !important;
              outline: none;
              scroll-snap-align: start;
              height: 40px !important;
              position: relative !important;
              color: #36f;
              background-color: #fff;
              border: 1px solid #36f;
              position: relative;
              display: -ms-inline-flexbox;
              display: inline-flex;
              -ms-flex-align: center;
              /* align-items: center; */
              -ms-flex-pack: center;
              justify-content: center;
              vertical-align: middle;
              min-width: 64px;
              padding: 0 27px;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              border-radius: 25px;
              font-size: 16px;
              font-weight: 700;
              line-height: normal;
              /* border: none; */
              background-color: none;
              cursor: pointer;

              span.creator-Banner-close2 {
                cursor: pointer;
                svg.creator-Banner-svg {
                  -webkit-user-select: none;
                  -moz-user-select: none;
                  -ms-user-select: none;
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
          }
        }
        .InterestTagSlide {
          display: flex;

          justify-content: center;

          align-items: center;
          min-width: 34px;
          min-height: 34px;
          border: 1px solid #e1e2e4;

          box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
          border-radius: 4px;
          color: #8a8a8a;
          background-color: #fff;
          outline: none;
          width: 40px;
          height: 40.5px;
        }
      }
      > aside.creator-Banner-Aside {
        position: absolute;
        background-color: #fff;
        border: 1px solid #e1e2e4;
        border-radius: 4px;
        top: 0;
        right: -170px;
        width: 150px;
        padding: 14px 14px 10px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        button.creator-Banner-close {
          position: absolute;
          right: 14px;
          top: 14px;
          color: #c4c4c4;
          font-size: 20px;
          span {
            cursor: pointer;
          }
          span.creator-Banner-close2 {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: inherit;
            align-items: inherit;
            -ms-flex-pack: inherit;
            justify-content: inherit;
          }
        }
        img.creator-Banner-img {
          width: 62px;
          vertical-align: middle;
        }
        div.creator-Banner-title {
          margin-top: 9px;
          font-weight: 600;
          font-size: 14px;
          line-height: 142.9%;
          text-align: center;
          letter-spacing: 0.0145em;
          color: #171717;
          width: 90%;
          word-break: keep-all;
        }
        hr.creator-Banner-divider {
          width: 110px;
          margin: 10px 0;
          height: 1px;
          /* margin: 0; */
          border: none;
          -ms-flex-negative: 0;
          flex-shrink: 0;
          background-color: #ececec;
        }
        a.creator-Banner-root {
          font-weight: 600;
          font-size: 12px;
          line-height: 133.3%;
          letter-spacing: 0.031em;
          padding: 0;
          width: 100%;
          height: 30px;
          color: #36f;
          /*  */
          position: relative;
          display: -ms-inline-flexbox;
          display: inline-flex;
          -ms-flex-align: center;
          align-items: center;
          -ms-flex-pack: center;
          justify-content: center;
          vertical-align: middle;
          min-width: 64px;
          padding: 0 27px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          border-radius: 25px;
          font-size: 16px;
          font-weight: 700;
          line-height: normal;
          border: none;
          background-color: none;
          cursor: pointer;
          span.creator-Banner-label {
            width: 100%;
            font-size: inherit;
            font-weight: inherit;
            display: inherit;
            -ms-flex-align: inherit;
            align-items: inherit;
            -ms-flex-pack: inherit;
            justify-content: inherit;
            color: inherit;
            span.creator-Banner-endicon {
              margin-top: -2px;
              margin-right: -1px;
              margin-left: 2px;
              span.creator-Banner-endroot {
                display: -ms-flexbox;
                display: flex;
                -ms-flex-align: inherit;
                align-items: inherit;
                -ms-flex-pack: inherit;
                justify-content: inherit;
                span.creator-Banner-endsvg {
                  -webkit-user-select: none;
                  -moz-user-select: none;
                  -ms-user-select: none;
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
          }
        }
      }
    }
  }
  .Career-insight-card {
    width: 100% !important;
    margin-bottom: 50px;
    @media (min-width: 1200px) {
      max-width: 1060px;
      width: 87.72%;
    }
    display: flex;

    flex-wrap: wrap;
    list-style-type: none;
    grid-gap: 32px 20px;
    gap: 32px 20px;
    width: 1060px;
    margin: 0 auto;
    li.insight-card-li {
      position: relative;
      transition: all 0.1s ease-out;
      will-change: transform;
      width: calc(25% - 15px);
      * {
        transition: opacity, color 0.1s ease-out;
      }
      div.Thumbnail {
        position: relative;
        height: auto;
        padding-left: 0;
        width: 100%;
        padding-bottom: 70%;
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.06);
        overflow: hidden;
      }
    }
  }
`;

let slidesToShow = 9;
const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          {/* <div style={{ color: "blue", fontSize: "30px" }} /> */}
        </div>
      )}
    </>
  );
};

const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;
  console.log(props);
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={className} onClick={onClick}>
          {/* <div style={{ color: "blue", fontSize: "30px" }} /> */}
        </div>
      )}
    </>
  );
};

export function MainSection() {
  const settings = {
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    dots: false,
    infinite: false,
    speed: 270,
    // slidesToShow: 5,
    slidesToShow: slidesToShow,
    slidesToScroll: 5,
    arrows: true,
    // centerMode:true,
    // centerPadding: "0px",
  };
  return (
    <SectionStyle>
      <div className="section-wrapper">
        <div className="title">
          <div className="title-wrapper">
            <h2 className="title-name">나에게 필요한 커리어 인사이트</h2>
            <button type="button">
              <svg width="24" height="24" viewBox="0 0 17 17">
                <defs>
                  <filter id="bfoh3u0w3a">
                    <feColorMatrix
                      in="SourceGraphic"
                      values="0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 1.000000 0"
                    ></feColorMatrix>
                  </filter>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g>
                    <g>
                      <g transform="translate(-1080 -374) translate(1080 374)">
                        <g>
                          <path
                            stroke="#999"
                            // stroke-linecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.2"
                            d="M9.421 13.334c-.736.277-1.535.43-2.368.43-3.706 0-6.71-3.005-6.71-6.711 0-3.707 3.004-6.71 6.71-6.71 1.853 0 3.53.75 4.745 1.965 1.214 1.214 1.965 2.892 1.965 4.745 0 1.853-.75 3.53-1.965 4.745"
                            transform="translate(1 1)"
                          ></path>
                          <path
                            fill="#999"
                            d="M6.382 10.408c0-.371.3-.671.67-.671.371 0 .672.3.672.67 0 .372-.3.672-.671.672-.37 0-.671-.3-.671-.671"
                            transform="translate(1 1) rotate(-180 7.053 10.408)"
                          ></path>
                          <path
                            stroke="#999"
                            // stroke-linecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.2"
                            d="M5.04 5.655c0-1.08.901-1.958 2.013-1.958 1.11 0 2.013.877 2.013 1.958 0 1.08-1.007 1.957-2.013 1.957v.783"
                            transform="translate(1 1)"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className="career-Content-List">
          {/* <div className="top-banner"> */}
          <div className="interest-Tag-Slide">
            <div className="scroll-Snap">
              <div className="scroll-Snap-Hide">
                <Slider {...settings}>
                  <button className="scroll-Snap-Button">
                    <span className="Button_Button__label__1Kk0v">
                      취업/이직
                    </span>
                  </button>
                  <button className="scroll-Snap-Button">
                    <span className="Button_Button__label__1Kk0v">
                      라이프스타일
                    </span>
                  </button>
                  <button className="scroll-Snap-Button">
                    <span className="Button_Button__label__1Kk0v">
                      커리어고민
                    </span>
                  </button>
                  <button className="scroll-Snap-Button">
                    <span className="Button_Button__label__1Kk0v">
                      조직문화
                    </span>
                  </button>
                  <button className="scroll-Snap-Button">
                    <span className="Button_Button__label__1Kk0v">IT/기술</span>
                  </button>
                  <button className="scroll-Snap-Button">
                    <span className="Button_Button__label__1Kk0v">
                      인간관계
                    </span>
                  </button>
                  <button className="scroll-Snap-Button">
                    <span className="Button_Button__label__1Kk0v">리더십</span>
                  </button>
                  <button className="scroll-Snap-Button">
                    <span className="Button_Button__label__1Kk0v">
                      회사생활
                    </span>
                  </button>
                  <button className="scroll-Snap-Button">
                    <span className="Button_Button__label__1Kk0v">MD</span>
                  </button>
                  <button className="scroll-Snap-Button">
                    <span className="Button_Button__label__1Kk0v">
                      콘텐츠 제작
                    </span>
                  </button>
                  <button className="scroll-Snap-Button">
                    <span className="Button_Button__label__1Kk0v">노무</span>
                  </button>
                  <button className="scroll-Snap-Button">
                    <span className="Button_Button__label__1Kk0v">UX/UI</span>
                  </button>
                  <button className="scroll-Snap-Button">
                    <span className="Button_Button__label__1Kk0v">
                      서비스기획
                    </span>
                  </button>
                  <button className="scroll-Snap-Button">
                    <span className="Button_Button__label__1Kk0v">HR</span>
                  </button>
                  <button className="scroll-Snap-Button">
                    <span className="Button_Button__label__1Kk0v">마케팅</span>
                  </button>
                  <button className="scroll-Snap-Button">
                    <span className="Button_Button__label__1Kk0v">브랜딩</span>
                  </button>
                  <button className="scroll-Snap-Button">
                    <span className="Button_Button__label__1Kk0v">데이터</span>
                  </button>
                  <button className="scroll-Snap-Button">
                    <span className="Button_Button__label__1Kk0v">개발</span>
                  </button>
                  <button className="scroll-Snap-Button">
                    <span className="Button_Button__label__1Kk0v">
                      경영/전략
                    </span>
                  </button>
                  <button className="scroll-Snap-Button InterestCategoryItem_InterestCategoryItem__selected__ljT8K">
                    <span className="Button_Button__label__1Kk0v">디자인</span>
                  </button>
                </Slider>
              </div>
              {/* <div className="TagSlide_TagSlide__arrow__DQk2_ TagSlide_TagSlide__leftArrow__HznBp">
                <button type="button">
                  <span className="SvgIcon_SvgIcon__root__8vwon">
                    <svg
                      className="SvgIcon_SvgIcon__root__svg__DKYBi"
                      viewBox="0 0 18 18"
                    >
                      <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                    </svg>
                  </span>
                </button>
              </div> */}
              {/* <div className="TagSlide_TagSlide__arrow__DQk2_ TagSlide_TagSlide__rightArrow__Sod00 TagSlide_TagSlide__arrow__visible__kNax4">
                <button type="button">
                  <span className="SvgIcon_SvgIcon__root__8vwon">
                    <svg
                      className="SvgIcon_SvgIcon__root__svg__DKYBi"
                      viewBox="0 0 18 18"
                    >
                      <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                    </svg>
                  </span>
                </button>
              </div> */}
            </div>
            {/* 밑에서부터 ...표시 버튼시작 */}
            <button type="button" className="InterestTagSlide">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 10a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 10zm7 0a2 2 0 1 1-.001 4.001A2 2 0 0 1 19 10zM5 10a2 2 0 1 1-.001 4.001A2 2 0 0 1 5 10z"
                ></path>
              </svg>
            </button>
          </div>

          {/* 밑에서부터 옆에 추가시작 */}
          <aside className="creator-Banner-Aside">
            <button type="button" className="creator-Banner-close">
              <span className="creator-Banner-close2">
                <svg className="creator-Banner-svg" viewBox="0 0 24 24">
                  <path d="M17.97 19.03a.749.749 0 1 0 1.06-1.06l-6.5-6.5a.749.749 0 0 0-1.06 0l-6.5 6.5a.749.749 0 1 0 1.06 1.06L12 13.06l5.97 5.97zM12 10.94 6.03 4.97a.749.749 0 1 0-1.06 1.06l6.5 6.5a.749.749 0 0 0 1.06 0l6.5-6.5a.749.749 0 1 0-1.06-1.06L12 10.94z"></path>
                </svg>
              </span>
            </button>
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Fcreator-application.png&amp;w=144&amp;q=90"
              alt="크리에이터 추천하기"
              loading="lazy"
              className="creator-Banner-img"
            ></img>
            <div className="creator-Banner-title">
              즐겨보는 <span>크리에이터의</span> 글도 추천하고 싶다면?
            </div>
            <hr className="creator-Banner-divider"></hr>
            <a
              className="creator-Banner-root"
              href="https://forms.gle/uurkbpmkA1FapxGJ6"
              target="_blank"
            >
              <span className="creator-Banner-label">
                크리에이터 추천하기
                <span className="creator-Banner-endicon">
                  <span className="creator-Banner-endroot">
                    <svg className="creator-Banner-endsvg" viewBox="0 0 18 18">
                      <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                    </svg>
                  </span>
                </span>
              </span>
            </a>
          </aside>
        </div>
      </div>
      {/* 밑에서부터 메인중앙카드시작 */}
      <ul className="Career-insight-card">
        {Mainslider.map((item) => (
          <li className="insight-card-li">
            <a
              data-attribute-id="home__video__click"
              data-video-title="나의 커리어는 어디로 가는가"
              data-video-id="279"
              data-video-key="tJVFQM0G"
              data-video-speaker="한국인성컨설팅&amp;마인드클리닉 노주선"
              data-interest-tag="Career Advice, Career Search, Work Productivity"
              href="/career-video/279"
            >
              <div className="Thumbnail">
                {/* <img
                className="Thumbnail_Thumbnail__image__YDGUQ Thumbnail_Thumbnail__image__cover__dufIU"
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220516%2F17%2F35388040.jpg&amp;w=750&amp;q=100"
                alt="나의 커리어는 어디로 가는가"
                loading="lazy"
              /> */}{" "}
                <img src={item.linkImg} />
              </div>
              {/* <div className="Section_Section__4rZ99 Section_Section__column__LhUoQ">
              <p className="Title_Title__jSBXy Title_Title__responsive___Ygbx">
                나의 커리어는 어디로 가는가
              </p>
              <p className="Description_Description__L7nDT Description_Description__responsive__7KWHM card-molecule-description">
                커리어를 이대로 쌓아가도 괜찮을지 고민하는 직장인의 실제 사연을
                통해 ‘직장생활의 리얼리티’를 들여다보고, 현실을 극복하기 위한
                방법에 대해 이야기합니다. 지금보다 더 행복하고 즐거운 직장생활을
                위해, 그리고 나의 연봉과 커리어의 성장을 위해!
              </p>
            </div> */}
              <div className="Section_Section__4rZ99 Section_Section__row__YdUxO Profile_Profile__kphpD card-molecule-profile">
                {/* <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&amp;w=60&amp;q=90"
                className="Profile_Profile__image__HZzTQ"
              />
              <span className="Profile_Profile__text__8jImU Profile_Profile__text__responsive__yv2iD">
                한국인성컨설팅&amp;마인드클리닉 노주선
              </span> */}
              </div>
            </a>
          </li>
        ))}
      </ul>
      ;
    </SectionStyle>
  );
}

export default MainSection;
