import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Autoplay } from "swiper";

import clientImg1 from "../../images/reviews/reviews-1.png"
import clientImg2 from "../../images/reviews/reviews-2.png"
import clientImg3 from "../../images/reviews/reviews-3.png"
import clientImg4 from "../../images/reviews/reviews-8.png"
import clientImg5 from "../../images/reviews/reviews-9.png"
import clientImg6 from "../../images/reviews/reviews-10.png"

const Testimonials = () => {
  return (
    <>
      <div
        id="testimonials"
        className="exchange-testimonials-area bg-color-f5f5f5 ptb-100"
      >
        <div className="container">
          <div className="exchange-section-title">
            <span>Testimonials</span>
            <h2>People's Say About Us</h2>
          </div>
 
          <Swiper
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="exchange-testimonials-slider"
          >
            <SwiperSlide>
              <div className="exchange-testimonials-card">
                <ul className="rating-list">
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Suspendisse varius enim in elementum tristique. Duis cursus
                  viverra.
                </p>
                <div className="clients-profile">
                  <img src={clientImg1} alt="Image" />
                  <h3>Evgeny Gerasim</h3>
                  <p>CEO of Klane</p>
                </div>
                <div className="icon">
                  <i className="flaticon-quote"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="exchange-testimonials-card">
                <ul className="rating-list">
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Suspendisse varius enim in elementum tristique. Duis cursus
                  viverra.
                </p>
                <div className="clients-profile">
                  <img src={clientImg2} alt="Image" />
                  <h3>Gevgny Eerasim</h3>
                  <p>React Developer</p>
                </div>
                <div className="icon">
                  <i className="flaticon-quote"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="exchange-testimonials-card">
                <ul className="rating-list">
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Suspendisse varius enim in elementum tristique. Duis cursus
                  viverra.
                </p>
                <div className="clients-profile">
                  <img src={clientImg3} alt="Image" />
                  <h3>Thomas Charles</h3>
                  <p>Gatsby Developer</p>
                </div>
                <div className="icon">
                  <i className="flaticon-quote"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="exchange-testimonials-card">
                <ul className="rating-list">
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Suspendisse varius enim in elementum tristique. Duis cursus
                  viverra.
                </p>
                <div className="clients-profile">
                  <img src={clientImg4} alt="Image" />
                  <h3>David William</h3>
                  <p>WP Developer</p>
                </div>
                <div className="icon">
                  <i className="flaticon-quote"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="exchange-testimonials-card">
                <ul className="rating-list">
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Suspendisse varius enim in elementum tristique. Duis cursus
                  viverra.
                </p>
                <div className="clients-profile">
                  <img src={clientImg5} alt="Image" />
                  <h3>Michael John</h3>
                  <p>QA Engineer</p>
                </div>
                <div className="icon">
                  <i className="flaticon-quote"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="exchange-testimonials-card">
                <ul className="rating-list">
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Suspendisse varius enim in elementum tristique. Duis cursus
                  viverra.
                </p>
                <div className="clients-profile">
                  <img src={clientImg6} alt="Image" />
                  <h3>James Robert</h3>
                  <p>Marketing Specialist</p>
                </div>
                <div className="icon">
                  <i className="flaticon-quote"></i>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Testimonials
