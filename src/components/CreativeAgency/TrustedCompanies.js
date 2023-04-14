import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import partnerImg1 from "../../images/partner/partner9.png"
import partnerImg2 from "../../images/partner/partner10.png"
import partnerImg3 from "../../images/partner/partner11.png"
import partnerImg4 from "../../images/partner/partner12.png"
import partnerImg5 from "../../images/partner/partner13.png"

const TrustedCompanies = () => {
  return (
    <>
      <div className="trasted-content">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="trasted-text">
              <h3>Trusted by The Best Companies</h3>
            </div>
          </div>

          <div className="col-lg-8">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                500: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                992: {
                  slidesPerView: 5,
                },
              }}
              className="trasted-slider"
            >
              <SwiperSlide>
                <div className="trasted-logo">
                  <img src={partnerImg1} alt="Image" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="trasted-logo">
                  <img src={partnerImg2} alt="Image" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="trasted-logo">
                  <img src={partnerImg3}alt="Image" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="trasted-logo">
                  <img src={partnerImg4} alt="Image" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="trasted-logo">
                  <img src={partnerImg5} alt="Image" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default TrustedCompanies
