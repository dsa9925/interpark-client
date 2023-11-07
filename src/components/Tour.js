/* eslint-disable jsx-a11y/anchor-is-valid */
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "../styles/tour.css";
import "../styles/common.css";
import { useEffect, useRef, useState } from "react";

function Tour() {
  // js 코드 자리
  // JSX 의 요소를 React 에서 참조
  const swiperRef = useRef();
  const [htmlTag, setHtmlTag] = useState([]);

  const getJsonData = () => {
    fetch("tour.json")
      .then((response) => {
        console.log("tour : ", response);
        return response.json();
      })
      .then((result) => {
        console.log("result : ", result);
        let arr = [];
        for (let i = 0; i < result.total; i++) {
          const obj = result["tour_" + (i + 1)];
          arr[i] = obj;
        }
        console.log(arr);
        setHtmlTag(arr);
      })
      .catch((error) => {
        console.log("error : ", error);
      });
  };

  useEffect(() => {
    getJsonData();
  }, []);

  return (
    <section className="tour">
      <div className="tour-inner">
        <div className="tour-header">
          <h2 className="tour-title">투어 특가</h2>
          <span className="tour-txt">해외여행은 인터파크다</span>
        </div>

        <div className="tour-main">
          <div className="tour-cate">
            <ul className="tour-list">
              <li>
                <button className="tour-cate-bt tour-cate-bt-active">
                  명절이면 품절
                </button>
              </li>
              <li>
                <button className="tour-cate-bt">패키지</button>
              </li>
              <li>
                <button className="tour-cate-bt">국내숙소</button>
              </li>
              <li>
                <button className="tour-cate-bt">해외숙소</button>
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
      </div>
    </section>
  );
}
export default Tour;
