import * as React from "react"

import chooseImg from "../../images/choose/choose-6.png"
import shape14 from "../../images/shape/shape-14.png"

const WhyChooseUs = () => {
  return (
    <>
      <div className="agency-choose-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div 
                className="agency-choose-content"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200" 
                data-aos-once="true"
              >
                <div className="agency-choose-title">
                  <span>Why Choose Us</span>
                  <h2>Global Leader In Modern Business Innovation</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit et
                    fames maecen amet est scelerisque lectus tortor sit lorem
                    ipsum dolor sit amet adipiscing elit et fames lectus tortor
                    sit.
                  </p>
                </div>
                <div className="choose-list">
                  <ul>
                    <li>
                      <div className="icon">
                        <i className="flaticon-checked"></i>
                      </div>
                      <h3>10+ Years of Experience</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        et fames maecen amet est scelerisque lectus tortor.
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-checked"></i>
                      </div>
                      <h3>Team of Industry Experts</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        et fames maecen amet est scelerisque lectus tortor.
                      </p>
                    </li>
                  </ul>
                </div>
                <a href="#contact" className="agency-default-btn style3 btn">
                  Get in Tuch <i className="flaticon-right-arrow-3"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div 
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400" 
                data-aos-once="true"
              >
                <img src={chooseImg} alt="Image" />
              </div>
            </div>
          </div>

          <img
            src={shape14}
            className="choose-shape-1"
            alt="Image"
          />
        </div>
      </div>
    </>
  )
}

export default WhyChooseUs
