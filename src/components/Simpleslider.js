import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
// import styles from "../pages/Main.module.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import styles from "./SimpleSlider.module.css";
import "./slick.css";
import "./slick-theme.css";
import { useEffect, useState } from "react";


const Mainslider = [
  {
    id: 1,
    // title: "블랙 팬서-와칸다 포에버",
    grade: "99%",
    reservationRate: "예매율 23.1%",
    linkImg:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1958%2Fb670c991.jpg&w=1060&q=100",
  },
  {
    id: 2,
    // title: "데시벨",
    grade: " 90%",
    reservationRate: "예매율 12.4%",
    linkImg:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1958%2Fb670c991.jpg&w=1060&q=100",
  },
  {
    id: 3,
    // title: "동감",
    grade: "86%",
    reservationRate: "예매율 11.8%",
    linkImg:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1958%2Fb670c991.jpg&w=1060&q=100",
  },
  {
    id: 4,
    // title: "올빼미",
    grade: "99%",
    reservationRate: "예매율 10.3%",
    linkImg:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1958%2Fb670c991.jpg&w=1060&q=100",
  },
  {
    id: 5,
    // title: "폴-600미터",
    grade: " 93%",
    reservationRate: "예매율 2.3%",
    linkImg:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1958%2Fb670c991.jpg&w=1060&q=100",
  },
  {
    id: 6,
    // title: "폴-600미터",
    grade: " 93%",
    reservationRate: "예매율 2.3%",
    linkImg:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1958%2Fb670c991.jpg&w=1060&q=100",
  },

];
//

// const API_KEY = "6612dc4f65442db14ddfef3eafd95470";
// const TODAY = new Date();
// const YEAR = TODAY.getFullYear();
// const MONTH = ("0" + (TODAY.getMonth() + 1)).slice(-2);
// const YESTERDAY = ("0" + (TODAY.getDate() - 1)).slice(-2);
// const DATE = YEAR + MONTH + YESTERDAY;

// function DataMovie() {
//   const [loading, setLoading] = useState(true);
//   const [movies, setMovies] = useState([]);
//   const getMovies = async () => {
//     fetch(
//       `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${"6612dc4f65442db14ddfef3eafd95470"}&targetDt=${20230106}`
//     )
//       .then((reponse) => reponse.json())
//       .then((json) => {
//         setMovies(json.boxOfficeResult.dailyBoxOfficeList);
//         setLoading(false);
//       });
//   };
//   useEffect(() => {
//     getMovies();
//   }, []);

//   return (

//   );
// }

//

// const Wrap = styled.div`
//   margin: 5% auto;
//   width: 100%;
/* .slick-prev:before {
    opaicty: 1; // 기존에 숨어있던 화살표 버튼이 보이게
    color: black; // 버튼 색은 검은색으로
    left: 0;
  }
  .slick-next:before {
    opacity: 1;
    color: black;
  } */
// `;

export function SimpleSlider() {
  const settings = {
    // prevArrow: <PreviousBtn />,
    // nextArrow: <NextBtn />,
    dots: false,
    infinite: true,
    speed: 270,
    // slidesToShow: 5,
    slidesToShow: 1,
    slidesToScroll: 5,
    arrows: true,
    // centerMode:true,
    centerPadding: "0px",

    // prevArrow: "<button type='button' class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
    // nextArrow: "<button type='button' class='slick-next'>Next</button>",

    //
    // responsive: [
    //   {
    //     breakpoint: 426,
    //     settings: {
    //       slidesToShow: 1,
    //       centerMode: false,
    //     },
    //   },
    //   {
    //     breakpoint: 769,
    //     settings: {
    //       slidesToShow: 3,
    //       centerMode: false,
    //     },
    //   },
    //   {
    //     breakpoint: 1025,
    //     settings: {
    //       slidesToShow: 4,
    //       centerMode: false,
    //       slidesToScroll: 2,
    //     },
    //   },
    // ],
  };

  // if (width <= 426) {
  //   slidesToShow = 1;
  // } else if (width > 426 && width <= 769) {
  //   slidesToShow = 3;
  // } else if (width > 769 && width <= 1025) {
  //   slidesToShow = 4;
  // } else {
  //   slidesToShow = 5;
  // }

  return (
    <>
      <div className={styles.topbanner}>
        <Slider {...settings}>
          
          {Mainslider.map((evendata) => (
            <div
              className={styles["swiper-slide"]}
              // style="width: 310.667px; margin-right: 24px;"
            >
              <div>
                <div className={styles["img_wrap"]}>
                  <img
                    src={evendata.linkImg}
                    alt=""
                    className={styles.linkImg}
                  />
                </div>
             
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default SimpleSlider;
