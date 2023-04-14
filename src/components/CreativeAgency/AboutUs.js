import * as React from "react"
import { Link } from "gatsby"

import aboutImg from "../../images/about/about-img-1.png"
import shape16 from "../../images/shape/shape-16.png"
import shape17 from "../../images/shape/shape-17.png"
import shape24 from "../../images/shape/shape-24.png"

const AboutUs = () => {
  return (
    <>
      <div id="about" className="agency-about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div 
                className="agency-about-image pr-20" 
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200" 
                data-aos-once="true"
              >
                <img src={aboutImg} alt="Image" />

                <img
                  src={shape16}
                  className="about-shape-1"
                  alt="Image"
                />
                <img
                  src={shape17}
                  className="about-shape-2"
                  alt="Image"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="agency-about-content pl-20" 
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="500" 
                data-aos-once="true"
              >
                <div className="agency-about-title">
                  <span>About Our Company</span>
                  <h2>Honesty And Hard Work Are Our Beliefs</h2>

                  <div className="agency-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                  </div>

                  <Link to="/about-us" className="agency-default-btn btn">
                    Read More <i className="flaticon-right-arrow-3"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src={shape24}
          className="about-shape-3"
          alt="Image"
        />
      </div>
    </>
  )
}

export default AboutUs
