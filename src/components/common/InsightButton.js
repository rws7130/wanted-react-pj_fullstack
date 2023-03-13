import styled from "styled-components";
// import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import styles from "./MainSection.module.css";
// import "./slick.css";
// import "./slick-theme.css";
import Slider from "react-slick";




function InsightButton() {
  return (
    <>
      <button className="scroll-Snap-Button">
        <span className="Button_Button__label__1Kk0v">취업/이직</span>
      </button>
      <button className="scroll-Snap-Button">
        <span className="Button_Button__label__1Kk0v">라이프스타일</span>
      </button>
      <button className="scroll-Snap-Button">
        <span className="Button_Button__label__1Kk0v">커리어고민</span>
      </button>
      <button className="scroll-Snap-Button">
        <span className="Button_Button__label__1Kk0v">조직문화</span>
      </button>
      <button className="scroll-Snap-Button">
        <span className="Button_Button__label__1Kk0v">IT/기술</span>
      </button>
      <button className="scroll-Snap-Button">
        <span className="Button_Button__label__1Kk0v">인간관계</span>
      </button>
      <button className="scroll-Snap-Button">
        <span className="Button_Button__label__1Kk0v">리더십</span>
      </button>
      <button className="scroll-Snap-Button">
        <span className="Button_Button__label__1Kk0v">회사생활</span>
      </button>
      <button className="scroll-Snap-Button">
        <span className="Button_Button__label__1Kk0v">MD</span>
      </button>
      <button className="scroll-Snap-Button">
        <span className="Button_Button__label__1Kk0v">콘텐츠 제작</span>
      </button>
      <button className="scroll-Snap-Button">
        <span className="Button_Button__label__1Kk0v">노무</span>
      </button>
      <button className="scroll-Snap-Button">
        <span className="Button_Button__label__1Kk0v">UX/UI</span>
      </button>
      <button className="scroll-Snap-Button">
        <span className="Button_Button__label__1Kk0v">서비스기획</span>
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
        <span className="Button_Button__label__1Kk0v">경영/전략</span>
      </button>
      <button className="scroll-Snap-Button InterestCategoryItem_InterestCategoryItem__selected__ljT8K">
        <span className="Button_Button__label__1Kk0v">디자인</span>
      </button>
    </>
  );
}

export default InsightButton;
