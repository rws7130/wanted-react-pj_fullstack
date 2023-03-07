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
<<<<<<< HEAD
      <MainPageStyle>
        <Header></Header>
        <SimpleSlider></SimpleSlider>
        <MainSection></MainSection>
      </MainPageStyle>
=======
      <Header></Header>
      <SimpleSlider></SimpleSlider>
>>>>>>> 2aaae1cd3c870aa239e0aded804c4a5eb304a606
    </>
  );
}
export default Main;
