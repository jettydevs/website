import * as React from "react"

const Features = () => {
  return (
    <>
      <div id="features" className="consulting-features-area ptb-100">
        <div className="container">
          <div className="consulting-section-title">
            <span>WELCOME</span>
            <h2>We Are An Development and Consulting Company</h2>
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
                  <h3>Custom Web and Mobile Development</h3>
                  <p>
                    We build bespoke web & mobile solutions that fit your unique needs, using cutting-edge technologies.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="consulting-features-card">
                  <div className="icon">
                    <i className="flaticon-technical-support-1"></i>
                  </div>
                  <h3>App Optimization and Maintenance Development</h3>
                  <p>
                    We optimize & maintain your app to keep it running smoothly and improve its performance.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="consulting-features-card">
                  <div className="icon">
                    <i className="flaticon-user-1"></i>
                  </div>
                  <h3>Agile Software Consulting and Guidance for Your Project Success</h3>
                  <p>
                    Our agile approach to software consulting ensures your project is successful and delivered on time.
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
