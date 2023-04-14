import * as React from "react"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import bannerImg1 from "../../images/banner/banner-img-5.jpg"
import bannerImg2 from "../../images/banner/banner-img-6.jpg"
import bannerImg3 from "../../images/banner/banner-img-7.jpg"

const MainBanner = () => {
  return (
    <>
      <div id="home" className="photography-banner-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="photography-banner-content">
                <span>ESTD 2012</span>
                <h1>Capturing Lasting Memories</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua. Ut enim ad minim
                  venia mquis conse ctetur adipisc.
                </p>
                <Link to="#about">
                  More About Me<i className="flaticon-right-arrow-3"></i>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <Swiper 
                navigation={true} 
                autoplay={{
                  delay: 6000,
                  pauseOnMouseEnter: true,
                }}
                modules={[Navigation, Autoplay]} 
                className="photography-banner-img"
              >
                <SwiperSlide>
                  <img src={bannerImg1} alt="Image" className="w-100" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={bannerImg2} alt="Image" className="w-100" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={bannerImg3} alt="Image" className="w-100" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainBanner
