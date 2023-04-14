import * as React from "react"

import shape14 from "../../images/shape/shape-14.png"
import shape15 from "../../images/shape/shape-15.png"

const Features = () => {
  return (
    <>
      <div
        id="features"
        className="agency-features-area bg-color-f9f5f4 pt-100 pb-70 overflow-hidden"
      >
        <div className="container">
          <div className="agency-section-title">
            <span>Our Features</span>
            <h2>Our Specialization</h2>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200" 
              data-aos-once="true"
            >
              <div className="agency-single-features-card">
                <div className="icon">
                  <i className="flaticon-vector"></i>
                </div>
                <h3>Web Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, ectetur do pis cing elit. Susp
                  endisse varius enim varius enim eros elementum tristique.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <div className="agency-single-features-card">
                <div className="icon">
                  <i className="flaticon-strategy"></i>
                </div>
                <h3>Strategy & Research</h3>
                <p>
                  Lorem ipsum dolor sit amet, ectetur do pis cing elit. Susp
                  endisse varius enim varius enim eros elementum tristique.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="600"
              data-aos-once="true"
            >
              <div className="agency-single-features-card">
                <div className="icon">
                  <i className="flaticon-megaphone"></i>
                </div>
                <h3>SEO & Marketing</h3>
                <p>
                  Lorem ipsum dolor sit amet, ectetur do pis cing elit. Susp
                  endisse varius enim varius enim eros elementum tristique.
                </p>
              </div>
            </div>
          </div>

          {/* Shape Images */}
          <img
            src={shape14}
            className="features-shape-1"
            alt="Image"
          />
          <img
            src={shape15}
            className="features-shape-2"
            alt="Image"
          />
        </div>
      </div>
    </>
  )
}

export default Features
