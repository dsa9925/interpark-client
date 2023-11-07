/* eslint-disable jsx-a11y/anchor-is-valid */
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "../styles/recommend.css";
import "../styles/common.css";
import { useEffect, useRef, useState } from "react";

import axios from "axios";

function Recommend() {
  // js 코드 자리
  // JSX 의 요소를 React 에서 참조
  const swiperRef = useRef();

  // JSON 데이터 저장해 두고, 자료가 바뀌면 화면을 변경할
  // 리액트 변수를 만든다.
  const [htmlTag, setHtmlTag] = useState([]);

  //  외부 데이터 연동 (axios 활용)
  const axiosJsonData = () => {
    axios
      .get("recommend.json")
      .then(function (res) {
        console.log(res.data);
        let arr = [];
        for (let i = 0; i < res.data.total; i++) {
          const obj = res.data["good_" + (i + 1)];
          arr[i] = obj;
        }
        console.log(arr);
        setHtmlTag(arr);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // 외부 데이터 연동하기 (fetch 이용)
  const getJsonData = () => {
    fetch("recommend.json")
      .then((response) => {
        console.log("response : ", response);
        // 자료가 불러들여졌을 때
        return response.json();
      })
      .then((result) => {
        console.log("result : ", result);
        // 자료를 원하는데로 처리하겠다.
        // result를 화면에 출력하겠다.
        // 자료가 바뀌면 화면을 변경하는 기능을 생성하겠다.
        let arr = [];
        for (let i = 0; i < result.total; i++) {
          const obj = result["good_" + (i + 1)];
          arr[i] = obj;
        }
        console.log(arr);
        setHtmlTag(arr);
      })
      .catch((error) => {
        // 에러가 발생했다.
        console.log("error : ", error);
      });
  };

  useEffect(() => {
    // 랜더링 될때
    //  recommend.json 데이터 불러들이기 기능실행
    axiosJsonData();
    // getJsonData();
    return () => {
      // 삭제될때 (Clean Up 함수)
    };
  }, []);

  return (
    <section className="recommend">
      <div className="recommend-inner">
        <div className="recommend-header">
          <h2 className="recommend-title">쇼핑추천</h2>
          <span className="recommend-txt">
            할인이 쎄다! 지금, 특가 상품을 확인하세요.
          </span>
        </div>

        <div className="recommend-main">
          <div className="recommend-category">
            <ul className="recommend-list">
              <li>
                <button className="recommend-cate-bt recommend-cate-bt-active">
                  쎈딜
                </button>
              </li>
              <li>
                <button className="recommend-cate-bt">베스트</button>
              </li>
              <li>
                <button className="recommend-cate-bt">블프데이</button>
              </li>
              <li>
                <button className="recommend-cate-bt">디지털프라자</button>
              </li>
              <li>
                <a href="#" className="recommend-cate-bt">
                  소담상회
                </a>
              </li>
            </ul>
          </div>

          <div className="recommend-slide-wrap">
            <Swiper
              slidesPerView={4}
              spaceBetween={27}
              slidesPerGroup={4}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              navigation={{
                nextEl: ".recommend-slide-wrap .slide-next-bt",
                prevEl: ".recommend-slide-wrap .slide-prev-bt",
              }}
              className="recommend-slide"
            >
              {htmlTag.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    {index === htmlTag.length - 1 ? (
                      <a href={item.url}>바로가기</a>
                    ) : (
                      <div className="recommend-slide-item">
                        <a href={item.url} className="recommend-link">
                          <div className="recommend-img">
                            <img src={item.image} alt={item.desc} />
                          </div>
                          <div className="recommend-info">
                            <ul className="recommend-good-list">
                              <li>
                                <span className="recommend-good-info-price">
                                  <b>{item.discount}%</b>
                                  <em>{item.price}</em>원
                                </span>
                              </li>
                              <li>
                                <p className="recommend-good-info-desc">
                                  {item.desc}
                                </p>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <button className="slide-prev-bt">
              <img src="images/slider_arrow.svg" alt="" />
            </button>
            <button className="slide-next-bt">
              <img src="images/slider_arrow.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="recommend-footer"></div>
      </div>
    </section>
  );
}
export default Recommend;
