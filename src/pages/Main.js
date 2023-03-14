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
    </>
  );
}
export default Main;
