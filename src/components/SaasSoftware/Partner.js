import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper";

import partnerImg1 from "../../images/partner/partner1.png"
import partnerImg2 from "../../images/partner/partner2.png"
import partnerImg3 from "../../images/partner/partner3.png"
import partnerImg4 from "../../images/partner/partner4.png"
import partnerImg5 from "../../images/partner/partner5.png"
import partnerImg6 from "../../images/partner/partner6.png"
import partnerImg7 from "../../images/partner/partner7.png"
import partnerImg8 from "../../images/partner/partner8.png"

const Partner = () => {
  return (
    <>
      <div className="sass-partner-area pt-100">
        <div className="container">
          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            className="partner-slider"
          >
            <SwiperSlide>
              <div className="partner-logo">
                <img src={partnerImg1} alt="Image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-logo">
                <img src={partnerImg2} alt="Image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-logo">
                <img src={partnerImg3} alt="Image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-logo">
                <img src={partnerImg4} alt="Image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-logo">
                <img src={partnerImg5} alt="Image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-logo">
                <img src={partnerImg6} alt="Image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-logo">
                <img src={partnerImg7} alt="Image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-logo">
                <img src={partnerImg8} alt="Image" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Partner
