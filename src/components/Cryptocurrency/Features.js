import * as React from "react"

import featureImg1 from "../../images/features/features-1.png"
import featureImg2 from "../../images/features/features-2.png"
import featureImg3 from "../../images/features/features-3.png"

const Features = () => {
  return (
    <>
      <div
        id="features"
        className="currency-features-area pt-100 pb-70 bg-color-1c2029"
      >
        <div className="container">
          <div className="currency-section-title">
            <span>Our Features</span>
            <h2>Best Place To Invest</h2>
          </div>

          <div className="row justify-content-center">
            <div 
              className="col-lg-4 col-md-6" 
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200" 
              data-aos-once="true"
            >
              <div className="currency-featured-card">
                <div className="features-img">
                  <img
                    src={featureImg1}
                    alt="Image"
                  />
                </div>
                <h3>Security First</h3>
                <p>
                  Lorem ipsum dolor sit amet consecter adpscing sed do eiusmod
                  ut labore et dolor magna aliqua enim ad minim venia
                </p>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6" 
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400" 
              data-aos-once="true"
            >
              <div className="currency-featured-card">
                <div className="features-img">
                  <img
                    src={featureImg2}
                    alt="Image"
                  />
                </div>
                <h3>Fast Withdrawals</h3>
                <p>
                  Lorem ipsum dolor sit amet consecter adpscing sed do eiusmod
                  ut labore et dolor magna aliqua enim ad minim venia
                </p>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6" 
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="600" 
              data-aos-once="true"
            >
              <div className="currency-featured-card">
                <div className="features-img">
                  <img
                    src={featureImg3}
                    alt="Image"
                  />
                </div>
                <h3>24/7 Support</h3>
                <p>
                  Lorem ipsum dolor sit amet consecter adpscing sed do eiusmod
                  ut labore et dolor magna aliqua enim ad minim venia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
