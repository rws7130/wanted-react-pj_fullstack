import styles from "./Main.module.css";
import Header from "../components/Header";

// import Exam from "../components/Exam";

import SimpleSlider from "../components/SimpleSlider";
import styled from "styled-components";
import MainSection from "../components/MainSection";

const MainPageStyle = styled.div`
  @media (min-width: 1200px) {
    padding-top: 25px;
  }
  background-color: #fff;
  width: 1688px;
  height: 3000px;
`;

function Main() {
  return (
    <>
      <MainPageStyle>
        <Header></Header>
        <SimpleSlider></SimpleSlider>
        <MainSection></MainSection>
      </MainPageStyle>
    </>
  );
}
export default Main;
