import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper";

import javascript from "../images/technologies/javascript.svg"
import html5 from "../images/technologies/html5.svg"
import css from "../images/technologies/css.svg"
import react from "../images/technologies/reactjs.svg"
import graphql from "../images/technologies/graphql.svg"
import node from "../images/technologies/nodejs.svg"
import aws from "../images/technologies/aws.svg"
import docker from "../images/technologies/docker.svg"

const Partner = () => {
  return (
    <>
      <div className="consulting-partner-area ptb-100">
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
            className="consulting-partner-slider"
          >
            <SwiperSlide>
              <div className="partner-card">
                <img src={javascript} alt="Javascript" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card">
                <img src={html5} alt="HTML 5" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card">
                <img src={css} alt="CSS" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card">
                <img src={react} alt="React" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card">
                <img src={graphql} alt="GraphQL" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card">
                <img src={node} alt="Node" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card">
                <img src={aws} alt="AWS" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card">
                <img src={docker} alt="Docker" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Partner
