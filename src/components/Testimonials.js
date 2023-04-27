import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

import shapeBgImg from "../../images/reviews/reviews-shape-1.png"

import clientImg1 from "../../images/reviews/reviews-1.png"
import clientImg2 from "../../images/reviews/reviews-2.png"
import clientImg3 from "../../images/reviews/reviews-3.png"

import shape1 from "../../images/about/about-shape-2.png"

const Testimonials = () => {
  return (
    <>
      <div 
        id="testimonials"
        className="consulting-testimonial-area pt-100 pb-100"  
        style={{ backgroundImage: `url(${shapeBgImg})` }}
      >
        <div className="container">
          <div className="consulting-section-title">
            <span>Testimonials</span>
            <h2>We've Got Customers Worldwide Read Their Reviews</h2>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
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
            className="consulting-testimonial-slider"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <SwiperSlide>
              <div className="consulting-testimonial-card">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusm data tempor incididunt ut labore et dolore magna.
                  Lorem ipsum do sit amet, consectetur adipiscing elit, sed do
                  eiusm data tempor incididunt ut labore et dolore magna.
                </p>
                <div className="cliens-profile">
                  <img src={clientImg1} alt="Image" />
                  <h3>Evgeny Gerasim</h3>
                  <p>Gatsby Developer</p>
                </div>
                <div className="icon">
                  <i className="flaticon-quote"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="consulting-testimonial-card">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusm data tempor incididunt ut labore et dolore magna.
                  Lorem ipsum do sit amet, consectetur adipiscing elit, sed do
                  eiusm data tempor incididunt ut labore et dolore magna.
                </p>
                <div className="cliens-profile">
                  <img src={clientImg2} alt="Image" />
                  <h3>Mantus Kerasim</h3>
                  <p>React Developer</p>
                </div>
                <div className="icon">
                  <i className="flaticon-quote"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="consulting-testimonial-card">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusm data tempor incididunt ut labore et dolore magna.
                  Lorem ipsum do sit amet, consectetur adipiscing elit, sed do
                  eiusm data tempor incididunt ut labore et dolore magna.
                </p>
                <div className="cliens-profile">
                  <img src={clientImg3} alt="Image" />
                  <h3>Jonisa Derasim</h3>
                  <p>Angular Developer</p>
                </div>
                <div className="icon">
                  <i className="flaticon-quote"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="consulting-testimonial-card">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusm data tempor incididunt ut labore et dolore magna.
                  Lorem ipsum do sit amet, consectetur adipiscing elit, sed do
                  eiusm data tempor incididunt ut labore et dolore magna.
                </p>
                <div className="cliens-profile">
                  <img src={clientImg2} alt="Image" />
                  <h3>Mantus Kerasim</h3>
                  <p>Vue.js Developer</p>
                </div>
                <div className="icon">
                  <i className="flaticon-quote"></i>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <img src={shape1} className="testimonial-shape-1" alt="Image" />
        </div>
      </div>
    </>
  )
}

export default Testimonials
