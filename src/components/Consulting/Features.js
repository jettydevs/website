import * as React from "react"

const Features = () => {
  return (
    <>
      <div id="features" className="consulting-features-area ptb-100">
        <div className="container">
          <div className="consulting-section-title">
            <span>WELCOME</span>
            <h2>We Are An Consulting Company</h2>
          </div>

          <div
            className="features-content"
            data-aos="flip-up"
            data-aos-duration="1200"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div className="consulting-features-card">
                  <div className="icon">
                    <i className="flaticon-money-management"></i>
                  </div>
                  <h3>Banking Management</h3>
                  <p>
                    Sedut perspiciatis unde omnis iste natus error sit voluptat
                    em accusan
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="consulting-features-card">
                  <div className="icon">
                    <i className="flaticon-technical-support-1"></i>
                  </div>
                  <h3>Financial Consultancy</h3>
                  <p>
                    Sedut perspiciatis unde omnis iste natus error sit voluptat
                    em accusan
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="consulting-features-card">
                  <div className="icon">
                    <i className="flaticon-user-1"></i>
                  </div>
                  <h3>Business Management</h3>
                  <p>
                    Sedut perspiciatis unde omnis iste natus error sit voluptat
                    em accusan
                  </p>
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
