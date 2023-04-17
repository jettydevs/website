import * as React from "react"
import { Link } from "gatsby"

import bannerMainImg from "../../images/banner/banner-img-4.png"

import quoteImg from "../../images/quote-img.png"
import bannerBGImg from "../../images/banner/banner-bg-3.png"
import shape30 from "../../images/shape/shape-30.png"
import shape31 from "../../images/shape/shape-31.png"

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
                <img src={quoteImg} alt="Image" />

                <div className="careear">
                  <div className="content">
                    <div className="icon">
                      <i className="flaticon-idea"></i>
                    </div>
                    <p>Transform Your Digital Presence with Our Web Development Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainBanner
