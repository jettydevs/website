import * as React from "react"
import { Link } from "gatsby"

import serviceImg1 from "../../images/services/services-7.jpg"
import serviceImg2 from "../../images/services/services-8.jpg"
import serviceImg3 from "../../images/services/services-9.jpg"
import serviceImg4 from "../../images/services/services-10.jpg"

import shape33 from "../../images/shape/shape-33.png"

const Services = () => {
  return (
    <>
      <div id="services" className="photography-services-area pt-100 pb-70">
        <div className="container">
          <div className="photography-section-title">
            <span>WHAT I DO</span>
            <h2>My Services</h2>
          </div>

          <div className="row justify-content-center photography-services-list">
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="photograpy-services-card">
                <div className="services-img">
                  <img
                    src={serviceImg1}
                    alt="Image"
                  />
                </div>
                <div className="services-content">
                  <span>Portrait</span>
                  <h2>Portrait Photography</h2>
                  <Link to="#" className="icon-btn">
                    <i className="flaticon-right-arrow-3"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <div className="photograpy-services-card">
                <div className="services-img">
                  <img
                    src={serviceImg2}
                    alt="Image"
                  />
                </div>
                <div className="services-content">
                  <span>Newborn</span>
                  <h2>Newborn Photography</h2>
                  <Link to="#" className="icon-btn">
                    <i className="flaticon-right-arrow-3"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="600"
              data-aos-once="true"
            >
              <div className="photograpy-services-card">
                <div className="services-img">
                  <img
                    src={serviceImg3}
                    alt="Image"
                  />
                </div>
                <div className="services-content">
                  <span>Wedding</span>
                  <h2>Wedding Photography</h2>
                  <Link to="#" className="icon-btn">
                    <i className="flaticon-right-arrow-3"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="800"
              data-aos-once="true"
            >
              <div className="photograpy-services-card">
                <div className="services-img">
                  <img
                    src={serviceImg4}
                    alt="Image"
                  />
                </div>
                <div className="services-content">
                  <span>Travel</span>
                  <h2>Travel Photography</h2>
                  <Link to="#" className="icon-btn">
                    <i className="flaticon-right-arrow-3"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <img
            src={shape33}
            className="services-shape-1"
            alt="Image"
          />
        </div>
      </div>
    </>
  )
}

export default Services
