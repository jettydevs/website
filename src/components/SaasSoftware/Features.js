import * as React from "react"

import featureIcon1 from "../../images/svg-icon/saas.svg"
import featureIcon2 from "../../images/svg-icon/saas2.svg"
import featureIcon3 from "../../images/svg-icon/cloud.svg"

import shape7 from "../../images/shape/shape-7.png"

const Features = () => {
  return (
    <>
      <div id="features" className="sass-features-area pt-100 pb-70">
        <div className="container">
          <div className="sass-section-title">
            <span>Features</span>
            <h2>Utilize Your Marketing Data Anywhere</h2>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300" 
              data-aos-once="true"
            >
              <div className="sass-single-features-card">
                <img src={featureIcon1} alt="Icon" />
                <h3>Trusted Grow Solutions</h3>
                <p>
                  Duis cursus, mi quis viverra ornare, erosrdum nulla ut diam
                  libero vitae erat’ene faucibus nibh et justo{" "}
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="600" 
              data-aos-once="true"
            >
              <div className="sass-single-features-card">
                <img src={featureIcon2} alt="Icon" />
                <h3>Digital Data Analytics</h3>
                <p>
                  Duis cursus, mi quis viverra ornare, erosrdum nulla ut diam
                  libero vitae erat’ene faucibus nibh et justo{" "}
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="900" 
              data-aos-once="true"
            >
              <div className="sass-single-features-card">
                <img src={featureIcon3} alt="Icon" />
                <h3>Strategy Buildup Software</h3>
                <p>
                  Duis cursus, mi quis viverra ornare, erosrdum nulla ut diam
                  libero vitae erat’ene faucibus nibh et justo{" "}
                </p>
              </div>
            </div>
          </div>

          {/* Shape Image */}
          <img
            src={shape7}
            className="features-shape"
            alt="Image"
          />
        </div>
      </div>
    </>
  )
}

export default Features
