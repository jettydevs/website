import * as React from "react"
import { Link } from "gatsby"

import acquaintanceImg from "../../images/acquaintance/acquaintance-1.png"

const OurAcquaintance = () => {
  return (
    <>
      <div className="acquaintance-area bg-color-efedf0 ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="acquaintance-img pr-20"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400" 
                data-aos-once="true"
              >
                <img src={acquaintanceImg} alt="Image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="acquaintance-content pl-20"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="500" 
                data-aos-once="true"
              >
                <div className="acquaintance-title">
                  <span>Our Acquaintance</span>
                  <h2>We Are Trusted By Thousands Of People</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut
                    elit tellus, luc tus nec ullamcorper mattis, pulvinar
                    dapibus leo. Lorem ipsum dolor sit amet, consec tetur
                    adipiscing elit. Ut elit tellus, luc tus nec ullam corpe
                  </p>
                </div>

                <div className="acquaintance-list">
                  <ul>
                    <li>
                      <div className="icon">
                        <i className="flaticon-folder"></i>
                      </div>
                      <h3>Device Quality Design</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consec tetur adipiscing elit
                        Lorem ipsum dolor sit amet, consec tetur adipiscing
                        elit.
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-data-management"></i>
                      </div>
                      <h3>Easy to Manage Data</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consec tetur adipiscing elit
                        Lorem ipsum dolor sit amet, consec tetur adipiscing
                        elit.
                      </p>
                    </li>
                  </ul>
                </div>

                <Link to="#" className="app-default-btn btn">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurAcquaintance
