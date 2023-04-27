import React, { useState } from "react"
import FsLightbox from "fslightbox-react"

import videoThumbImg from "../../images/choose/choose-7.jpg"

import shapeImg1 from "../../images/choose/choose-shape-3.png"
import shapeImg2 from "../../images/about/about-shape-3.png"

const WhyChooseUs = () => {
  const [toggler, setToggler] = useState(false)
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="start-consuling-choose ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="consulting-choose-content pr-20">
                <div className="choose-content-title">
                  <span>Why We Are The Best?</span>
                  <h2>We Have Many Reasons Why Choose Us</h2>
                </div>
                <p>
                  Facilisis vestibulum aliquet vulputate ut pretium. className
                  luctus torquent amet bibendum quisque himenaeos. Parturient
                  malesuada dui.
                </p>

                <div className="row">
                  <div
                    className="col-lg-6 col-sm-6"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                    data-aos-once="true"
                  >
                    <div className="choose-counter-card">
                      <div className="counter-content">
                        <div className="icon">
                          <i className="flaticon-clipboard"></i>
                        </div>
                        <h1>6060</h1>
                        <p>Project Completed</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-6 col-sm-6"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                    data-aos-once="true"
                  >
                    <div className="choose-counter-card">
                      <div className="counter-content">
                        <div className="icon">
                          <i className="flaticon-guru"></i>
                        </div>
                        <h1>332</h1>
                        <p>Expert Consultant</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-6 col-sm-6"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="600"
                    data-aos-once="true"
                  >
                    <div className="choose-counter-card">
                      <div className="counter-content">
                        <div className="icon">
                          <i className="flaticon-strategy"></i>
                        </div>
                        <h1>594</h1>
                        <p>Business Strategies</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-6 col-sm-6"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="800"
                    data-aos-once="true"
                  >
                    <div className="choose-counter-card">
                      <div className="counter-content">
                        <div className="icon">
                          <i className="flaticon-happy"></i>
                        </div>
                        <h1>2320</h1>
                        <p>Happy Customers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="consult-choose-img pl-20">
                <img 
                  src={videoThumbImg} 
                  alt="Image" 
                />

                <div className="icon">
                  <div className="play-btn" onClick={() => setToggler(!toggler)}>
                    <i className="flaticon-play-button-arrowhead"></i>
                  </div>
                </div>

                {/* Shape Images */}
                <img
                  src={shapeImg1}
                  className="choose-shape-1"
                  alt="Image"
                />
                <img
                  src={shapeImg2}
                  className="choose-shape-2"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyChooseUs
