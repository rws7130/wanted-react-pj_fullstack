import styled from "styled-components";
import styles from "./Header.module.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Film from "./Film";

//
import Mycard from "./Mycard.js";
import "./Imagecarousel.css";

const EventSectionStyle = styled.section`
  padding: 60px 0;
  /* height: 568.76px; */
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
      /* position: relative;
      right: -350px; */
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
    .product-carousel {
      width: 1060px;
    }
    .event-banner-container {
      margin: -8px;
      /* div.privewImg {
      } */
      overflow-x: hidden;
      .product-container {
        /* overflow-y: hidden; */
        /* width: 1060px; */
        gap: 8px;
        width: fit-content;
        & > div {
          width: calc(1076px / 2 - 8px);
        }
        h3.title {
          margin-top: 8px;
          /* font-size: 14px; */
          font-weight: 700;
          line-height: 1.5;
          color: #333;
          /* position: relative;
          left: -522px;
          top: 273px; */
        }
        .thumbnail {
          position: relative;
          width: 100%;
          /* height: 100%; */
          left: 0;
          top: 0;
          border-radius: 4px;
          -o-object-fit: cover;
          object-fit: cover;
          outline: 1px solid rgba(0, 0, 0, 0.05);
          outline-offset: -1px;
          max-width: 522px;
          min-height: 273px;
          margin-bottom: 10px;
        }
        .eventType {
          /* position: relative;
          left: -522px;
          top: 273px; */
        }
        /* div.div-horizontal{
        display:flex;
        position: relative;
      } */
      }
    }
  }
  .event-card {
    margin: -8px;
  }
`;

// slider 코드시작
const Wrapper = styled.div`
  margin: 22px 0px;
  display: flex;
  overflow-x: hidden;
  align-items: center;
`;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 1);
  border-radius: 7px;
  display: flex;
  align-items: center;
  margin: 0 12.5px;
  cursor: pointer;
  position: relative;
`;

const Row = styled.div`
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  transition: all 0.5s ease-in-out;
`;

const Img = styled.img`
  border-radius: 7px;
  margin: 0;
  margin: 0 12.5px;
  position: relative;
  cursor: pointer;
  transition: all 0.5s linear;
`;
const PrivewImg = styled.img`
  transition: all 1s linear;
  border-radius: 7px;
`;

const Button = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  position: absolute;
  justify-content: center;
  border: none;
  font-size: 12px;
  width: 30px;
  height: 60px;
  border-radius: 60px;
  padding: 25px 10px;
  opacity: 0.5;
  z-index: 2;
  i {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const LeftButton = styled(Button)`
  transition: all 0.5s ease-in-out;
`;

const RightButton = styled(Button)`
  transition: all 0.5s ease-in-out;
`;

const ImgWrapper = styled.div`
  position: relative;
`;
const ImgDes = styled.div`
  position: absolute;
  z-index: 5;
  width: 330px;
  height: 150px;
  border-radius: 5px;
  background-color: white;
  left: 30px;
  bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 27px 0px 20px 0px;
`;

const Title = styled.span`
  padding-left: 20px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 14px;
`;
const Des = styled.span`
  padding-left: 20px;
  padding-bottom: 24px;
  font-size: 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const LinkSpan = styled.span`
  padding-left: 20px;
  padding-top: 16px;
  color: #3366ff;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  i {
    margin-left: 5px;
  }
`;

const MiniWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  transition: all 0.1s ease-in-out;
`;

const MiniTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-top: 22px;
  margin-bottom: 10px;
  text-align: center;
  color: rgba(0, 0, 0, 0.75);
`;

const MiniDes = styled.span`
  font-size: 14px;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
`;

const WantedImg = [
  // "https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg",
  // "https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg",
  // "https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg",
  // "https://static.wanted.co.kr/images/banners/1490/0b775035.jpg",
  // "https://static.wanted.co.kr/images/banners/1484/b2853456.jpg",
  // "https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg",
  // "https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg",
  // "https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg",
  // "https://static.wanted.co.kr/images/banners/1488/baa54448.jpg",
];

const wantedTitle = [
  "22년 달라지는 노동법령",
  "성과를 내는 마케팅",
  "해, 커리어 EP 02 공개",
  "마케팅 주니어를 찾습니다",
  "성장하는 개발자가 되려면?",
  "개발자 성장 비결 공개!",
  "개발자 되고 싶은 분들!?",
  "포트폴리오를 부탁해!",
  "UX 디자이너의 커리어 설계",
];

