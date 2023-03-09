import styled from "styled-components";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";

const EventSectionStyle = styled.section`
  padding: 60px 0;
  height: 568.76px;
  > div.event-wrap {
    @media (min-width: 1200px) {
      max-width: 1060px;
      width: 87.72%;
    }
    margin: 0 auto;
    > div.banner-header {
      justify-content: space-between;
      //
      display: -ms-flexbox;
      display: flex;
      -ms-flex-align: center;
      align-items: center;
      margin-bottom: 30px;
      grid-gap: 8px;
      gap: 8px;
      > button.left-Arrow-bt {
        > span.svg-event {
          svg.svg-event-icon {
          }
        }
      }
      div.event-title {
        text-align: center;
        div.event-title-wrap {
          display: -ms-flexbox;
          display: flex;
          -ms-flex-align: center;
          align-items: center;
          -ms-flex-pack: center;
          justify-content: center;
          > * {
            margin-left: 4px;
            line-height: normal;
          }
          h2.event-wrap-content {
            @media (min-width: 1200px) {
              font-size: 22px;
            }
            font-size: 18px;
            line-height: 1.33;
            font-weight: 700;
            color: #333;
          }
        }
        a.event-subtitle {
          @media (min-width: 1200px) {
            font-size: 15px;
          }
          margin: 5px 0 0;
          font-size: 13px;
          font-weight: 500;
          line-height: normal;
          vertical-align: middle;
          color: #8a8a8a !important;
          span.event-subtitle-icon {
            display: inline-flex !important;
            width: 10px !important;
            margin-left: 4px !important;
            vertical-align: middle !important;
            margin-bottom: 2px;
            //
            display: flex;

            align-items: inherit;

            justify-content: inherit;
            svg.event-subtitle-svg {
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
      button.right-arrow-bt {
        span.right-arrow-span {
          svg.right-arrow-svg {
          }
        }
      }
    }
  }
`;

function MainEvent() {
  return (
    <EventSectionStyle>
      <div className="event-wrap">
        <div className="banner-header">
          <button type="button" className="left-Arrow-bt">
            <span className="svg-event">
              <svg className="svg-event-icon" viewBox="0 0 18 18">
                <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
              </svg>
            </span>
          </button>
          <div className="event-title">
            <div className="event-title-wrap">
              <h2 className="event-wrap-content">
                커리어 성장을 위한 맞춤 이벤트
              </h2>
            </div>
            <a
              className="event-subtitle"
              data-attribute-id="home__seeMore"
              data-domain="event"
              data-click-section="button"
              href="/events"
            >
              이벤트 전체보기
              <span className="event-subtitle-icon">
                <svg className="event-subtitle-svg" viewBox="0 0 19 19">
                  <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                </svg>
              </span>
            </a>
          </div>
          <button type="button" className="right-arrow-bt">
            <span className="right-arrow-span">
              <svg className="right-arrow-svg" viewBox="0 0 18 18">
                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </EventSectionStyle>
  );
}

export default MainEvent;
