import * as React from "react"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

import servicesImg1 from "../../images/services/services-1.jpg"
import servicesImg2 from "../../images/services/services-2.jpg"
import servicesImg3 from "../../images/services/services-3.jpg"

import shape1 from "../../images/services/shape-1.png"

const Services = () => {
  return (
    <>
      <div
        id="services"
        className="agency-services-area bg-color-f9f5f4 ptb-100"
      >
        <div className="container">
          <div className="agency-section-title">
            <span>Our Services</span>
            <h2>Our Best Services</h2>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              1: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="services-slider"
          >
            <SwiperSlide>
              <div className="agency-single-services-card">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <div className="services-img">
                      <img src={servicesImg1} alt="Image" />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="services-content">
                      <div className="icon">
                        <i className="flaticon-cubes"></i>
                      </div>
                      <h3>UX & Product Design</h3>
                      <p>
                        Lorem ipsum dolor sit amet, ectetur do pis cing elit.
                        Susp endisse varius enim eros elementum tristique.
                      </p>

                      <Link to="/service-details" className="read-btn">
                        Read More<i className="flaticon-right-arrow-3"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <img src={shape1} className="services-shape-1" alt="Image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="agency-single-services-card">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <div className="services-img">
                      <img src={servicesImg2} alt="Image" />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="services-content">
                      <div className="icon">
                        <i className="flaticon-web-development"></i>
                      </div>
                      <h3>App Development</h3>
                      <p>
                        Lorem ipsum dolor sit amet, ectetur do pis cing elit.
                        Susp endisse varius enim eros elementum tristique.
                      </p>
                      <Link to="/service-details" className="read-btn">
                        Read More<i className="flaticon-right-arrow-3"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <img src={shape1} className="services-shape-1" alt="Image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="agency-single-services-card">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <div className="services-img">
                      <img src={servicesImg3} alt="Image" />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="services-content">
                      <div className="icon">
                        <i className="flaticon-aim"></i>
                      </div>
                      <h3>Social Media Marketing</h3>
                      <p>
                        Lorem ipsum dolor sit amet, ectetur do pis cing elit.
                        Susp endisse varius enim eros elementum tristique.
                      </p>
                      <Link to="/service-details" className="read-btn">
                        Read More<i className="flaticon-right-arrow-3"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <img src={shape1} className="services-shape-1" alt="Image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="agency-single-services-card">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <div className="services-img">
                      <img src={servicesImg2} alt="Image" />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="services-content">
                      <div className="icon">
                        <i className="flaticon-web-development"></i>
                      </div>
                      <h3>App Development</h3>
                      <p>
                        Lorem ipsum dolor sit amet, ectetur do pis cing elit.
                        Susp endisse varius enim eros elementum tristique.
                      </p>
                      <Link to="/service-details" className="read-btn">
                        Read More<i className="flaticon-right-arrow-3"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <img src={shape1} className="services-shape-1" alt="Image" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Services