const wantedDes = [
  "노무관리 쟁점 한 눈에 파악하기",
  "실제 사례를 공개합니다!",
  "마지막 관문 2라운드의 승자는?",
  "기업 과제 풀고 취업까지 한번에!",
  "OOO 검색하지 말 것!",
  "Velog, 글 쓰는 개발자들의 이야기",
  "프론트엔드 무료 교육과정 참여하기",
  "디자이너의 포폴 살펴보기",
  "브랜드 가치를 더하는 디자인",
];

//

const MainEvent = ({ movies, theme }) => {
  // const [slidePx, setSlidePx] = useState(0);

  // const toPrev = () => {
  //   slidePx < 0 && setSlidePx(slidePx + 1375);
  // };

  // const toNext = () => {
  //   slidePx > -4125 && setSlidePx(slidePx - 1375);
  // };
  // if (!movies)
  const slideRef = useRef(null);
  const [index, setIndex] = useState(0); // 인덱스를 만들어줍니다.
  const [isSlide, setIsSlide] = useState(false); // 슬라이드 중인지 체크해줍니다. 슬라이드 중에 여러번 빠르게 클릭 못하게 하는 역할
  const [x, setX] = useState(0); // css에서 슬라이드 애니메이션 효과를 주기위해 x만큼 이동시키는 역할입니다.

  //드래그로 슬라이드 넘기기
  const [isClick, setIsClick] = useState(false); // 드래그를 시작하는지 체크해줍니다.
  const [mouseDownClientX, setMouseDownClientX] = useState(0); // 마우스를 클릭한 지점의 x 좌료를 저장합니다
  const [mouseUpClientX, setMouseUpClientX] = useState(0); // 마우스를 땐 지점의 x 좌표를 저장합니다.

  //반응형 사이트
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // 사용자의 화면크기 정보를 받아 반응형 사이트에 사용합니다.

  //api
  const [eventdata, setEventdata] = useState([]);

  // 다른 시도
  const [currentIndex, setCurrentIndex] = useState(0);
  //

  //다른 시도
  let box = document.querySelector(".event-banner-container");

  // const btnpressprev = () => { 원래 했던코드에서 밑으로 변환
  //   let width = box.clientWidth;
  //   box.scrollLeft = box.scrollLeft - width;
  //   box.scrollTo
  //   console.log(width);
  // };

  // const btnpressnext = () => {
  //   let width = box.clientWidth;
  //   box.scrollLeft = box.scrollLeft + width;
  //   console.log(width);
  // };
  const btnpressprev = () => {
    let width = box.clientWidth;
    box.scrollTo({ left: box.scrollLeft - width, behavior: "smooth" });
    console.log(width);
  };

  const btnpressnext = () => {
    let width = box.clientWidth;
    box.scrollTo({ left: box.scrollLeft + width, behavior: "smooth" });
    console.log(width);
  };
  //
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage, setPostsPerPage] = useState(50);

  // useEffect(() => {
  //   const fetchDatas = async () => {
  //     setLoading(true);
  //     const res = await axios.get(
  //       "/api/events/main"
  //     );
  //     setPosts(res.data);
  //     setLoading(false);
  //   };

  //   fetchDatas();
  // }, []);const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //   })();
  // }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/events/main");
        setEventdata(response.data.result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  //

  // const morePrevImg = index === 1 ? 8 : index === 0 ? 7 : index - 2;
  // const PrevImg = index === 0 ? 8 : index - 1;
  // const NextImg = index === 8 ? 0 : index + 1;
  // const moreNextImg = index === 8 ? 1 : index === 7 ? 0 : index + 2;
  //console.log(slideRef.current);
  //console.log(index);

  //
  // const Wrapper = styled.div`
  //   margin: 22px 0px;
  //   display: flex;
  //   overflow-x: hidden;

  //   align-items: center;
  // `;

  // const Row = styled.div`
  //   width: 100vw;
  //   display: flex;
  //   align-items: flex-start;
  //   justify-content: center;
  //   transition: all 0.5s ease-in-out;
  // `;

  //

  // useEffect(() => {
  //   const autoPage = setTimeout(() => {
  //     setX(-56);
  //     setIsSlide(true);
  //     setTimeout(() => {
  //       setIndex((prev) => (prev === 8 ? 0 : prev + 1));
  //       setX(0);
  //       setIsSlide(false);
  //     }, 500);
  //   }, 5000);
  //   return () => {
  //     clearTimeout(autoPage);
  //   };
  // }, [index, isClick]);
  console.log(`브라우저 사이즈 : ${windowWidth}`);

  //   // 잠시보류
  // {eventdata.map((eventdata) => (
  //   <li key={eventdata.id}>
  //   <div>{eventdata.title}</div>
  //   <div>{eventdata.contentType}</div>
  //   <div>{eventdata.contentUrl}</div>
  //   <div>{eventdata.author}</div>
  //   <div>{eventdata.explanation}</div>
  //   <div>{eventdata.thumbnail}</div>
  // </li>

  //
  return (
    <EventSectionStyle>
      <div className="event-wrap">
        {/* <Wrapper> */}
        <div className="banner-header">
          <div className="product-carousel">
            <button className="pre-btn" onClick={btnpressprev}>
              <p></p>
            </button>

            {/* </div> */}
            {/* <LeftButton
              style={{
                left:
                  windowWidth > 1800
                    ? `18.5%`
                    : windowWidth > 1500
                    ? `10%`
                    : windowWidth > 1300
                    ? `5%`
                    : `0%`,
                visibility: windowWidth < 1335 ? "hidden" : "visible",
              }}
              onClick={decreaseClick}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </LeftButton> */}
            {/* <button type="button" className="left-Arrow-bt">
              <span className="svg-event">
                <svg className="svg-event-icon" viewBox="0 0 18 18">
                  <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                </svg>
              </span>
            </button> */}
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
            <button className="next-btn" onClick={btnpressnext}>
              <p></p>
            </button>
            {/* <button type="button" className="right-arrow-bt">
              <span className="right-arrow-span">
                <svg className="right-arrow-svg" viewBox="0 0 18 18">
                  <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                </svg>
              </span>
            </button> */}
            {/* <RightButton
              style={{
                right:
                  windowWidth > 1800
                    ? `18.5%`
                    : windowWidth > 1500
                    ? `10%`
                    : windowWidth > 1200
                    ? `5%`
                    : `0%`,
                visibility: windowWidth < 1335 ? "hidden" : "visible",
              }}
              onClick={increaseClick}
            >
              <i className="fas fa-chevron-right"></i>
              <FontAwesomeIcon icon={faChevronRight} />
            </RightButton> */}
          </div>
        </div>
        {/*  */}
        {/* 밑부터 api 시작부분 */}
        <div className="event-banner-container">
          {/* <Row
              key={index}
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseLeave}
              onMouseMove={onMouseMove}
              ref={slideRef}
              style={{
                transform: `translateX(${x}vw)`,
              }}
            > */}
          <div className="product-container">
            {eventdata.map((data) => (
              // <Container>
              // <>
              //   <div key={data.id}></div>

              //   <img className="thumbnail" src={data.thumbnail} />
              //   {/* <div className="div-horizontal"> */}
              //   <div className="eventType"> {data.eventType}</div>
              //   <h3 className="title"> {data.title}</h3>
              //   {/* </div> */}
              // </>

              <div key={data.id}>
                <img className="thumbnail" src={data.thumbnail} />
                {/* <div className="div-horizontal"> */}
                <span
                  className="eventType"
                  style={{
                    border: "1px solid",
                    borderRadius: "2px",
                    fontSize: "11px",
                    fontWeight: 700,
                    height: '20px',
                    padding: "0 6px",
                  }}
                >
                  {data.eventType}
                </span>
                <h3 className="title"> {data.title}</h3>
                {/* </div> */}
              </div>
            ))}
            {/* <Mycard cardno="1" />
            <Mycard cardno="2" />
            <Mycard cardno="3" />
            <Mycard cardno="4" />
            <Mycard cardno="5" />
            <Mycard cardno="6" />
            <Mycard cardno="7" />
            <Mycard cardno="8" />
            <Mycard cardno="9" />
            <Mycard cardno="10" />
            <Mycard cardno="11" />
            <Mycard cardno="12" />
            <Mycard cardno="13" /> */}
          </div>

          {/* </Row> */}
          {/* <div
            className="slick-slider Items_Items__lVzDh slick-initialized"
            dir="ltr"
          >
        
          </div> */}

          {/* </Wrapper> */}
        </div>
      </div>
      {/* <div className="event-card">
        <div
          className="Item_EventItem__LW96Y"
          tabindex="-1"
          style="width: 100%; display: inline-block;"
        >
          <a
            href="/events/article_23_02_21"
            className=""
            aria-label=""
            data-attribute-id="event__click"
            data-event-id="2748"
            data-event-title="&amp;Workersㅣ채용 브랜딩에 필요한 4가지 전략"
            data-event-currency=""
            data-event-price=""
            data-event-label="article"
          >
            <div className="Thumbnail_Thumbnail__eu8A_">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2748%2F5418397f.jpg&amp;w=1200&amp;q=100"
                alt="&amp;Workersㅣ채용 브랜딩에 필요한 4가지 전략"
                loading="lazy"
                className="Thumbnail_Thumbnail__image__bP7ZG"
              />
            </div>
            <div className="Item_EventItem__contents__4Jq3u">
              <div className="EventLabel_EventLabel__NIldA">
                <span className="EventKind EventKind_EventKind__DUPpQ is-article">
                  <span className="EventKind_EventKind__text__B495V">
                    아티클
                  </span>
                </span>
              </div>
              <h3 className="Item_EventItem__contents__title__EhF9F">
                &amp;Workersㅣ채용 브랜딩에 필요한 4가지 전략
              </h3>
              <p className="Item_EventItem__contents__date__l7VBh"></p>
            </div>
          </a>
        </div>
      </div> */}

      {/* <LeftButton
          style={{
            left:
              windowWidth > 1800
                ? `18.5%`
                : windowWidth > 1500
                ? `10%`
                : windowWidth > 1300
                ? `5%`
                : `0%`,
            visibility: windowWidth < 1335 ? "hidden" : "visible",
          }}
          onClick={decreaseClick}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </LeftButton> */}
      {/* <Row
        key={index}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
        ref={slideRef}
        style={{
          transform: `translateX(${x}vw)`,
        }}
      > */}
      {/* <Container> */}
      {/* // <div key={movie.movieCd}>
            //   <div className={styles.ranklist}>{movie.rank}</div>
              <h2>{movie.rank}</h2>
            //   <br></br>
            //   <div className={styles.moiveNmlist}>{movie.movieNm}</div> */}
      {/* <PrivewImg
            style={{
              opacity: 0.5,
              width: windowWidth > 1200 ? null : `80vw`,
              height:
                windowWidth > 1200
                  ? null
                  : windowWidth < 770
                  ? "185px"
                  : "250px",
            }}
            src={WantedImg[morePrevImg]}
          ></PrivewImg>
        </Container> */}
      {/* <Container>
          <PrivewImg
            style={{
              opacity: 0.5,
              width: windowWidth > 1200 ? null : `80vw`,
              height:
                windowWidth > 1200
                  ? null
                  : windowWidth < 770
                  ? "185px"
                  : "250px",
            }}
            src={WantedImg[PrevImg]}
          ></PrivewImg>
        </Container> */}
      {/* <ImgWrapper>
          <Img
            style={{
              opacity: 1,
              width: windowWidth > 1200 ? null : `80vw`,
              height:
                windowWidth > 1200
                  ? null
                  : windowWidth < 770
                  ? "185px"
                  : "250px",
            }}
            src={WantedImg[index]}
          /> */}
      {/* {!isSlide && windowWidth > 1200 ? (
              <ImgDes>
                <Title>{wantedTitle[index]}</Title>
                <Des>{wantedDes[index]}</Des>
                <LinkSpan>
                  바로가기
                  <FontAwesomeIcon icon={faChevronRight} />
                </LinkSpan>
              </ImgDes>
            ) : null}
            {!isSlide && windowWidth <= 1200 ? (
              <MiniWrapper>
                <MiniTitle>{wantedTitle[index]}</MiniTitle>
                <MiniDes>{wantedDes[index]}</MiniDes>
                <LinkSpan>
                  바로가기
                  <FontAwesomeIcon icon={faChevronRight} />
                </LinkSpan>
              </MiniWrapper>
            ) : null} */}
      {/* </ImgWrapper>
        <Container>
          <PrivewImg
            style={{
              opacity: 0.5,
              width: windowWidth > 1200 ? null : `80vw`,
              height:
                windowWidth > 1200
                  ? null
                  : windowWidth < 770
                  ? "185px"
                  : "250px",
            }}
            src={WantedImg[NextImg]}
          ></PrivewImg>
        </Container>
        <Container>
          <PrivewImg
            style={{
              opacity: 0.5,
              width: windowWidth > 1200 ? null : `80vw`,
              height:
                windowWidth > 1200
                  ? null
                  : windowWidth < 770
                  ? "185px"
                  : "250px",
            }}
            src={WantedImg[moreNextImg]}
          ></PrivewImg>
        </Container>
      </Row> */}

      {/* <RightButton
        style={{
          right:
            windowWidth > 1800
              ? `18.5%`
              : windowWidth > 1500
              ? `10%`
              : windowWidth > 1200
              ? `5%`
              : `0%`,
          visibility: windowWidth < 1335 ? "hidden" : "visible",
        }}
        onClick={increaseClick}
      >
        <i className="fas fa-chevron-right"></i>
        <FontAwesomeIcon icon={faChevronRight} />
      </RightButton> */}
      {/* </Wrapper> */}
    </EventSectionStyle>
  );
};

export default MainEvent;
