import styled from "styled-components";
// import styles from "./Header.module.css";
import { useState, useEffect } from "react";

import Login from "../pages/Login";

import { useNavigate } from "react-router-dom";
import { RxMagnifyingGlass } from "react-icons/rx";

const NavBarStyle = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #fff;
  -webkit-box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  z-index: 800;

  > .MainBar {
    @media (min-width: 1200px) {
      margin: 0 auto;
      height: 50px;
      width: 87.72%;
    }
    position: relative;
    max-width: 1060px;

    > nav.MainBarNav {
      display: flex;
      -ms-flex-align: center;
      align-items: center;
      -ms-flex-pack: justify;
      justify-content: space-between;
      flex-wrap: wrap;
      flex-direction: row;
      left: -17px;
      position: relative;
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
          /* display: flex; */
          position: relative;
          display: inline-block;
          > .MainBarhamberger {
            margin-top: -2px;
            margin-right: 15px;
            border: none;
            cursor: pointer;
            /*  */
            /* background-color: #4caf50; */
            background-color: white;
            padding: 16px;
            font-size: 16px;

            /* > button {
              margin: 0;
              padding: 0;
              border: 0;
              background: none;
              cursor: pointer;
              font-family: inherit; */

            > img {
              width: 17px;
              height: 14px;
              object-fit: contain;
              vertical-align: middle;
            }
          }
          .MainBarhamberger:hover .Hamberger-hover-menu {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            /* position: absolute; */
          }
          section.Hamberger-hover-menu {
            /* display: inline-block; */
            overflow-y: scroll;
            /* a {
              em {
                h2 {
                }
              }
            } */
            position: relative;
            ul {
              ul {
                display: none;
              }
            }
            ul li:hover > ul {
              display: block;
              /* position: absolute; */
            }
            a.alljob-grop {
              display: none;
            }
            a {
              width: 199.56px;
              height: 40px;
            }

            ul {
              /* display: none; */
              li.hover-menu {
                display: none;
                background-color: #f9f9f9;
                min-width: 200px;
                box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
                z-index: 1;
                position: absolute;
              }
              ul {
                /* li.hovermenu-next:hover {
                  display: block;
                  background-color: #f9f9f9;
                  min-width: 200px;
                  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
                  z-index: 1;
                  position: relative;
                }  */
                /* 위코드 적용안됨.. */
              }
              li {
                a {
                  div.freelancer {
                    display: none;
                  }
                }
              }
            }
          }
          section.Hamberger-hover-menu a:hover {
            background-color: #f1f1f1;
          }
          > .wantedlogo {
            /* display: block; */
            position: relative;
            left: -13px;
            top: 4px;
          }
        }
        .Navtoplogo:hover section.Hamberger-hover-menu {
          display: block;
        }
        > #HeaderBtn {
          display: none;
          color: #36f;
          font-size: 14px;
          line-height: 32px;
          height: 34px;
          border: 1px solid #36f;
          border-radius: 17px;
          padding: 0 14px;
        }
      }
      > ul.Headermenu {
        height: inherit;
        text-align: center;
        margin: 0;

        > .HomeButton {
          @media (min-width: 1200px) {
            display: none;
          }
          > a {
            padding-left: 20px;
          }
        }
        > .sizedownmenu {
          /* -webkit-box-shadow: inset 0 -2px #258bf7; */
          box-shadow: inset 0 -2px #258bf7;
        }
        > li {
          height: inherit;
          display: inline-block;
          > a {
            /* padding-left: 20px;  위에 a랑 똑같은 코드위치지만 이부분은 적용안됨-> 위에적용*/
            position: relative;
            vertical-align: middle;
            font-size: 14px;
            line-height: 20px;
            font-weight: 600;
            padding: 15px;
            display: inline-block;
            color: #333333;
            em {
              position: absolute;
              top: 10px;
              right: -5px;
              pointer-events: none;
              font-style: normal;
            }
            > span {
              position: absolute;
              top: 10px;
              right: -7px;
              pointer-events: none;
            }
          }
        }
        > li:after {
          height: 100%;
          content: "";
          display: inline-block;
          vertical-align: middle;
        }
      }
      > ul.Headermenu {
        @media (min-width: 768px) and (max-width: 991px) {
          -ms-flex-pack: start;
          justify-content: flex-start;
          margin-right: 30px;
        }
      }
      > ul.Headermenu {
        @media (max-width: 767px) {
          text-align: left;
        }
      }
      > ul.Headermenu {
        @media (min-width: 992px) and (max-width: 1100px) {
          display: -ms-flexbox;
          display: flex;
          -ms-flex: 1 1;
          flex: 1 1;
          -ms-flex-pack: distribute;
          justify-content: space-around;
          -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
        }
      }
      > aside.Mainaside {
        height: 100%;
        padding: 10px 0;
        > ul {
          height: 100%;
          margin: 0;

          > li > * {
            /*적용됨  */
            height: 100%;
            padding: 0 5px;
            font-size: 14px;
            color: #333;
            font-weight: 600;
            line-height: 1;
            border: none;
            background: white;
            @media (min-width: 1200px) {
              padding: 0 10px;
            }
          }
          > li.headerRightDiv {
            display: inline-flex;
            a.dashboardButton {
              font-size: 13px;
              color: #666;
              line-height: 30px;
              height: 30px;
              border: 1px solid #e1e2e3;
              border-radius: 15px;
              padding: 0 10px;
              margin-left: 15px;
              font-weight: 400;
            }
          }
          > li.headerRightDiv:before {
            /*적용됨 */
            display: block;
            content: "";
            width: 1px;
            height: 10px;
            background-color: #e1e2e3;
            margin: auto 10px;
          }
          > li {
            position: relative;
            display: inline-block;
            height: 100%;
            vertical-align: middle;
            a {
              display: inline-block;
              vertical-align: bottom;
              line-height: 32px;
            }
          }

          > button.searchButton {
            position: relative;
            margin-top: 5px;
            svg {
              defs {
                path.qt2dnsql4a {
                }
              }
              g {
                use {
                }
              }
            }
          }
          > button.HeaderButton {
            margin-right: 6px;
            line-height: 1.4;
          }
          > li.headerDotMenu {
            @media (min-width: 1200px) {
              display: none !important;
              > button.menuButton {
                margin-right: 10px;
                padding-left: 5px;
              }
            }
          }
        }
      }
    }
  }
