import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"
import { Link } from "gatsby"

import projectsImg1 from "../../images/portfolio/portfolio-14.jpg"
import projectsImg2 from "../../images/portfolio/portfolio-15.jpg"
import projectsImg3 from "../../images/portfolio/portfolio-16.jpg"
import projectsImg4 from "../../images/portfolio/portfolio-17.jpg"
import projectsImg5 from "../../images/portfolio/portfolio-18.jpg"

const Projects = () => {
  return (
    <>
      <div id="projects" className="political-project-area ptb-100">
        <div className="container-fluid">
          <div className="political-section-title">
            <span>OUR LATEST PROJECTS</span>
            <h2>Key Part Of Our Diverse Movement</h2>
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
              1200: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="political-project-slider"
          >
            <SwiperSlide>
              <div className="political-project-card">
                <div className="img">
                  <img src={projectsImg1} alt="Image" />
                </div>
                <div className="project-content">
                  <span>Education</span>
                  <h3>Asylum & Migration</h3>
                  <div className="link-icon">
                    <Link to="#">
                      <i className="flaticon-next"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="political-project-card">
                <div className="img">
                  <img src={projectsImg2} alt="Image" />
                </div>
                <div className="project-content">
                  <span>Education</span>
                  <h3>Equality & Solidarity</h3>
                  <div className="link-icon">
                    <Link to="#">
                      <i className="flaticon-next"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="political-project-card">
                <div className="img">
                  <img src={projectsImg3} alt="Image" />
                </div>
                <div className="project-content">
                  <span>Pennsylvania</span>
                  <h3>Gender and Future</h3>
                  <div className="link-icon">
                    <Link to="#">
                      <i className="flaticon-next"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="political-project-card">
                <div className="img">
                  <img src={projectsImg4} alt="Image" />
                </div>
                <div className="project-content">
                  <span>Education</span>
                  <h3>Asylum & Migration</h3>
                  <div className="link-icon">
                    <Link to="#">
                      <i className="flaticon-next"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="political-project-card">
                <div className="img">
                  <img src={projectsImg5} alt="Image" />
                </div>
                <div className="project-content">
                  <span>Education</span>
                  <h3>Equality & Solidarity</h3>
                  <div className="link-icon">
                    <Link to="#">
                      <i className="flaticon-next"></i>
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

export default Projects
