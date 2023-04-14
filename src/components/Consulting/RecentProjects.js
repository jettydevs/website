import * as React from "react"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import portfolioImg1 from "../../images/portfolio/portfolio-5.jpg"
import portfolioImg2 from "../../images/portfolio/portfolio-6.jpg"
import portfolioImg3 from "../../images/portfolio/portfolio-7.jpg"

const RecentProjects = () => {
  return (
    <>
      <div id="portfolio" className="consult-project-area pt-100 pb-70">
        <div className="container">
          <div className="consulting-section-title">
            <span>Recent Projects</span>
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
            className="consulting-project-slider"
          >
            <SwiperSlide>
              <div className="consulting-project-card">
                <div className="image">
                  <img
                    src={portfolioImg1}
                    alt="Image"
                  />
                </div>
                <div className="project-content">
                  <div className="d-table">
                    <div className="d-table-cell">
                      <h3>Business Strategy</h3>
                      <p>Consulting</p>
                      <Link to="/project-details" className="view">
                        <i className="ri-arrow-right-line"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="consulting-project-card">
                <div className="image">
                  <img
                    src={portfolioImg2}
                    alt="Image"
                  />
                </div>
                <div className="project-content">
                  <div className="d-table">
                    <div className="d-table-cell">
                      <h3>Website Development</h3>
                      <p>Website</p>
                      <Link to="/project-details" className="view">
                        <i className="ri-arrow-right-line"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="consulting-project-card">
                <div className="image">
                  <img
                    src={portfolioImg3}
                    alt="Image"
                  />
                </div>
                <div className="project-content">
                  <div className="d-table">
                    <div className="d-table-cell">
                      <h3>Marketing & Reporting</h3>
                      <p>Marketing</p>
                      <Link to="/project-details" className="view">
                        <i className="ri-arrow-right-line"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="consulting-project-card">
                <div className="image">
                  <img
                    src={portfolioImg2}
                    alt="Image"
                  />
                </div>
                <div className="project-content">
                  <div className="d-table">
                    <div className="d-table-cell">
                      <h3>Mobile App Development</h3>
                      <p>Development</p>
                      <Link to="/project-details" className="view">
                        <i className="ri-arrow-right-line"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default RecentProjects
