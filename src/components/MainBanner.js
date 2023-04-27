import * as React from "react"
import { Link } from "gatsby"

import quoteImg from "../images/quote-img.png"
import bannerBGImg from "../images/banner/banner-bg-3.png"

const MainBanner = () => {
  return (
    <>
      <div 
        id="home" 
        className="consulting-banner-area" 
        style={{ backgroundImage: `url(${bannerBGImg})` }}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="consulting-banner-content">
                <span>Expert Developers for Your Digital Projects</span>

                <h1>Designing Solutions that Drive Success</h1>

                <p>Our goal is to help you achieve your digital objectives with high-quality software solutions that are scalable, flexible and reliable. Partner with JettyDevs and unlock your full potential in the digital world.</p>

                <Link to="#contact" className="consulting-default-btn btn mr-20">
                  Let's Build Your Next Big Thing <i className="flaticon-right-arrow-3"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="consulting-banner-image"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
                data-aos-once="true"
              >
                <img style={{ padding: '100px' }} src={quoteImg} alt="Image" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainBanner
