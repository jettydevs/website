import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper"

import clientImg1 from "../../images/reviews/reviews-5.png"
import clientImg2 from "../../images/reviews/reviews-6.png"

import shape23 from "../../images/shape/shape-23.png"
import shape24 from "../../images/shape/shape-24.png"
import shape19 from "../../images/shape/shape-19.png"

const Testimonials = () => {
  return (
    <>
      <div id="testimonials" className="agency-testimonial-area pb-100">
        <div className="container">
          <div className="agency-section-title">
            <span>Testimonials</span>
            <h2>Hear What Our Amazing Customers Say</h2>
          </div>

          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              991: {
                slidesPerView: 2,
              },
            }}
            className="agency-testimonial-slider"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <SwiperSlide>
              <div className="agency-testimonial-card">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <div className="testimonial-content">
                      <div className="rating-star">
                        <ul>
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
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consec tetur adipiscing elit
                        et fames maecen amet est scelerisque lectus tortor sit
                      </p>
                      <h3>John Carter</h3>
                      <span>CEO at Company</span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="testimonial-image">
                      <img src={clientImg1} alt="Image" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="agency-testimonial-card">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <div className="testimonial-content">
                      <div className="rating-star">
                        <ul>
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
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consec tetur adipiscing elit
                        et fames maecen amet est scelerisque lectus tortor sit
                      </p>
                      <h3>Alexander Hills</h3>
                      <span>CEO Twitter</span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="testimonial-image">
                      <img src={clientImg2} alt="Image" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="agency-testimonial-card">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <div className="testimonial-content">
                      <div className="rating-star">
                        <ul>
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
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consec tetur adipiscing elit
                        et fames maecen amet est scelerisque lectus tortor sit
                      </p>
                      <h3>John Carter</h3>
                      <span>CEO at Company</span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="testimonial-image">
                      <img src={clientImg1} alt="Image" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Shape Images */}
          <img src={shape23} className="testimonial-shape-1" alt="Image" />
          <img src={shape24} className="testimonial-shape-2" alt="Image" />
          <img src={shape19} className="testimonial-shape-3" alt="Image" />
        </div>
      </div>
    </>
  )
}

export default Testimonials
