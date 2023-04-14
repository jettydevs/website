import * as React from "react"
import { Link } from "gatsby"

import aboutImg from "../../images/about/about-img-6.jpg"

const About = () => {
  return (
    <>
      <div id="about" className="currency-about-area ptb-100 bg-color-0e1013">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div 
                className="currency-about-image pr-20" 
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400" 
                data-aos-once="true"
              >
                <img src={aboutImg} alt="Image" />
              </div>
            </div>
            
            <div className="col-lg-6">
              <div 
                className="currency-about-content pl-20"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="600" 
                data-aos-once="true"
              >
                <div className="currency-about-title">
                  <span>About Us</span>
                  <h2>Invest in The Future With Confidence</h2>
                </div>

                <div className="about-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod ut labore etdolo magna aliqua. Ut enim ad minim
                    venia mquis ctetur adipisc. Lorem ipsum dolor sit ame
                    consectetur adipiscing elit, sed do eiusmod ut labore et
                    dolor magna aliqua.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod ut labore etdolo magna aliqua. Ut enim ad minim
                    venia mquis ctetur adipisc.
                  </p>
                </div>

                <Link to="/about-us" className="currency-default-btn btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
