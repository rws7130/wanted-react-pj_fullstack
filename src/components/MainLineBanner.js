import styled from "styled-components";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";

const LineBannerStyle = styled.div`
  @media (min-width: 1200px) {
    max-width: 1060px;
    width: 87.72%;
  }
  width: 1060px;
  margin: 60px auto 0;
  > a {
    > div.lineBanner-link {
      display: -ms-flexbox;
      display: flex;
      word-break: keep-all;
      text-align: center;

      > div.lineBanner-link-box {
        @media (min-width: 1200px) {
          background-image: -webkit-gradient(
            linear,
            left top,
            right top,
            color-stop(-12%, #01a9fe),
            color-stop(37%, #2f5fef),
            color-stop(72%, #046afe),
            color-stop(110%, #00d2dd)
          );
          background-image: linear-gradient(
            90deg,
            #01a9fe -12%,
            #2f5fef 37%,
            #046afe 72%,
            #00d2dd 110%
          );
        }
        background-image: linear-gradient(
          102deg,
          #2f5fef -127%,
          #046afe 50%,
          #00d2dd 145%
        );
        padding: 21px 30px;
        font-size: 17px;
        border-radius: 38.5px;
        line-height: normal;
        //
        display: -ms-flexbox;
        display: flex;
        -ms-flex-positive: 1;
        flex-grow: 1;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 17px 30px;
        color: #fff;
        font-size: 15px;
        font-weight: 700;
        border-radius: 4px;
        height: 64.4px;
        border-radius: 38.5px;
        > span {
          > em.lineBanner-emo {
            font-weight: 400;
            font-style: normal;
          }
          > span.lineBanner-svgicon {
            display: inline-flex !important;
            width: 10px !important;
            margin-left: 2px !important;
            vertical-align: text-top !important;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: inherit;
            align-items: inherit;
            -ms-flex-pack: inherit;
            justify-content: inherit;
            > svg.lineBanner-svg {
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
              /* width: 17px;
            height: 17px; */
             
            }
          }
        }
      }
    }
  }
`;

function MainLineBanner() {
  return (
    <LineBannerStyle>
      <a
        href="/profile"
        className=""
        aria-label="line banner"
        data-attribute-id="home__userInfo"
        data-kind="jobCategory"
      >
        <div className="lineBanner-link">
          <div className="lineBanner-link-box">
            <span>
              직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요.{" "}
              <em className="lineBanner-emo">👀</em>
              <span className="lineBanner-svgicon">
                <svg className="lineBanner-svg" viewBox="0 0 18 18">
                  <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                </svg>
              </span>
            </span>
          </div>
        </div>
      </a>
    </LineBannerStyle>
  );
}

export default MainLineBanner;
