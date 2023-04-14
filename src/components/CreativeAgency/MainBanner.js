import * as React from "react"
import { Link } from "gatsby"

import bannerImg from "../../images/banner/banner-img-3.png"
import bannerBgImg from "../../images/banner/banner-bg-8.png"
import TrustedCompanies from "./TrustedCompanies"

const MainBanner = () => {
  return (
    <>
      <div 
        id="home" 
        className="agency-banner-area" 
        style={{ backgroundImage: `url(${bannerBgImg})` }}
      >
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-lg-5"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200" 
              data-aos-once="true"
            >
              <div className="agency-banner-content">
                <span>Best Creative Agency</span>

                <h1>Dedicated To Bring Our Ideas To Your Life</h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua. Ut enim ad minim
                  veniamquis.
                </p>

                <Link to="#contact" className="agency-default-btn btn mr-20">
                  Get A Quote <i className="flaticon-right-arrow-3"></i>
                </Link>

                <Link to="#" className="agency-default-btn style2 btn">
                  Learn More <i className="flaticon-right-arrow-3"></i>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-7"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400" 
              data-aos-once="true"
            >
              <div className="agency-banner-image">
                <img src={bannerImg} alt="Image" />
              </div>
            </div>
          </div>

          {/* Trusted Companies */}
          <TrustedCompanies />
        </div>
      </div>
    </>
  )
}

export default MainBanner
