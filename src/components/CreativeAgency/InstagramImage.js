import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper"

import instagramImg1 from "../../images/instagram/instagram-img-1.jpg"
import instagramImg2 from "../../images/instagram/instagram-img-2.jpg"
import instagramImg3 from "../../images/instagram/instagram-img-3.jpg"
import instagramImg4 from "../../images/instagram/instagram-img-4.jpg"
import instagramImg5 from "../../images/instagram/instagram-img-5.jpg"
import instagramImg6 from "../../images/instagram/instagram-img-6.jpg"

const InstagramImage = () => {
  return (
    <>
      <div className="instagram-area pt-3 pb-3">
        <div className="container-fluid">
          <Swiper
            navigation={true}
            spaceBetween={20}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 0,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="instagram-slider"
          >
            <SwiperSlide>
              <div className="single-instagram-card">
                <div className="instagram-img">
                  <img src={instagramImg1} alt="Image" />
                  <div className="caption">
                    <a
                      href="https://instagram.com/?lang=en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="icon-and-text">
                        <i className="flaticon-instagram"></i>
                        <h3>Instagram</h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-instagram-card">
                <div className="instagram-img">
                  <img src={instagramImg2} alt="Image" />
                  <div className="caption">
                    <a
                      href="https://instagram.com/?lang=en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="icon-and-text">
                        <i className="flaticon-instagram"></i>
                        <h3>Instagram</h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-instagram-card">
                <div className="instagram-img">
                  <img src={instagramImg3} alt="Image" />
                  <div className="caption">
                    <a
                      href="https://instagram.com/?lang=en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="icon-and-text">
                        <i className="flaticon-instagram"></i>
                        <h3>Instagram</h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-instagram-card">
                <div className="instagram-img">
                  <img src={instagramImg4} alt="Image" />
                  <div className="caption">
                    <a
                      href="https://instagram.com/?lang=en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="icon-and-text">
                        <i className="flaticon-instagram"></i>
                        <h3>Instagram</h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-instagram-card">
                <div className="instagram-img">
                  <img src={instagramImg5} alt="Image" />
                  <div className="caption">
                    <a
                      href="https://instagram.com/?lang=en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="icon-and-text">
                        <i className="flaticon-instagram"></i>
                        <h3>Instagram</h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-instagram-card">
                <div className="instagram-img">
                  <img src={instagramImg6} alt="Image" />
                  <div className="caption">
                    <a
                      href="https://instagram.com/?lang=en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="icon-and-text">
                        <i className="flaticon-instagram"></i>
                        <h3>Instagram</h3>
                      </div>
                    </a>
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

export default InstagramImage
