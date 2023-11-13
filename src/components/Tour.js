/* eslint-disable jsx-a11y/anchor-is-valid */
import { BtCate } from "../components/ui/buttons";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "../styles/tour.css";
import "../styles/common.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import { InnerArea, SectionTag } from "./layout/layout";

function Tour() {
  // js 코드 자리
  // JSX 의 요소를 React 에서 참조
  const swiperRef = useRef();
  const [htmlTag, setHtmlTag] = useState([]);

  const axiosJsonData = () => {
    axios
      .get(
        "https://port-0-interpark-server-7lk2blopj0psl.sel5.cloudtype.app/tour"
      )

      .then(function (res) {
        console.log(res.data);

        const result = res.data;
        let arr = [];
        for (let i = 0; i < result.total; i++) {
          const obj = result["tour_" + (i + 1)];
          arr[i] = obj;
        }
        console.log(arr);
        setHtmlTag(arr);
      })
      .catch(function (error) {
        console.log(error);
        const dmObj = {
          total: 9,
          tour_1: {
            image: "images/t3.jpg",
            name: "라스베가스 준특급 2박, 5대특식 포함",
            option: "국적기직항",
            place:
              "[미서부/단독/BEST] 3대도시+8대캐년 완전일주 7박10일 [아시아나]",
            price: "3399000",
            url: "a.html",
          },
          tour_2: {
            image: "images/t2.webp",
            name: "닛폰바시역 도보 5분",
            option: "오사카",
            place: "소테츠 그랜드 프레사 오사카 남바",
            price: "90115",
            url: "a.html",
          },
          tour_3: {
            image: "images/t4.webp",
            name: "수라삭 BTS 스카이트레인역 접근성 ",
            option: "강력특가",
            place: "해운대",
            price: "70000",
            url: "a.html",
          },
          tour_4: {
            image: "images/t1.jpg",
            name: "토트넘VS울버햄튼 경기 티켓 포함",
            option: "BEST",
            place: "[런던Pack] 찐 런던 & 토트넘 직관 경기_6박8일",
            price: "5490000",
            url: "a.html",
          },
          tour_5: {
            image: "images/t5.jpg",
            name: "최대판매 상품",
            option: "베스트셀러",
            place: "[부산-하노이 5일]★가족여행최고★하노이/하롱베이+옌뜨 5",
            price: "679000",
            url: "a.html",
          },
          tour_6: {
            image: "images/t6.jpg",
            name: "아시아나항공, 특급호텔",
            option: "국적기직항",
            place: "북경/만리장성/서커스/이화원/전일정쉐라톤 4일",
            price: "299000",
            url: "a.html",
          },
          tour_7: {
            image: "images/t7.webp",
            name: "시먼역 도보 3분, 4성급 모던 호텔",
            option: "타이베이",
            place: "저스트 슬립 시먼딩",
            price: "180855",
            url: "a.html",
          },
          tour_8: {
            image: "images/t8.jpg",
            name: "얼리 체크인 or 레이트 체크아웃 포함",
            option: "소아동반인기",
            place: "[더욱 오래 단둘이]푸꾸옥 5일_특급서비스 얼리체크인OR레",
            price: "740000원",
            url: "a.html",
          },
          tour_9: {
            image: "images/t9.jpg",
            name: "패밀리 투룸 로프트(21평)",
            option: "강력특가",
            place: "어반스테이 여수웅천",
            price: "63900",
            url: "a.html",
          },
        };
        let arr = [];
        for (let i = 0; i < dmObj.total; i++) {
          const obj = dmObj["tour_" + (i + 1)];
          arr[i] = obj;
        }
        setHtmlTag(arr);
      });
  };

  useEffect(() => {
    axiosJsonData();
  }, []);

  return (
    <SectionTag pt={0} pb={90}>
      <InnerArea>
        <div className="tour-header">
          <h2 className="tour-title">투어 특가</h2>
          <span className="tour-txt">해외여행은 인터파크다</span>
        </div>

        <div className="tour-main">
          <div className="tour-cate">
            <ul className="tour-list">
              <li>
                <BtCate active={true}>명절이면 품절</BtCate>
              </li>
              <li>
                <BtCate>패키지</BtCate>
              </li>
              <li>
                <BtCate>국내숙소</BtCate>
              </li>
              <li>
                <BtCate>해외숙소</BtCate>
              </li>
            </ul>
          </div>

          <div className="tour-slide-wrap">
            <Swiper
              slidesPerView={3}
              spaceBetween={27}
              slidesPerGroup={3}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              navigation={{
                nextEl: ".tour-slide-wrap .slide-next-bt",
                prevEl: ".tour-slide-wrap .slide-prev-bt",
              }}
              className="tour-slide"
            >
              {htmlTag.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    {index === htmlTag.length - 1 ? (
                      <a href={item.url}>바로가기</a>
                    ) : (
                      <div className="tour-slide-item">
                        <a href={item.url} className="tour-link">
                          <div className="tour-img">
                            <img src={item.image} alt={item.desc} />
                          </div>
                          <div className="tour-info">
                            <ul>
                              <li>
                                <span className="tour-good-info-desc">
                                  {item.name}
                                </span>
                              </li>

                              <li>
                                <span className="tour-good-info-place">
                                  {item.place}
                                </span>
                              </li>

                              <li>
                                <span className="tour-good-info-price">
                                  <em>{item.price}</em>
                                  원~
                                </span>
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
              <img src="images/slider2_arrow.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="tour-footer"></div>
      </InnerArea>
    </SectionTag>
  );
}
export default Tour;
