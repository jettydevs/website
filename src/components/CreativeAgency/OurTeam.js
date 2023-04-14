import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

import teamImg1 from "../../images/team/team-5.png"
import teamImg2 from "../../images/team/team-6.png"
import teamImg3 from "../../images/team/team-7.png"

import shape19 from "../../images/shape/shape-19.png"
import shape20 from "../../images/shape/shape-20.png"

const OurTeam = () => {
  return (
    <>
      <div className="agency-team-area ptb-100">
        <div className="container">
          <div className="agency-section-title">
            <span>Our Team</span>
            <h2>Talented Member Ready To Start Your Project</h2>
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
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="agency-team-slider"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <SwiperSlide>
              <div className="agency-team-card">
                <div className="team-content">
                  <div className="team-image">
                    <img src={teamImg1} alt="Image" />
                  </div>
                  <div className="team-caption">
                    <h3>Masko Holder</h3>
                    <p>Designer</p>
                    <div className="social-links">
                      <ul>
                        <li>
                          <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-facebook-1"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-twitter-3"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://google.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-google-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://linkedin.com/?lang=en"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-linkedin-1"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="agency-team-card">
                <div className="team-content">
                  <div className="team-image">
                    <img src={teamImg2} alt="Image" />
                  </div>
                  <div className="team-caption">
                    <h3>Dawon Crisen</h3>
                    <p>Graphic Designer</p>
                    <div className="social-links">
                      <ul>
                        <li>
                          <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-facebook-1"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-twitter-3"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://google.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-google-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://linkedin.com/?lang=en"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-linkedin-1"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="agency-team-card">
                <div className="team-content">
                  <div className="team-image">
                    <img src={teamImg3} alt="Image" />
                  </div>
                  <div className="team-caption">
                    <h3>David Suarez</h3>
                    <p>Designer</p>
                    <div className="social-links">
                      <ul>
                        <li>
                          <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-facebook-1"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-twitter-3"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://google.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-google-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://linkedin.com/?lang=en"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-linkedin-1"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="agency-team-card">
                <div className="team-content">
                  <div className="team-image">
                    <img src={teamImg1} alt="Image" />
                  </div>
                  <div className="team-caption">
                    <h3>Dawon Crisen</h3>
                    <p>Graphic Designer</p>
                    <div className="social-links">
                      <ul>
                        <li>
                          <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-facebook-1"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-twitter-3"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://google.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-google-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://linkedin.com/?lang=en"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-linkedin-1"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="agency-team-card">
                <div className="team-content">
                  <div className="team-image">
                    <img src={teamImg2} alt="Image" />
                  </div>
                  <div className="team-caption">
                    <h3>Masko Holder</h3>
                    <p>Designer</p>
                    <div className="social-links">
                      <ul>
                        <li>
                          <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-facebook-1"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-twitter-3"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://google.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-google-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://linkedin.com/?lang=en"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-linkedin-1"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="agency-team-card">
                <div className="team-content">
                  <div className="team-image">
                    <img src={teamImg3} alt="Image" />
                  </div>
                  <div className="team-caption">
                    <h3>Dawon Crisen</h3>
                    <p>Graphic Designer</p>
                    <div className="social-links">
                      <ul>
                        <li>
                          <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-facebook-1"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-twitter-3"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://google.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-google-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://linkedin.com/?lang=en"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-linkedin-1"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Shape Images */}
          <img src={shape19} className="team-shape-1" alt="Image" />
          <img src={shape20} className="team-shape-2" alt="Image" />
        </div>
      </div>
    </>
  )
}

export default OurTeam
