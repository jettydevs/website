import * as React from "react"
import { Link } from "gatsby"

import aboutShape5 from "../../images/about/about-shape-5.png"
import aboutImg from "../../images/about/about-img-7.jpg"

const About = () => {
  return (
    <>
      <div id="about" className="exchange-about-area bg-color-f5f5f5 ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div 
                className="exchainge-about-content" 
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400" 
                data-aos-once="true"
              >
                <div className="exchainge-about-title">
                  <span>About Us</span>
                  <h2>Any Time Exchange Your Money In The World</h2>
                </div>

                <div className="about-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec et mi elementum, convallis odio eleifend, fermentum
                    ante. Praesent eget venenatis enim vitae vestibulu
                    massa.Lorem ipsum dolor sit amet.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec et mi elementum, convallis odio eleifend, fermentum
                    ante enim.
                  </p>
                </div>

                <Link to="/about-us" className="exchange-default-btn btn">
                  Explore More <i className="flaticon-right-arrow-2"></i>
                </Link>

                <img
                  src={aboutShape5}
                  className="about-shape-1"
                  alt="Image"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div 
                className="exchange-about-image"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="600" 
                data-aos-once="true"
              >
                <img src={aboutImg} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
