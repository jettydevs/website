import * as React from "react"
import { Link } from "gatsby"

import teamImg1 from "../../images/team/team-20.jpg"
import teamImg2 from "../../images/team/team-21.jpg"
import teamImg3 from "../../images/team/team-22.jpg"

const WhatWeDo = () => {
  return (
    <>
      <div id="services" className="exchange-specialists-area pt-100 pb-70">
        <div className="container">
          <div className="exchange-section-title">
            <span>What We Do</span>
            <h2>Your Currency Exchange Specialists</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div 
                className="exchange-specialist-card" 
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200" 
                data-aos-once="true"
              >
                <div className="specilist-img">
                  <img src={teamImg1} alt="Image" />
                </div>
                <div className="specialist-content">
                  <h3>Personal Exchange Services</h3>
                  <p>
                    Lorem ipsum dolor sit amet cons ectetur adipisc elit donec
                    et mi elementum, convallis amet fermentum.
                  </p>
                  <Link to="#">
                    Read More<i className="flaticon-right-arrow-1"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div 
                className="exchange-specialist-card"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400" 
                data-aos-once="true"
              >
                <div className="specilist-img">
                  <img src={teamImg2} alt="Image" />
                </div>
                <div className="specialist-content">
                  <h3>Business Exchange Services</h3>
                  <p>
                    Lorem ipsum dolor sit amet cons ectetur adipisc elit donec
                    et mi elementum, convallis amet fermentum.
                  </p>
                  <Link to="#">
                    Read More<i className="flaticon-right-arrow-1"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="600" 
              data-aos-once="true"
            >
              <div className="exchange-specialist-card">
                <div className="specilist-img">
                  <img src={teamImg3} alt="Image" />
                </div>
                <div className="specialist-content">
                  <h3>Corporate Exchange Services</h3>
                  <p>
                    Lorem ipsum dolor sit amet cons ectetur adipisc elit donec
                    et mi elementum, convallis amet fermentum.
                  </p>
                  <Link to="#">
                    Read More<i className="flaticon-right-arrow-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatWeDo
