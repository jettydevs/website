import * as React from "react"
import { Link } from "gatsby"

const Services = () => {
  return (
    <>
      <div id="services" className="solution-area pt-100 pb-70">
        <div className="container">
          <div className="sass-section-title">
            <span>Our Solution</span>
            <h2>Easily Integrates With Your Favorite Services</h2>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200" 
              data-aos-once="true"
            >
              <div className="sass-solution-single-card">
                <div className="solution-content">
                  <div className="icon">
                    <i className="flaticon-editing"></i>
                  </div>
                  <h3>Easy Editable</h3>
                  <p>
                    Duis cursus, mi quis viverra ornare eros dolor interdum
                    nulla
                  </p>
                  <Link to="/service-details" className="learn-more">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400" 
              data-aos-once="true"
            >
              <div className="sass-solution-single-card">
                <div className="solution-content">
                  <div className="icon">
                    <i className="flaticon-responsive"></i>
                  </div>
                  <h3>Fully Responsive</h3>
                  <p>
                    Duis cursus, mi quis viverra ornare eros dolor interdum
                    nulla
                  </p>
                  <Link to="/service-details" className="learn-more">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="600"
              data-aos-once="true"
            >
              <div className="sass-solution-single-card">
                <div className="solution-content">
                  <div className="icon">
                    <i className="flaticon-file"></i>
                  </div>
                  <h3>Well Documentation</h3>
                  <p>
                    Duis cursus, mi quis viverra ornare eros dolor interdum
                    nulla
                  </p>
                  <Link to="/service-details" className="learn-more">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="800"
              data-aos-once="true"
            >
              <div className="sass-solution-single-card">
                <div className="solution-content">
                  <div className="icon">
                    <i className="flaticon-server"></i>
                  </div>
                  <h3>Server Solutions</h3>
                  <p>
                    Duis cursus, mi quis viverra ornare eros dolor interdum
                    nulla
                  </p>
                  <Link to="/service-details" className="learn-more">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="1000"
              data-aos-once="true"
            >
              <div className="sass-solution-single-card">
                <div className="solution-content">
                  <div className="icon">
                    <i className="flaticon-lightbulb"></i>
                  </div>
                  <h3>Creative Design</h3>
                  <p>
                    Duis cursus, mi quis viverra ornare eros dolor interdum
                    nulla
                  </p>
                  <Link to="/service-details" className="learn-more">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="1200"
              data-aos-once="true"
            >
              <div className="sass-solution-single-card">
                <div className="solution-content">
                  <div className="icon">
                    <i className="flaticon-fast-delivery"></i>
                  </div>
                  <h3>Quick Linkup</h3>
                  <p>
                    Duis cursus, mi quis viverra ornare eros dolor interdum
                    nulla
                  </p>
                  <Link to="/service-details" className="learn-more">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
