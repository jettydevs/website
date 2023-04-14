import * as React from "react"

import icon1 from "../../images/choose/choose-8.png"
import icon2 from "../../images/choose/choose-9.png"
import icon3 from "../../images/choose/choose-10.png"
import icon4 from "../../images/choose/choose-11.png"

const WhyChooseUs = () => {
  return (
    <>
      <div className="exchainge-choose-area pt-100 pb-70">
        <div className="container">
          <div className="exchange-section-title">
            <span>Why Choose Us</span>
            <h2>Why Klane For You Currency Exchange?</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div 
                className="exchange-choose-card"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200" 
                data-aos-once="true"
              >
                <img src={icon1} alt="Iamge" />
                <h3>Safe & Secure</h3>
                <p>
                  Lorem ipsum dolor sit amet con adipiscing elit donec mio eleet
                  convallis odio con consec{" "}
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div 
                className="exchange-choose-card"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400" 
                data-aos-once="true"
              >
                <img src={icon2} alt="Iamge" />
                <h3>Quick & Transparent</h3>
                <p>
                  Lorem ipsum dolor sit amet con adipiscing elit donec mio eleet
                  convallis odio con consec{" "}
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div 
                className="exchange-choose-card"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="600" 
                data-aos-once="true"
              >
                <img src={icon3} alt="Iamge" />
                <h3>Best Rates</h3>
                <p>
                  Lorem ipsum dolor sit amet con adipiscing elit donec mio eleet
                  convallis odio con consec{" "}
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div 
                className="exchange-choose-card"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="800" 
                data-aos-once="true"
              >
                <img src={icon4} alt="Iamge" />
                <h3>Premium Service</h3>
                <p>
                  Lorem ipsum dolor sit amet con adipiscing elit donec mio eleet
                  convallis odio con consec{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyChooseUs
