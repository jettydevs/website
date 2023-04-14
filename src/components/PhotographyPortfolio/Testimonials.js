import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

import clientImg1 from "../../images/reviews/reviews-1.png"
import clientImg2 from "../../images/reviews/reviews-2.png"
import clientImg3 from "../../images/reviews/reviews-3.png"
import shape32 from "../../images/shape/shape-32.png"

const Testimonials = () => {
  return (
    <>
      <div
        id="testimonials"
        className="photography-testimonial-area bg-color-f9f9f9 ptb-100"
      >
        <div className="container">
          <div className="photography-section-title">
            <span>TESTIMONIALS</span>
            <h2>Words From My Clients</h2>
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
            className="photograpy-testimonial-slider"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <SwiperSlide>
              <div className="photograpy-testimonial-card">
                <ul className="rating">
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
                <h3>Highly professional</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros interd nulla, ut commodo
                  diam libero vitae erat.
                </p>
                <div className="clients-profile">
                  <img src={clientImg1} alt="Image" />
                  <h3>Evgeny Gerasim</h3>
                  <p>Business Developer</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="photograpy-testimonial-card">
                <ul className="rating">
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
                <h3>Highly professional</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros interd nulla, ut commodo
                  diam libero vitae erat.
                </p>
                <div className="clients-profile">
                  <img src={clientImg2} alt="Image" />
                  <h3>Zevgeny Devid</h3>
                  <p>Business Developer</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="photograpy-testimonial-card">
                <ul className="rating">
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
                <h3>Highly professional</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros interd nulla, ut commodo
                  diam libero vitae erat.
                </p>
                <div className="clients-profile">
                  <img src={clientImg3} alt="Image" />
                  <h3>Carlia Devid</h3>
                  <p>Business Developer</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <img src={shape32} className="testimonial-shape-1" alt="Image" />
        </div>
      </div>
    </>
  )
}

export default Testimonials
