import React, { useState } from "react"
import FsLightbox from "fslightbox-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

import clientImg1 from "../../images/reviews/reviews-1.png"
import clientImg2 from "../../images/reviews/reviews-2.png"
import clientImg3 from "../../images/reviews/reviews-3.png"

import clientReviewBigImg from "../../images/reviews/reviews-img-4.png"

const ClientReviews = () => {
  const [toggler, setToggler] = useState(false)
  return (
    <>
      <div id="reviews" className="app-reviews-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="app-reviews-content">
                <div className="app-reviews-section">
                  <span>Client Reviews</span>
                  <h2>See What Other People Are Saying</h2>
                </div>

                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 6000,
                    pauseOnMouseEnter: true,
                  }}
                  modules={[Pagination, Autoplay]}
                  className="app-reviews-slider"
                >
                  <SwiperSlide>
                    <div className="app-reviews-box">
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
                        Lorem ipsum dolor sit amet, consec tetur adipiscing
                        elit. Ut elit tellus luc tus nec ullamcorper mattis,
                        pulvinar dapibus leo. Lorem ipsum dolor sit amet, consec
                        tetur adipiscing elit. Ut elit tellus.
                      </p>
                      <div className="clients-profile">
                        <div className="clients-img">
                          <img src={clientImg1} alt="Image" />
                        </div>
                        <h3>Gabriele Riccardo</h3>
                        <p>CEO & Founder Abc</p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="app-reviews-box">
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
                        Lorem ipsum dolor sit amet, consec tetur adipiscing
                        elit. Ut elit tellus luc tus nec ullamcorper mattis,
                        pulvinar dapibus leo. Lorem ipsum dolor sit amet, consec
                        tetur adipiscing elit. Ut elit tellus.
                      </p>
                      <div className="clients-profile">
                        <div className="clients-img">
                          <img src={clientImg2} alt="Image" />
                        </div>
                        <h3>Tabriele Piccardo</h3>
                        <p>React Developer</p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="app-reviews-box">
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
                            <i className="flaticon-star-1"></i>
                          </li>
                        </ul>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consec tetur adipiscing
                        elit. Ut elit tellus luc tus nec ullamcorper mattis,
                        pulvinar dapibus leo. Lorem ipsum dolor sit amet, consec
                        tetur adipiscing elit. Ut elit tellus.
                      </p>
                      <div className="clients-profile">
                        <div className="clients-img">
                          <img src={clientImg3} alt="Image" />
                        </div>
                        <h3>Zabriele Kiccardo</h3>
                        <p>Gatsby Developer</p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="app-reviews-img"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
                data-aos-once="true"
              >
                <img src={clientReviewBigImg} alt="Image" />
                <div className="video-player">
                  <div className="icon">
                    <div
                      className="play-btn"
                      onClick={() => setToggler(!toggler)}
                    >
                      <i className="flaticon-play-button-arrowhead"></i>Watch
                      Video
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />
    </>
  )
}

export default ClientReviews
