import * as React from "react"
import { Link } from "gatsby"

import bannerBGImg1 from "../../images/banner/banner-bg-1.png"
import bannerImg1 from "../../images/banner/banner-img-1.png"
import shape1 from "../../images/shape/shape-1.png"
import bannerShape1 from "../../images/banner/banner-shape-1.png"
import bannerShape2 from "../../images/banner/banner-shape-2.png"
import bannerShape3 from "../../images/banner/banner-shape-3.png"
import shape2 from "../../images/shape/shape-2.png"
import shape3 from "../../images/shape/shape-3.png"
import shape4 from "../../images/shape/shape-4.png"
import shape5 from "../../images/shape/shape-5.png"

const MainBanner = () => {
  return (
    <>
      <div 
        id="home" 
        className="sass-banner-area bg-1" 
        style={{ backgroundImage: `url(${bannerBGImg1})` }}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="sass-banner-content">
                <span
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200" 
                  data-aos-once="true"
                >
                  Faster SaaS Solutions
                </span>

                <h1
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400" 
                  data-aos-once="true"
                >
                  The Most Reliable SaaS Management Best Software
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="600" 
                  data-aos-once="true"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod temporinci ut labore et dolore magna aliqua. Ut
                  enim ad minim veniamquis nostrud.
                </p>

                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="800" 
                  data-aos-once="true"
                >
                  <Link to="#" className="sass-default-btn btn">
                    Try Free Trial
                  </Link>
                </div>

                <div className="content-shape">
                  <img src={shape5} alt="Image" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="sass-banner-image">
                {/* Main Image */}
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="800" 
                  data-aos-once="true"
                >
                  <img src={bannerImg1} alt="Image" />
                </div>

                {/* Shape Image */}
                <div className="shape">
                  <img
                    src={shape1}
                    className="banner-shape-1"
                    alt="Image"
                  />
                  <img
                    src={bannerShape1}
                    className="banner-shape-2"
                    alt="Image"
                  />
                  <img
                    src={bannerShape2}
                    className="banner-shape-3"
                    alt="Image"
                  />
                  <img
                    src={shape2}
                    className="banner-shape-4"
                    alt="Image"
                  />
                  <img
                    src={shape3}
                    className="banner-shape-5"
                    alt="Image"
                  />
                  <img
                    src={shape4}
                    className="banner-shape-6"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banner-shape">
          <img src={bannerShape3} alt="Shape" />
        </div>
      </div>
    </>
  )
}

export default MainBanner
