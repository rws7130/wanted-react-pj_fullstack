import styles from "./Main.module.css";
import Header from "../components/Header";

// import Exam from "../components/Exam";

import SimpleSlider from "../components/SimpleSlider";
import styled from "styled-components";
import MainSection from "../components/MainSection";
import Mainbody from "../components/Mainbody";
import MainLineBanner from "../components/MainLineBanner";

const MainPageStyle = styled.div`
  @media (min-width: 1200px) {
    padding-top: 25px;
  }
  background-color: #fff;
  width: 1688px;
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
  return (
    <>
      <MainPageStyle>
        <Header></Header>
        <SimpleSlider></SimpleSlider>
        <MainSection></MainSection>
        <Mainbody />
        <DividerContainerStyle>
          <DividerRootStyle />
        </DividerContainerStyle>
        <MainLineBanner />
      </MainPageStyle>
    </>
  );
}
export default Main;
