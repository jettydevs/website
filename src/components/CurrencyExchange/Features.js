import * as React from "react"

import featureImg from "../../images/features/features-4.png"

const Features = () => {
  return (
    <>
      <div id="features" className="exchange-features-area ptb-100">
        <div className="container">
          <div className="exchange-section-title">
            <span>Our Features</span>
            <h2>The Most Popular Currency Tools</h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="exchange-features-image pr-20">
                <img src={featureImg} alt="Image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="exchange-features-content pl-20">
                <div 
                  className="exchange-features-card"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200" 
                  data-aos-once="true"
                >
                  <div className="top-content">
                    <span>01</span>
                    <h3>Money Transfer</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet cons ect etur adip iscing psu
                    llana adip integer sagittis conse ctetur adipi scing elit.
                  </p>
                  <a href="#">
                    Send Money <i className="flaticon-right-arrow-1"></i>
                  </a>
                </div>

                <div 
                  className="exchange-features-card"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400" 
                  data-aos-once="true"
                >
                  <div className="top-content">
                    <span>02</span>
                    <h3>Currency Charts</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet cons ect etur adip iscing psu
                    llana adip integer sagittis conse ctetur adipi scing elit.
                  </p>
                  <a href="#">
                    View Chart <i className="flaticon-right-arrow-1"></i>
                  </a>
                </div>

                <div 
                  className="exchange-features-card"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="600" 
                  data-aos-once="true"
                >
                  <div className="top-content">
                    <span>03</span>
                    <h3>Create Account</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet cons ect etur adip iscing psu
                    llana adip integer sagittis conse ctetur adipi scing elit.
                  </p>
                  <a href="#">
                    Get Started <i className="flaticon-right-arrow-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
