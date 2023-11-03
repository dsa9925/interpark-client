/* eslint-disable jsx-a11y/anchor-is-valid */
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "../styles/tour.css";
import "../styles/common.css";
import { useRef } from "react";

function Tour() {
  // js 코드 자리
  // JSX 의 요소를 React 에서 참조
  const swiperRef = useRef();

  return (
    <section class="tour">
      <div class="tour-inner">
        <div class="tour-header">
          <h2 class="tour-title">투어 특가</h2>
          <span class="tour-txt">해외여행은 인터파크다</span>
        </div>

        <div class="tour-main">
          <div class="tour-cate">
            <ul class="tour-list">
              <li>
                <button class="tour-cate-bt tour-cate-bt-active">
                  명절이면 품절
                </button>
              </li>
              <li>
                <button class="tour-cate-bt">패키지</button>
              </li>
              <li>
                <button class="tour-cate-bt">국내숙소</button>
              </li>
              <li>
                <button class="tour-cate-bt">해외숙소</button>
              </li>
            </ul>
          </div>

          <div class="tour-slide-wrap">
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
              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="#" class="tour-link">
                    <div class="tour-img">
                      <img src="images/r1.jpg" alt="" />
                    </div>
                    <div class="tour-info">
                      <ul>
                        <li>
                          <span class="tour-good-info-desc">
                            파리15구, 위치&가성비
                          </span>
                        </li>

                        <li>
                          <span class="tour-good-info-place">
                            호텔 투어리즘 애비뉴
                          </span>
                        </li>

                        <li>
                          <span class="tour-good-info-price">
                            <em>277,820</em>
                            원~
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="#" class="tour-link">
                    <div class="tour-img">
                      <img src="images/r1.jpg" alt="" />
                    </div>
                    <div class="tour-info">
                      <ul>
                        <li>
                          <span class="tour-good-info-desc">
                            파리15구, 위치&가성비
                          </span>
                        </li>

                        <li>
                          <span class="tour-good-info-place">
                            호텔 투어리즘 애비뉴
                          </span>
                        </li>

                        <li>
                          <span class="tour-good-info-price">
                            <em>277,820</em>
                            원~
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="#" class="tour-link">
                    <div class="tour-img">
                      <img src="images/r1.jpg" alt="" />
                    </div>
                    <div class="tour-info">
                      <ul>
                        <li>
                          <span class="tour-good-info-desc">
                            파리15구, 위치&가성비
                          </span>
                        </li>

                        <li>
                          <span class="tour-good-info-place">
                            호텔 투어리즘 애비뉴
                          </span>
                        </li>

                        <li>
                          <span class="tour-good-info-price">
                            <em>277,820</em>
                            원~
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="#" class="tour-link">
                    <div class="tour-img">
                      <img src="images/r1.jpg" alt="" />
                    </div>
                    <div class="tour-info">
                      <ul>
                        <li>
                          <span class="tour-good-info-desc">
                            파리15구, 위치&가성비
                          </span>
                        </li>

                        <li>
                          <span class="tour-good-info-place">
                            호텔 투어리즘 애비뉴
                          </span>
                        </li>

                        <li>
                          <span class="tour-good-info-price">
                            <em>277,820</em>
                            원~
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="#" class="tour-link">
                    <div class="tour-img">
                      <img src="images/r1.jpg" alt="" />
                    </div>
                    <div class="tour-info">
                      <ul>
                        <li>
                          <span class="tour-good-info-desc">
                            파리15구, 위치&가성비
                          </span>
                        </li>

                        <li>
                          <span class="tour-good-info-place">
                            호텔 투어리즘 애비뉴
                          </span>
                        </li>

                        <li>
                          <span class="tour-good-info-price">
                            <em>277,820</em>
                            원~
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="#" class="tour-link">
                    <div class="tour-img">
                      <img src="images/r1.jpg" alt="" />
                    </div>
                    <div class="tour-info">
                      <ul>
                        <li>
                          <span class="tour-good-info-desc">
                            파리15구, 위치&가성비
                          </span>
                        </li>

                        <li>
                          <span class="tour-good-info-place">
                            호텔 투어리즘 애비뉴
                          </span>
                        </li>

                        <li>
                          <span class="tour-good-info-price">
                            <em>277,820</em>
                            원~
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="#" class="tour-link">
                    <div class="tour-img">
                      <img src="images/r1.jpg" alt="" />
                    </div>
                    <div class="tour-info">
                      <ul>
                        <li>
                          <span class="tour-good-info-desc">
                            파리15구, 위치&가성비
                          </span>
                        </li>

                        <li>
                          <span class="tour-good-info-place">
                            호텔 투어리즘 애비뉴
                          </span>
                        </li>

                        <li>
                          <span class="tour-good-info-price">
                            <em>277,820</em>
                            원~
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="#" class="tour-link">
                    <div class="tour-img">
                      <img src="images/r1.jpg" alt="" />
                    </div>
                    <div class="tour-info">
                      <ul>
                        <li>
                          <span class="tour-good-info-desc">
                            파리15구, 위치&가성비
                          </span>
                        </li>

                        <li>
                          <span class="tour-good-info-place">
                            호텔 투어리즘 애비뉴
                          </span>
                        </li>

                        <li>
                          <span class="tour-good-info-price">
                            <em>277,820</em>
                            원~
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="#" class="tour-link">
                    <div class="tour-img">
                      <img src="images/r1.jpg" alt="" />
                    </div>
                    <div class="tour-info">
                      <ul>
                        <li>
                          <span class="tour-good-info-desc">
                            파리15구, 위치&가성비
                          </span>
                        </li>

                        <li>
                          <span class="tour-good-info-place">
                            호텔 투어리즘 애비뉴
                          </span>
                        </li>

                        <li>
                          <span class="tour-good-info-price">
                            <em>277,820</em>
                            원~
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>

            <button class="slide-prev-bt">
              <img src="images/slider_arrow.svg" alt="" />
            </button>
            <button class="slide-next-bt">
              <img src="images/slider2_arrow.svg" alt="" />
            </button>
          </div>
        </div>

        <div class="tour-footer"></div>
      </div>
    </section>
  );
}
export default Tour;
