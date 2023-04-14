import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"

import partnerImg1 from "../../images/partner/partner1.png"
import partnerImg2 from "../../images/partner/partner2.png"
import partnerImg3 from "../../images/partner/partner3.png"
import partnerImg4 from "../../images/partner/partner4.png"
import partnerImg5 from "../../images/partner/partner5.png"
import partnerImg6 from "../../images/partner/partner6.png"
import partnerImg7 from "../../images/partner/partner7.png"
import partnerImg8 from "../../images/partner/partner8.png"

const Partners = () => {
  return (
    <>
      <div className="exchange-partners-area ptb-100">
        <div className="container">
          <div className="exchange-section-title">
            <span>Our Partners</span>
            <h2>We Are Trusted By The Best</h2>
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
              400: {
                slidesPerView: 2,
              },
              500: {
                slidesPerView: 3,
              },
              576: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 5,
              },
              992: {
                slidesPerView: 6,
              },
            }}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            className="exchange-partners-slider"
          >
            <SwiperSlide>
              <img src={partnerImg1} alt="Image" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={partnerImg2} alt="Image" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={partnerImg3} alt="Image" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={partnerImg4} alt="Image" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={partnerImg5} alt="Image" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={partnerImg6} alt="Image" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={partnerImg7} alt="Image" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={partnerImg8} alt="Image" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Partners
