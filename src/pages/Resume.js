import styled from "styled-components";
import RepeatUseHeader from "../components/common/RepeatUseHeader";

const ResumePageStyle = styled.div`
  @media (min-width: 1200px) {
    padding-top: 75px;
  }
  background-color: #fff;
  /* width: 1688px; */
  height: 3000px;
`;

function Resume() {
  return (
    <>
      <RepeatUseHeader></RepeatUseHeader>
      <ResumePageStyle>
        <section className="header">
          
        </section>

      </ResumePageStyle>
    </>
  );
}

export default Resume;
