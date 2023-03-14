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
        <section className="Kr_ResumeIntro_edit__yWTcM">
          <div className="Kr_ResumeIntro_content__Y3x_h">
            <h1>합격을 부르는 이력서</h1>
            <h2>
              원티드 이력서로 지원 시 <br />
              일반 이력서보다 서류 합격률이 2배 높아집니다.
            </h2>
            <button
              className="Button_Button__root__V1ie3 Button_Button__contained__toUI5 undefined Button_Button__sizeMedium__k0A1w primary"
              type="button"
              data-attribute-id="introResume__goToResume"
            >
              <span className="Button_Button__label__1Kk0v">이력서 관리</span>
            </button>
            <button
              className="Button_Button__root__V1ie3 Button_Button__contained__toUI5 undefined Button_Button__sizeMedium__k0A1w"
              type="button"
              data-attribute-id="introResume__createNew"
            >
              <span className="Button_Button__label__1Kk0v">
                새 이력서 작성
              </span>
            </button>
          </div>
        </section>
        <section className="Kr_ResumeIntro_advantage__U1YTY">
          <div className="Kr_ResumeIntro_content__Y3x_h">
            <h1>원티드 이력서는 이런 점이 좋아요!</h1>

            <ul className="Kr_ResumeIntro_advantage_container__7gr1E">
              <li className="Kr_ResumeIntro_advantage_first__MbFow">
                <div>
                  <h2>이력서 하나로 모든 준비 끝</h2>
                  <h3>
                    이력서 작성부터 지원까지 한 곳에서!
                    <br />
                    회사별 양식에 맞출 필요 없이 하나의 이력서만 작성하세요.
                  </h3>
                </div>
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcset="https://static.wanted.co.kr/images/userweb/resume_intro/m_resume_advantage_01.png"
                  />
                  <img
                    width="520"
                    height="312"
                    src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_advantage_01.png"
                    alt="resume_advantage_01"
                  />
                </picture>
              </li>
              <li className="Kr_ResumeIntro_advantage_second__28zcH">
                <div>
                  <h2>완성도를 높여주는 이력서 코칭</h2>
                  <h3>
                    이력서 코칭*으로 서류 합격률 30% UP
                    <br />
                    300만 합격 데이터를 분석해 합·불합격 단어를 알려드려요.
                  </h3>
                  <h6>*일부 직군에서는 사용 제한, 추후 확대 예정</h6>
                </div>
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcset="https://static.wanted.co.kr/images/userweb/resume_intro/m_resume_advantage_02.png"
                  />
                  <img
                    width="520"
                    height="256"
                    src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_advantage_02.png"
                    alt="resume_advantage_02"
                  />
                </picture>
              </li>
              <li className="Kr_ResumeIntro_advantage_third__GJYHZ">
                <div>
                  <h2>이력서만 등록해도 찾아오는 면접 제안</h2>
                  <h3>
                    매치업은 서류 전형 없이 바로 면접 진행!
                    <br />
                    채용담당자가 직접 면접을 제안합니다.
                  </h3>
                </div>
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcset="https://static.wanted.co.kr/images/userweb/resume_intro/m_resume_advantage_03.png"
                  />
                  <img
                    width="520"
                    height="282"
                    src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_advantage_03.png"
                    alt="resume_advantage_03"
                  />
                </picture>
              </li>
              <li className="Kr_ResumeIntro_advantage_last__05dBQ">
                <div>
                  <h2>언제 어디서나 자유롭게 작성</h2>
                  <h3>
                    주말엔 노트북, 출퇴근길엔 스마트폰으로.
                    <br />
                    자유롭게 작성하고 필요할 땐 PDF로 저장하세요.
                  </h3>
                </div>
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcset="https://static.wanted.co.kr/images/userweb/resume_intro/m_resume_advantage_04.png"
                  />
                  <img
                    width="520"
                    height="282"
                    src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_advantage_04.png"
                    alt="resume_advantage_04"
                  />
                </picture>
              </li>
            </ul>
          </div>
        </section>
        <section className="Kr_ResumeIntro_example__8XCr2">
          <div className="Kr_ResumeIntro_content__Y3x_h">
            <h1>쓰는 사람도 보는 사람도 편하게</h1>
          </div>
          <div className="Kr_ResumeIntro_example_list__oQn1S">
            <div>
              <div className="Kr_ResumeIntro_example_list_summary__eODmu">
                <h1>김티드</h1>
                <div className="Kr_bubbleContainer__8d0zf Kr_bubbleContainer_isShow__XA0dk">
                  이메일: wanted@wantedlab.com
                  <br />
                  연락처: 000-0000-0000
                  <div className="Kr_bubble__DzcPA">
                    성별, 사진 등 불필요한 개인정보 최소화
                  </div>
                </div>
                <p>
                  Next.js, TypeScript, React 기반의 5년차 프론트엔드 개발자
                  김티드입니다.
                  <br />
                  새로운 기술을 활용해 비즈니스 문제를 해결하는 것에 관심이
                  많습니다.
                </p>
                <div className="Kr_bubbleContainer__8d0zf Kr_bubbleContainer_isShow__XA0dk">
                  <ul>
                    <li>웹/앱 서비스의 프론트엔드 설계, 개발, 운영 경험</li>
                    <li>
                      다수의 UI 구현 경험으로 사용자 인터렉션에 대한 높은 이해도
                    </li>
                    <li>
                      제한된 리소스 환경에서 기획 단계부터 참여한 프로젝트 다수
                    </li>
                    <li>프로젝트 리딩 및 다양한 팀과의 협업 경험</li>
                  </ul>
                  <div className="Kr_bubble__DzcPA">
                    깔끔한 UI와 가독성 높은 디자인
                  </div>
                </div>
              </div>
              <hr className="Divider_Divider__root__f2LD0" />
              <div className="Kr_ResumeIntro_example_list_career__iw5cQ">
                <div className="Kr_ResumeIntro_example_list_career_title__PB_K5">
                  <h5>경력</h5>
                </div>
                <div className="Kr_ResumeIntro_example_list_career_content__J4LMf">
                  <div className="Kr_ResumeIntro_example_list_career_content_company__GYmj3">
                    <div>
                      <h5>원티드랩</h5>
                      <p>프론트엔드팀 / 팀원</p>
                    </div>
                    <p>2020.07 - 현재 재직중</p>
                  </div>
                  <ul>
                    <li className="Kr_bubbleContainer__8d0zf Kr_bubbleContainer_isShow__XA0dk">
                      <div>
                        <h6>
                          <span>웹사이트 SEO</span>2022.05 - 2022.06
                        </h6>
                        <p>
                          도메인 정책 수립 및 URL 표준화(canonical) 및 페이지 별
                          메타태그/키워드 검증
                          <br />- 성과: 오가닉 트래픽 30% 증가
                          <br />- 사용 기술: Next.js, Google Search Console
                          <br />- 링크: https://www.wanted.co.kr
                        </p>
                      </div>
                      <div className="Kr_bubble__DzcPA">
                        업무 강점과 경력을 강조하는 템플릿
                      </div>
                    </li>
                    <li>
                      <h6>
                        <span>글로벌 채용 서비스 신규 개발</span>2021.08 -
                        2022.04
                      </h6>
                      <p>
                        메인 프론트엔드 개발자로 프로젝트 구조 설계 및 각종
                        컴포넌트 개발 (기여도 70%)
                        <br />- 성과: 일본/싱가폴/대만 3개국 대상 채용 서비스
                        출시
                        <br />- 사용 기술: React.js, Next.js, redux,
                        styled-component
                        <br />- 링크: https://www.wantedglobal.com
                      </p>
                    </li>
                  </ul>
                  <hr className="Divider_Divider__root__f2LD0" />
                  <div>
                    <div>
                      <h5>한국빅컴퍼니</h5>
                      <p>디지털기술개발팀 / 사원</p>
                    </div>
                    <p>2018.03 - 2020.06</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="Kr_ResumeIntro_sample___SLnT">
          <button
            className="Button_Button__root__V1ie3 Button_Button__contained__toUI5 undefined Button_Button__sizeMedium__k0A1w"
            data-attribute-id="introResume__downloadResume"
          >
            <span className="Button_Button__label__1Kk0v">샘플 다운로드</span>
          </button>
          <button
            className="Button_Button__root__V1ie3 Button_Button__contained__toUI5 undefined Button_Button__sizeMedium__k0A1w"
            type="button"
            data-attribute-id="introResume__createNew"
          >
            <span className="Button_Button__label__1Kk0v">새 이력서 작성</span>
          </button>
        </section>
        <section className="Kr_ResumeIntro_ai__wVhsO">
          <div className="Kr_ResumeIntro_content__Y3x_h">
            <div className="Kr_ResumeIntro_ai_content__IyV_A">
              <div>
                이력서 완성하면
                <p>
                  <img
                    src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_ai_logo.png"
                    width="198"
                    height="33"
                    alt="ai_logo"
                  />
                  가 포지션 추천까지
                </p>
              </div>
              <p>
                이력서를 분석하여 딱 맞는 포지션을 찾아드려요.
                <br />
                원티드AI가 추천한 포지션은 서류합격률이 일반 지원 대비 4배
                높습니다.
              </p>
              <button
                className="Button_Button__root__V1ie3 Button_Button__contained__toUI5 undefined Button_Button__sizeMedium__k0A1w"
                data-attribute-id="introResume__goToResume"
              >
                <span className="Button_Button__label__1Kk0v">
                  지금 시작하기
                </span>
              </button>
            </div>
            <img
              src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_ai_sample.png"
              width="516"
              height="352"
              alt="ai_sample"
            />
          </div>
        </section>
      </ResumePageStyle>
    </>
  );
}

export default Resume;
