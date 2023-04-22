import * as React from "react"
import { Link } from "gatsby"

const ServicesItems = () => {
  return (
    <>
      <div id="services" className="solution-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">

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
                  Design and development of websites and web applications that work seamlessly on any device
                  </p>
                </div>
              </div>
            </div>
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
                    <i className="flaticon-server"></i>
                  </div>
                  <h3>Server Solutions</h3>
                  <p>
                  Setup, configuration and maintenance of AWS servers for reliable and scalable hosting
                  </p>
                </div>
              </div>
            </div>

 
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
                    <i className="ri-window-line"></i>
                  </div>
                  <h3>Consultancy</h3>
                  <p>
                  Professional guidance and advice on software development, technology solutions
                  </p>
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
                    <i className="ri-macbook-line"></i>
                  </div>
                  <h3>Web Development</h3>
                  <p>
                  Custom web application development using modern Javascript
                  </p>
                </div>
              </div>
            </div>

       
 
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
                    <i className="ri-smartphone-line"></i>
                  </div>
                  <h3>Mobile App Development</h3>
                  <p>
                  Custom mobile app development for iOS and Android platforms using React Native
                  </p>
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
                    <i className="ri-shopping-cart-line"></i>
                  </div>
                  <h3>eCommerce Development</h3>
                  <p>
                  Custom development of eCommerce platforms with modern and secure payment solutions
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

export default ServicesItems