`;

function Header() {
  const navigate = useNavigate();
  const goLogin = () => {
    navigate("/Login");
  };

  return (
    <NavBarStyle role="presentation">
      <div className="MainBar" role="presentation">
        {/*  */}

        {/* <div class="dropdown">
          <button class="dropbtn">Dropdown</button>
          <div class="dropdown-content">
            <a href="#">직군 전체</a>
            <a href="#">개발</a>
            <a href="#">경영·비즈니스</a>
            <a href="#">마케팅·광고</a>
            <a href="#">디자인</a>
            <a href="#">영업</a>
            <a href="#">고객서비스·리테일</a>
            <a href="#">게임 제작</a>
            <a href="#">미디어</a>
            <a href="#">HR</a>
            <a href="#">엔지니어링·설계</a>
            <a href="#">금융</a>
            <a href="#">제조·생산</a>
            <a href="#">의료·제약·바이오</a>
            <a href="#">물류·무역</a>
            <a href="#">교육</a>
            <a href="#">법률·법집행기관</a>
            <a href="#">식·음료</a>
            <a href="#">건설·시설</a>
            <a href="#">공공·복지</a>
            <a href="#">공공·복지</a>
          </div>
        </div> */}

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
              {/* 메뉴호버시작 에러로 일단보류*/}
              {/* <section className="Hamberger-hover-menu">
                <a href="/wdlist" className="alljob-grop">
                  <em>
                    <h2>직군 전체</h2>
                  </em>
                </a> */}
              {/* 아래부터 ul 태그시작 */}
              {/* <ul>
                  <li data-testid="category-item" className="hover-menu">
                    <a href="/wdlist/518" className="">
                      <em>개발</em>
                    </a>
                  </li> */}
              {/* 아래부터 2차메뉴 시작 */}
              {/* <ul style="width: 800px;"> */}
              {/* <ul>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/" clasName="" aria-label="">
                        개발 전체
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/873" clasName="" aria-label="">
                        웹 개발자
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/872" clasName="" aria-label="">
                        서버 개발자
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/10110" clasName="" aria-label="">
                        소프트웨어 엔지니어
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/669" clasName="" aria-label="">
                        프론트엔드 개발자
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/660" clasName="" aria-label="">
                        자바 개발자
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/900" clasName="" aria-label="">
                        C,C++ 개발자
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/899" clasName="" aria-label="">
                        파이썬 개발자
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/677" clasName="" aria-label="">
                        안드로이드 개발자
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/674" clasName="" aria-label="">
                        DevOps / 시스템 관리자
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/895" clasName="" aria-label="">
                        Node.js 개발자
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/678" clasName="" aria-label="">
                        iOS 개발자
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/665" clasName="" aria-label="">
                        시스템,네트워크 관리자
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/655" clasName="" aria-label="">
                        데이터 엔지니어
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/1634" clasName="" aria-label="">
                        머신러닝 엔지니어
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/1026" clasName="" aria-label="">
                        기술지원
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/877" clasName="" aria-label="">
                        개발 매니저
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/1024" clasName="" aria-label="">
                        데이터 사이언티스트
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/1025" clasName="" aria-label="">
                        빅데이터 엔지니어
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/676" clasName="" aria-label="">
                        QA,테스트 엔지니어
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/671" clasName="" aria-label="">
                        보안 엔지니어
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/658" clasName="" aria-label="">
                        임베디드 개발자
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/876" clasName="" aria-label="">
                        프로덕트 매니저
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/672" clasName="" aria-label="">
                        하드웨어 엔지니어
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/893" clasName="" aria-label="">
                        PHP 개발자
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/10231" clasName="" aria-label="">
                        DBA
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/1027" clasName="" aria-label="">
                        블록체인 플랫폼 엔지니어
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/10111" clasName="" aria-label="">
                        크로스플랫폼 앱 개발자
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/661" clasName="" aria-label="">
                        .NET 개발자
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/939" clasName="" aria-label="">
                        웹 퍼블리셔
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/10230" clasName="" aria-label="">
                        ERP전문가
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/896" clasName="" aria-label="">
                        영상,음성 엔지니어
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/795" clasName="" aria-label="">
                        CTO,Chief Technology Officer
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/898" clasName="" aria-label="">
                        그래픽스 엔지니어
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/1022" clasName="" aria-label="">
                        BI 엔지니어
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/894" clasName="" aria-label="">
                        루비온레일즈 개발자
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/10112" clasName="" aria-label="">
                        VR 엔지니어
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                    <li clasName="hovermenu-next">
                      <a href="/wdlist/518/793" clasName="" aria-label="">
                        CIO,Chief Information Officer
                      </a>
                      <svg
                        width="10"
                        height="10"
                        clasName="Explore_CategoryItem_Icon__TUrh4"
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#3366FF"
                          d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                        ></path>
                      </svg>
                    </li>
                  </ul> */}
              {/*  */}
              {/* <li data-testid="category-item" className="hover-menu">
                    <a href="/wdlist/507" className="">
                      <em>경영·비즈니스</em>
                    </a>
                  </li>
                  <li data-testid="category-item" className="hover-menu">
                    <a href="/wdlist/523" className="">
                      <em>마케팅·광고</em>
                    </a>
                  </li>
                  <li data-testid="category-item" className="hover-menu">
                    <a href="/wdlist/511" className="">
                      <em>디자인</em>
                    </a>
                  </li>
                  <li data-testid="category-item" className="hover-menu">
                    <a href="/wdlist/530" className="">
                      <em>영업</em>
                    </a>
                  </li>
                  <li data-testid="category-item" className="hover-menu">
                    <a href="/wdlist/510" className="">
                      <em>고객서비스·리테일</em>
                    </a>
                  </li>
                  <li data-testid="category-item" className="hover-menu">
                    <a href="/wdlist/959" className="">
                      <em>게임 제작</em>
                    </a>
                  </li>
                  <li data-testid="category-item" className="hover-menu">
                    <a href="/wdlist/524" className="">
                      <em>미디어</em>
                    </a>
                  </li>
                  <li data-testid="category-item" className="hover-menu">
                    <a href="/wdlist/517" className="">
                      <em>HR</em>
                    </a>
                  </li>
                  <li data-testid="category-item" class="hover-menu">
                    <a href="/wdlist/513" class="">
                      <em>엔지니어링·설계</em>
                    </a>
                  </li>
                  <li data-testid="category-item" className="hover-menu">
                    <a href="/wdlist/508" className="">
                      <em>금융</em>
                    </a>
                  </li>
                  <li data-testid="category-item" className="hover-menu">
                    <a href="/wdlist/522" className="">
                      <em>제조·생산</em>
                    </a>
                  </li>
                  <li data-testid="category-item" class="hover-menu">
                    <a href="/wdlist/515" class="">
                      <em>의료·제약·바이오</em>
                    </a>
                  </li>
                  <li data-testid="category-item" className="hover-menu">
                    <a href="/wdlist/532" className="">
                      <em>물류·무역</em>
                    </a>
                  </li>
                  <li data-testid="category-item" className="hover-menu">
                    <a href="/wdlist/10101" className="">
                      <em>교육</em>
                    </a>
                  </li>
                  <li data-testid="category-item" className="hover-menu">
                    <a href="/wdlist/521" className="">
                      <em>법률·법집행기관</em>
                    </a>
                  </li>
                  <li data-testid="category-item" className="hover-menu">
                    <a href="/wdlist/10057" className="">
                      <em>식·음료</em>
                    </a>
                  </li>
                  <li data-testid="category-item" className="hover-menu">
                    <a href="/wdlist/509" className="">
                      <em>건설·시설</em>
                    </a>
                  </li>
                  <li data-testid="category-item" className="hover-menu">
                    <a href="/wdlist/514" className="">
                      <em>공공·복지</em>
                    </a>
                  </li>
                  <li className="Explore_GigsCategoryItem__l4LhT">
                    <a
                      href="https://www.wanted.co.kr/gigs/projects"
                      className="Explore_GigsCategoryItem_link__OlnwE"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-attribute-id="jobCategoryMenu__banner__click"
                    >
                      <div className="freelancer">
                        <span>프리랜서</span>
                      </div>
                    </a>
                  </li> */}
              {/* </ul>
              </section> */}
              {/* 밑에서부터 2차메뉴 시작 */}
              {/* <section class="Explore_SubCategory__xIcAi"> */}

              {/* </section> */}
              {/*  */}

              <a
                href="/"
                className="wantedlogo"
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
              id="HeaderBtn"
              className="xsSignUpButton"
              type="button"
              data-attribute-id="gnb"
              data-gnb-kind="signupLogin"
            >
              회원가입하기
            </button>
          </div>
          <ul className="Headermenu">
            <li
              className="HomeButton sizedownmenu"
              data-attribute-id="gnb"
              data-gnb-kind="home"
            >
              <a href="/" className="">
                홈
              </a>
            </li>
            <li className="" data-attribute-id="gnb" data-gnb-kind="jobs">
              <a href="/jobsfeed" className="">
                채용
              </a>
            </li>
            <li className="" data-attribute-id="gnb" data-gnb-kind="event">
              <a href="/events" className="">
                이벤트
              </a>
            </li>
            <li
              className="smMoreVisible"
              data-attribute-id="gnb"
              data-gnb-kind="salary"
            >
              <a href="/salary" className="">
                직군별 연봉
              </a>
            </li>
            <li
              className="smMoreVisible"
              data-attribute-id="gnb"
              data-gnb-kind="resume"
            >
              <a href="/cv/list" className="">
                이력서
              </a>
            </li>
            <li
              className="smMoreVisible"
              data-attribute-id="gnb"
              data-gnb-kind="community"
            >
              <a href="/community" className="">
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
                      fillRule="evenodd"
                      fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                      fontSize="9"
                      fontWeight="500"
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
              <a href="/aiscore/resume" className="">
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
                      fillRule="evenodd"
                      fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                      fontSize="9"
                      fontWeight="500"
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
          <aside className="Mainaside">
            <ul>
              <li>
                <button
                  className="searchButton"
                  type="button"
                  data-attribute-id="gnb"
                  data-gnb-kind="search"
                >
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    xmlnsXlink="https://www.w3.org/1999/xlink"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <defs>
                      <path
                        id="qt2dnsql4a"
                        d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
                      ></path>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <use
                        fill="#333"
                        fillRule="nonzero"
                        stroke="#333"
                        stroke-width=".3"
                        xlinkHref="#qt2dnsql4a"
                      ></use>
                    </g>
                  </svg>
                </button>
              </li>
              <li>
                <button
                  className="HeaderButton"
                  type="button"
                  data-attribute-id="gnb"
                  data-gnb-kind="signupLogin"
                  onClick={goLogin}
                >
                  회원가입/로그인
                </button>
              </li>
              <li
                className="headerRightDiv"
                data-attribute-id="gnb"
                data-gnb-kind="forEmployers"
              >
                <a className="dashboardButton" href="/dashboard">
                  기업 서비스
                </a>
              </li>
              <li className="headerDotMenu">
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
            <div className="headerDotMenu"></div>
          </aside>
        </nav>
      </div>
    </NavBarStyle>
  );
}
export default Header;
