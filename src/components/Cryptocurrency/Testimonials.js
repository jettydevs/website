import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

import clientImg1 from "../../images/reviews/reviews-1.png"
import clientImg2 from "../../images/reviews/reviews-2.png"
import clientImg3 from "../../images/reviews/reviews-3.png"
import clientImg4 from "../../images/reviews/reviews-7.png"
import clientImg5 from "../../images/reviews/reviews-8.png"

const Testimonials = () => {
  return (
    <>
      <div
        id="testimonials"
        className="currency-testimonial-area ptb-100 bg-color-0e1013"
      >
        <div className="container">
          <div className="currency-section-title">
            <span>TESTIMONIALS</span>
            <h2>Our Clients Feedbacks</h2>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              992: {
                slidesPerView: 2,
              },
            }}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="cryptocurrency-testimonials"
          >
            <SwiperSlide>
              <div className="currency-testimonial-card">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros interd nulla, ut commodo
                  diam libero vitae erat.
                </p>
                <div className="cliens-profile">
                  <img src={clientImg1} alt="Image" />
                  <h3>Evgeny Gerasim</h3>
                  <span>Business Developer</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="currency-testimonial-card">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros interd nulla, ut commodo
                  diam libero vitae erat.
                </p>
                <div className="cliens-profile">
                  <img src={clientImg2} alt="Image" />
                  <h3>Jevgeny Kerasin</h3>
                  <span>React Developer</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="currency-testimonial-card">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros interd nulla, ut commodo
                  diam libero vitae erat.
                </p>
                <div className="cliens-profile">
                  <img src={clientImg3} alt="Image" />
                  <h3>Evgeny Gerasim</h3>
                  <span>Gatsby Developer</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="currency-testimonial-card">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros interd nulla, ut commodo
                  diam libero vitae erat.
                </p>
                <div className="cliens-profile">
                  <img src={clientImg4} alt="Image" />
                  <h3>Jevgeny Kerasin</h3>
                  <span>UI/UX Designer</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="currency-testimonial-card">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros interd nulla, ut commodo
                  diam libero vitae erat.
                </p>
                <div className="cliens-profile">
                  <img src={clientImg5} alt="Image" />
                  <h3>Evgeny Gerasim</h3>
                  <span>QA Engineer</span>
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
