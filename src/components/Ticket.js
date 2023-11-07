/* eslint-disable jsx-a11y/anchor-is-valid */
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "../styles/ticket.css";
import "../styles/common.css";
import { useEffect, useRef, useState } from "react";

function Ticket() {
  // js 코드 자리
  // JSX 의 요소를 React 에서 참조
  const swiperRef = useRef();
  const [htmlTag, setHtmlTag] = useState([]);

  const getJsonData = () => {
    fetch("ticket.json")
      .then((response) => {
        console.log("response : ", response);
        return response.json();
      })
      .then((result) => {
        console.log("result : ", result);
        let arr = [];
        for (let i = 0; i < result.total; i++) {
          const obj = result["ticket_" + (i + 1)];
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
    <section className="ticket">
      <div className="ticket-inner">
        <div className="ticket-header">
          <h2 className="ticket-title">티켓 랭킹</h2>
          <span className="ticket-txt">오늘 뭐볼까? 지금 HOT한 공연</span>
        </div>

        <div className="ticket-main">
          <div className="ticket-cate">
            <ul className="ticket-list">
              <li>
                <button className="ticket-cate-bt ticket-cate-bt-active">
                  뮤지컬
                </button>
              </li>
              <li>
                <button className="ticket-cate-bt">콘서트</button>
              </li>
              <li>
                <button className="ticket-cate-bt">스포츠</button>
              </li>
              <li>
                <button className="ticket-cate-bt">전시/행사</button>
              </li>
              <li>
                <button className="ticket-cate-bt">클래식/무용</button>
              </li>
              <li>
                <button className="ticket-cate-bt">아동/무용</button>
              </li>
              <li>
                <button className="ticket-cate-bt">연극</button>
              </li>
              <li>
                <button className="ticket-cate-bt">레저/캠핑</button>
              </li>
            </ul>
          </div>

          <div className="ticket-slide-wrap">
            <Swiper
              slidesPerView={4}
              spaceBetween={28}
              slidesPerGroup={4}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              navigation={{
                nextEl: ".ticket-slide-wrap .slide-next-bt",
                prevEl: ".ticket-slide-wrap .slide-prev-bt",
              }}
              className="ticket-slide"
            >
              {htmlTag.map((item, index) => {
                return (
                  <SwiperSlide>
                    <div className="ticket-slide-item">
                      <a href={item.url} className="ticket-link">
                        <div className="ticket-img">
                          <img src={item.image} alt={item.desc} />
                        </div>
                        <div className="ticket-info">
                          <ul>
                            <li>
                              <span className="ticket-good-info-desc">
                                <em>{item.name}</em>
                              </span>
                            </li>

                            <li>
                              <span className="ticket-good-info-place">
                                {item.place}
                              </span>
                            </li>

                            <li>
                              <span className="ticket-good-info-price">
                                {item.date}
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

        <div className="ticket-footer"></div>
      </div>
    </section>
  );
}
export default Ticket;
