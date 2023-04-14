import * as React from "react"
import { Link } from "gatsby"

import coreImg from "../../images/core/core-1.png"
import shape5 from "../../images/shape/shape-5.png"
import shape29 from "../../images/shape/shape-29.png"

const CoreStatistics = () => {
  return (
    <>
      <div className="care-statics-area bg-color-f8f8f8 ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="core-statics-content">
                <div className="statis-title">
                  <span>Core Statistics</span>
                  <h2>Available Software System Most Informatics</h2>
                  <p>
                    Duis cursus, mi quis viverra ornare, eros dolor interdum
                    nulla, ut libero vitae erat. Aenean faucibus nibh et justo
                    cursus id rutrum lore imperdiet. Nunc ut sem vitae risus
                    tristique posuere
                  </p>
                </div>

                <div className="core-list">
                  <ul>
                    <li>
                      <div className="icon">
                        <i className="flaticon-check-1"></i>
                      </div>
                      <h3>Build for Real Saas Users</h3>
                      <p>
                        Duis cursus, mi quis viverra ornare, eros dolor interdum
                        nulla, ut commodo diam libero vitae erat. Aenean
                        faucibus nibh et justo{" "}
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-check-1"></i>
                      </div>
                      <h3>Process Setup Easily</h3>
                      <p>
                        Duis cursus, mi quis viverra ornare, eros dolor interdum
                        nulla, ut commodo diam libero vitae erat. Aenean
                        faucibus nibh et justo{" "}
                      </p>
                    </li>
                  </ul>

                  <Link to="#" className="sass-default-btn btn">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="core-img">
                <img
                  src={coreImg}
                  alt="Image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400" 
                  data-aos-once="true"
                />

                {/* Shape Images */}
                <img src={shape5} className="core-shape-1" alt="Image" />
                <img src={shape29} className="core-shape-2" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CoreStatistics
