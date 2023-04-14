import * as React from "react"
import { Link } from "gatsby"

import aboutImg from "../../images/about/about-img-2.jpg"
import smileIcon from "../../images/svg-icon/icon-4.png"
import aboutImg3 from "../../images/about/about-img-3.png"

import shape1 from "../../images/about/about-shape-1.png"
import shape2 from "../../images/about/about-shape-2.png"
import shape3 from "../../images/about/about-shape-3.png"

const AboutUs = () => {
  return (
    <>
      <div 
        id="about" 
        className="consulting-about-area bg-color-f9f5f4 ptb-100"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="consulting-about-image pr-20">
                <img 
                  src={aboutImg} 
                  alt="Image" 
                />

                <div className="customer">
                  <div className="customer-content">
                    <img src={smileIcon} alt="Image" />
                    <h1>+560</h1>
                    <p>Happy Customer</p>
                  </div>
                </div>

                <img
                  src={shape3}
                  className="about-shape-3"
                  alt="Image"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="consulting-about-content pl-20">
                <div className="consulting-about-title">
                  <span>ABOUT US</span>
                  <h2>We Combine Technology With Business Ideas</h2>
                </div>
                <p>
                  Facilisis vestibulum aliquet vulputate ut pretium. className
                  luctus torquent amet bibendum quisque himenaeos. Parturient
                  malesuada dui accumsan monte tempor augue curae amet per
                  pretium. className luctus torque.
                </p>

                <div className="about-profile">
                  <div className="img">
                    <img
                      src={aboutImg3}
                      alt="Image"
                    />
                  </div>
                  <h3>Ahel Natasha</h3>
                  <p>Chairman & Founder Klane</p>
                </div>

                <Link to="/about-us" className="consulting-default-btn btn">
                  Discover More <i className="flaticon-right-arrow-3"></i>
                </Link>

                <Link to="#team" className="download-btn">
                  Download Our Latest Presentation{" "}
                  <i className="flaticon-downloading"></i>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Shape Images */}
          <img
            src={shape1}
            className="about-shape-1"
            alt="Image"
          />
          <img
            src={shape2}
            className="about-shape-2"
            alt="Image"
          />
        </div>
      </div>
    </>
  )
}

export default AboutUs
