import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

import clientImg1 from "../../images/reviews/reviews-1.png"
import clientImg2 from "../../images/reviews/reviews-2.png"
import clientImg3 from "../../images/reviews/reviews-3.png"

const ClientReviews = () => {
  return (
    <>
      <div id="testimonials" className="review-area ptb-100">
        <div className="container">
          <div className="sass-section-title">
            <span>Client Reviews</span>
            <h2>What Our Customer Say About Us</h2>
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
            className="reviews-slider"
          >
            <SwiperSlide>
              <div className="single-reviews-box mlr-5">
                <div className="reviews-top-content">
                  <div className="client-img">
                    <img src={clientImg1} alt="Image" />
                  </div>
                  <p>
                    Duis cursus, mi quis viverra ornare, eros dolor inte nulla
                    utimp erdiet libero vitae erat Aenean faucibus nibh et jus
                    cursus{" "}
                  </p>
                </div>
                <div className="reviews-bottom-content">
                  <div className="row align-items-center">
                    <div className="col-7">
                      <h3>Michael W. Kirwan</h3>
                      <p>User</p>
                    </div>
                    <div className="col-5">
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
                          <i className="flaticon-star-1"></i>
                        </li>
                        <li>
                          <i className="flaticon-star-1"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-reviews-box mlr-5">
                <div className="reviews-top-content">
                  <div className="client-img">
                    <img src={clientImg2} alt="Image" />
                  </div>
                  <p>
                    Duis cursus, mi quis viverra ornare, eros dolor inte nulla
                    utimp erdiet libero vitae erat Aenean faucibus nibh et jus
                    cursus{" "}
                  </p>
                </div>
                <div className="reviews-bottom-content">
                  <div className="row align-items-center">
                    <div className="col-7">
                      <h3>Alessandro</h3>
                      <p>User</p>
                    </div>
                    <div className="col-5">
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
                          <i className="flaticon-star-1"></i>
                        </li>
                        <li>
                          <i className="flaticon-star-1"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-reviews-box mlr-5">
                <div className="reviews-top-content">
                  <div className="client-img">
                    <img src={clientImg3} alt="Image" />
                  </div>
                  <p>
                    Duis cursus, mi quis viverra ornare, eros dolor inte nulla
                    utimp erdiet libero vitae erat Aenean faucibus nibh et jus
                    cursus{" "}
                  </p>
                </div>
                <div className="reviews-bottom-content">
                  <div className="row align-items-center">
                    <div className="col-7">
                      <h3>Gabriele Riccardo</h3>
                      <p>User</p>
                    </div>
                    <div className="col-5">
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
                          <i className="flaticon-star-1"></i>
                        </li>
                        <li>
                          <i className="flaticon-star-1"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-reviews-box mlr-5">
                <div className="reviews-top-content">
                  <div className="client-img">
                    <img src={clientImg1} alt="Image" />
                  </div>
                  <p>
                    Duis cursus, mi quis viverra ornare, eros dolor inte nulla
                    utimp erdiet libero vitae erat Aenean faucibus nibh et jus
                    cursus{" "}
                  </p>
                </div>
                <div className="reviews-bottom-content">
                  <div className="row align-items-center">
                    <div className="col-7">
                      <h3>Michael W. Kirwan</h3>
                      <p>User</p>
                    </div>
                    <div className="col-5">
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
                          <i className="flaticon-star-1"></i>
                        </li>
                        <li>
                          <i className="flaticon-star-1"></i>
                        </li>
                      </ul>
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

export default ClientReviews
