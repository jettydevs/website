import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import { Link } from "gatsby"

import serviceImg1 from "../../images/services/services-4.jpg"
import serviceImg2 from "../../images/services/services-5.jpg"
import serviceImg3 from "../../images/services/services-6.jpg"

const Services = () => {
  return (
    <>
      <div id="services" className="consulting-services-area ptb-100">
        <div className="container">
          <div className="consulting-section-title">
            <span>OUR Services</span>
            <h2>We're Ready To Share Our Services with You</h2>
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
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination]}
            className="consulting-services-slider"
            data-aos="zoom-in-left"
            data-aos-duration="1200"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <SwiperSlide>
              <div className="consulting-services-card">
                <div className="services-img">
                  <img src={serviceImg1} alt="Image" />
                  <div className="icon">
                    <i className="flaticon-project-management"></i>
                  </div>
                </div>
                <div className="services-content">
                  <h3>Strategy Management</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                  </p>
                  <Link to="/service-details" className="read-more-2">
                    Read More <i className="flaticon-right-arrow-1"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="consulting-services-card">
                <div className="services-img">
                  <img src={serviceImg2} alt="Image" />
                  <div className="icon">
                    <i className="flaticon-analysis"></i>
                  </div>
                </div>
                <div className="services-content">
                  <h3>Business Analysis</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                  </p>
                  <Link to="/service-details" className="read-more-2">
                    Read More <i className="flaticon-right-arrow-1"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="consulting-services-card">
                <div className="services-img">
                  <img src={serviceImg3} alt="Image" />
                  <div className="icon">
                    <i className="flaticon-content-management"></i>
                  </div>
                </div>
                <div className="services-content">
                  <h3>Content Management</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                  </p>
                  <Link to="/service-details" className="read-more-2">
                    Read More <i className="flaticon-right-arrow-1"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="consulting-services-card">
                <div className="services-img">
                  <img src={serviceImg2} alt="Image" />
                  <div className="icon">
                    <i className="flaticon-analysis"></i>
                  </div>
                </div>
                <div className="services-content">
                  <h3>Business Analysis</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                  </p>
                  <Link to="/service-details" className="read-more-2">
                    Read More <i className="flaticon-right-arrow-1"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Services
