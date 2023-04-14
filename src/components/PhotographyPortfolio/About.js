import * as React from "react"
import { Link } from "gatsby"

import aboutImg from "../../images/about/about-img-4.png"
import aboutShape from "../../images/about/about-shape-4.png"

const About = () => {
  return (
    <>
      <div id="about" className="photography-about-area bg-color-f9f9f9">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div 
                className="photograpy-about-img"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
                data-aos-once="true"
              >
                <img src={aboutImg} alt="Image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div 
                className="photograpy-about-content"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
                data-aos-once="true"
              >
                <div className="photography-about-title">
                  <span>MY STORY</span>
                  <h2>Read About My Journey</h2>
                </div>

                <div className="about-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Aenean faucibus nibh et
                    justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                    risus tristique posuere.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare.
                  </p>
                </div>

                <Link to="/about-us" className="photography-default-btn btn">
                  READ MORE <i className="flaticon-right-arrow-3"></i>
                </Link>
              </div>
            </div>
          </div>

          <img
            src={aboutShape}
            className="about-shape-1"
            alt="Image"
          />
        </div>
      </div>
    </>
  )
}

export default About
