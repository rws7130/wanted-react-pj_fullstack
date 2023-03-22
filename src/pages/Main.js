import styles from "./Main.module.css";
import Header from "../components/Header";

// import Exam from "../components/Exam";

// import SimpleSlider from "../components/SimpleSlider";
import styled from "styled-components";
import MainSection from "../components/MainSection";
import Mainbody from "../components/Mainbody";
import MainLineBanner from "../components/MainLineBanner";
import MainEvent from "../components/MainEvent";
import MainbfFooter from "../components/MainbfFooter";
import Footer from "../components/common/Footer";
import Slider from "../components/Slider";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const MainPageStyle = styled.div`
  @media (min-width: 1200px) {
    padding-top: 75px;
  }
  background-color: #fff;
  /* width: 1688px; */
  height: 3000px;
`;

const DividerContainerStyle = styled.div`
  @media (min-width: 1200px) {
    max-width: 1060px;
    width: 87.72%;
  }
  width: 1060px;
  margin: 0 auto;
`;

const DividerRootStyle = styled.hr`
  height: 1px;
  margin: 0;
  border: none;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  background-color: #ececec;
`;
function Main() {
  const [isLogin, setIsLogin] = useState(false); //로그인 관리

  useEffect(() => {
    if (sessionStorage.getItem("name") === null) {
      // sessionStorage 에 name 라는 key 값으로 저장된 값이 없다면
      console.log("isLogin ?? :: ", isLogin);
    } else {
      // sessionStorage 에 name 라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
      setIsLogin(true);
      console.log("isLogin ?? :: ", isLogin);
    }
  });
  return (
    <>
      <Header></Header>
      <MainPageStyle>
        {/* <SimpleSlider></SimpleSlider> */}
        <Slider></Slider>
        <MainSection></MainSection>
        <Mainbody />
        <DividerContainerStyle>
          <DividerRootStyle />
        </DividerContainerStyle>
        <MainLineBanner />
        <MainEvent></MainEvent>
        <DividerContainerStyle>
          <DividerRootStyle />
        </DividerContainerStyle>
        <MainbfFooter></MainbfFooter>
        <Footer></Footer>
      </MainPageStyle>
      {/* 로그인이 되어있다면 */}
      {isLogin ? (
        <Link to={`/Main`} className="nav-link text-white">
          {sessionStorage.getItem("name")}
        </Link>
      ) : (
        <Link to={`/Login`} className="nav-link text-white">
          로그인
        </Link>
      )}
    </>
  );
}
export default Main;
