import * as React from "react"

import dataImg from "../../images/data/data-img-1.png"

const DataAnalysis = () => {
  return (
    <>
      <div className="data-analysis bg-color-f8f8f8 ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="data-img"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="500" 
                data-aos-once="true"
              >
                <img src={dataImg} alt="Image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="sass-data-content">
                <div className="data-section-title">
                  <span>Data Analysis</span>
                  <h2>The Most Reliable Cloud Management Software</h2>
                  <p>
                    Duis cursus, mi quis viverra ornare, eros dolor interdum
                    nulla, ut commodo diam libero vitae erat. Aenean faucibus
                    nibh et justo cursus id rutrum lore imperdiet. Nunc ut sem
                    vitae risus tristique posuere.
                  </p>
                </div>

                <div className="data-list">
                  <ul>
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      data-aos-delay="200" 
                      data-aos-once="true"
                    >
                      <div className="icon">
                        <i className="flaticon-design"></i>
                      </div>
                      Unlimited Design Possibility
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      data-aos-delay="400" 
                      data-aos-once="true"
                    >
                      <div className="icon">
                        <i className="flaticon-app-store"></i>
                      </div>
                      Beautiful Mobile Apps
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      data-aos-delay="600" 
                      data-aos-once="true"
                    >
                      <div className="icon">
                        <i className="flaticon-project"></i>
                      </div>
                      Easy Project Management
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DataAnalysis
