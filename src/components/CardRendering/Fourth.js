import styled from "styled-components";
// import styles from "./Header.module.css";
import { useState, useEffect } from "react";



import axios from "axios";



function Fourth() {
    const [insights4, setinsights2] = useState([]);
    const [active, setActive] = useState("FirstCard");
  //   
    useEffect(() => {
      (async () => {
        // axios({
        //     method:'GET',
        //     url:'https://jsonplaceholder.typicode.com/photos'
        // }).then(response => setinsights(response.data))
  
        // axios.get('https://jsonplaceholder.typicode.com/photos')
        //      .then(response => setinsights(response.data))
  
        try {
          const response = await axios.get("/api/insights?tags=조직문화");
          setinsights2(response.data.result);
        } catch (error) {
          console.log(error);
        }
      })();
    }, []);
    //
    return (
      <>
        {insights4.map((post) => (
          <li className="insight-card-li">
            <a
              data-attribute-id="home__video__click"
              data-video-title="나의 커리어는 어디로 가는가"
              data-video-id="279"
              data-video-key="tJVFQM0G"
              data-video-speaker="한국인성컨설팅&amp;마인드클리닉 노주선"
              data-interest-tag="Career Advice, Career Search, Work Productivity"
              href="/career-video/279"
            >
              <div className="Thumbnail">
              {/* <img
                className="Thumbnail_Thumbnail__image__YDGUQ Thumbnail_Thumbnail__image__cover__dufIU"
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220516%2F17%2F35388040.jpg&amp;w=750&amp;q=100"
                alt="나의 커리어는 어디로 가는가"
                loading="lazy"
              /> */}{" "}
              {/* <img src={item.linkImg} /> */}
              <li key={post.id}>
                <img
                  className="thumbnail-start"
                  style={{ width: "250px", height: "175px" }}
                  src={post.thumbnail}
                ></img>
                <p
                  className="title"
                  style={{
                    fontSize: "18px",
                    lineHeight: "144.4%",
                    letterSpacing: "-.0002em",
                    fontWeight: "600",
                    marginTop:'11px'
                  }}
                >
                  {post.title}
                </p>

                <p
                  className="description"
                  style={{
                    fontSize: "13px",
                    lineHeight: "138.5%",
                    overflow: "hidden",
                    height: "35.88px",
                    marginTop:'4px'
                  }}
                >
                  {post.explanation}
                </p>
                <div
                  className="type"
                  style={{
                    fontSize: "12px",
                    lineHeight: "133.3%",
                  }}
                >
                  {/* {post.contentType} */}
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90"
                    style={{
                      width: "24px",
                      height: "24px",
                      position: "relative",
                      bottom: "-8px",
                      
                    }}
                  ></img>
                </div>
                <div
                  className="author"
                  style={{
                    fontWeight: "400",
                    letterSpacing: ".031em",
                    color: "#8a8a8a",
                    fontSize: "12px",
                    lineHeight: "133.3%",
                    position: 'relative',
                    right: '-30px',
                    bottom: '16px'
                  }}
                >
                  {post.author}
                </div>
              </li>
            </div>
              {/* <div className="Section_Section__4rZ99 Section_Section__column__LhUoQ">
                <p className="Title_Title__jSBXy Title_Title__responsive___Ygbx">
                  나의 커리어는 어디로 가는가
                </p>
                <p className="Description_Description__L7nDT Description_Description__responsive__7KWHM card-molecule-description">
                  커리어를 이대로 쌓아가도 괜찮을지 고민하는 직장인의 실제 사연을
                  통해 ‘직장생활의 리얼리티’를 들여다보고, 현실을 극복하기 위한
                  방법에 대해 이야기합니다. 지금보다 더 행복하고 즐거운 직장생활을
                  위해, 그리고 나의 연봉과 커리어의 성장을 위해!
                </p>
              </div> */}
              <div className="Section_Section__4rZ99 Section_Section__row__YdUxO Profile_Profile__kphpD card-molecule-profile">
                {/* <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&amp;w=60&amp;q=90"
                  className="Profile_Profile__image__HZzTQ"
                />
                <span className="Profile_Profile__text__8jImU Profile_Profile__text__responsive__yv2iD">
                  한국인성컨설팅&amp;마인드클리닉 노주선
                </span> */}
              </div>
            </a>
          </li>
        ))}
      </>
    );
  }
  
  export default Fourth;
  