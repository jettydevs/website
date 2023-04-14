import * as React from "react"

import shape25 from "../../images/shape/shape-25.png"

const FunFacts = () => {
  return (
    <>
      <div className="agency-counter-area pt-100 pb-70 bg-f7f7f7">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="agency-counter-box">
                <div className="counter-content">
                  <h1>
                    874<span className="target">+</span>
                  </h1>
                  <p>Completed Projects</p>
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
              <div className="agency-counter-box">
                <div className="counter-content">
                  <h1>
                    870<span className="target">+</span>
                  </h1>
                  <p>Happy Clients</p>
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
              <div className="agency-counter-box">
                <div className="counter-content">
                  <h1>
                    369<span className="target">+</span>
                  </h1>
                  <p>Ongoing Projects</p>
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
              <div className="agency-counter-box">
                <div className="counter-content">
                  <h1>
                    15<span className="target">+</span>
                  </h1>
                  <p>Winning Awards</p>
                </div>
              </div>
            </div>
          </div>

          <img
            src={shape25}
            className="counter-shape-1"
            alt="Image"
          />
        </div>
      </div>
    </>
  )
}

export default FunFacts
