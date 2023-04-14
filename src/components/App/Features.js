import * as React from "react"

const Features = () => {
  return (
    <>
      <div id="features" className="app-features-area pt-100 pb-70">
        <div className="container">
          <div className="app-section-title">
            <span>Our App Feature</span>
            <h2>Awesome Features</h2>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200" 
              data-aos-once="true"
            >
              <div className="single-app-features-box">
                <div className="features-content">
                  <i className="flaticon-return"></i>
                  <h3>Easy to Edit</h3>
                  <p>Lorem ipsum dolor sit cons ectetur adipiscing</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400" 
              data-aos-once="true"
            >
              <div className="single-app-features-box">
                <div className="features-content">
                  <i className="flaticon-security"></i>
                  <h3>Fully Secure</h3>
                  <p>Lorem ipsum dolor sit cons ectetur adipiscing</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="600" 
              data-aos-once="true"
            >
              <div className="single-app-features-box">
                <div className="features-content">
                  <i className="flaticon-cogwheel"></i>
                  <h3>Manage User</h3>
                  <p>Lorem ipsum dolor sit cons ectetur adipiscing</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="800" 
              data-aos-once="true"
            >
              <div className="single-app-features-box">
                <div className="features-content">
                  <i className="flaticon-return"></i>
                  <h3>Free Trial</h3>
                  <p>Lorem ipsum dolor sit cons ectetur adipiscing</p>
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
