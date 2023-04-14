import * as React from "react"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import portfolioImg1 from "../../images/portfolio/portfolio-1.jpg"
import portfolioImg2 from "../../images/portfolio/portfolio-2.jpg"
import portfolioImg3 from "../../images/portfolio/portfolio-3.jpg"
import portfolioImg4 from "../../images/portfolio/portfolio-4.jpg"

const Portfolio = () => {
  return (
    <>
      <div id="portfolio" className="portfolio-area bg-color-f9f5f4 ptb-100">
        <div className="container-fluid">
          <div className="agency-section-title">
            <span>Our Portfolio</span>
            <h2>Some Of Our Finest Work</h2>
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
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            className="portfolio-slider"
          >
            <SwiperSlide>
              <div className="portfolio-card">
                <div className="portfolio-img">
                  <img
                    src={portfolioImg1}
                    alt="Image"
                  />
                  <div className="caption-two">
                    <h3>Buzzworthy Studio</h3>
                    <p>
                      Lorem ipsum dolor sit amet ecter do pis cing elit. Susp
                      endisse
                    </p>
                    <Link to="/project-details">
                      Read More <i className="flaticon-right-arrow-3"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="portfolio-card">
                <div className="portfolio-img">
                  <img
                    src={portfolioImg2}
                    alt="Image"
                  />
                  <div className="caption-two">
                    <h3>UI/UX Design</h3>
                    <p>
                      Lorem ipsum dolor sit amet ecter do pis cing elit. Susp
                      endisse
                    </p>
                    <Link to="/project-details">
                      Read More <i className="flaticon-right-arrow-3"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="portfolio-card">
                <div className="portfolio-img">
                  <img
                    src={portfolioImg3}
                    alt="Image"
                  />
                  <div className="caption-two">
                    <h3>Web Development</h3>
                    <p>
                      Lorem ipsum dolor sit amet ecter do pis cing elit. Susp
                      endisse
                    </p>
                    <Link to="/project-details">
                      Read More <i className="flaticon-right-arrow-3"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="portfolio-card">
                <div className="portfolio-img">
                  <img
                    src={portfolioImg4}
                    alt="Image"
                  />
                  <div className="caption-two">
                    <h3>App Development</h3>
                    <p>
                      Lorem ipsum dolor sit amet ecter do pis cing elit. Susp
                      endisse
                    </p>
                    <Link to="/project-details">
                      Read More <i className="flaticon-right-arrow-3"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="portfolio-card">
                <div className="portfolio-img">
                  <img
                    src={portfolioImg1}
                    alt="Image"
                  />
                  <div className="caption-two">
                    <h3>Gatsby JS Development</h3>
                    <p>
                      Lorem ipsum dolor sit amet ecter do pis cing elit. Susp
                      endisse
                    </p>
                    <Link to="/project-details">
                      Read More <i className="flaticon-right-arrow-3"></i>
                    </Link>
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

export default Portfolio
