import * as React from "react"
import { Link } from "gatsby"

import appDesign from "../../images/design/design-img-1.png"
import flagImg from "../../images/flag/flag-1.jpg"
import shape9 from "../../images/shape/shape-9.png"

const AmazingDesign = () => {
  return (
    <>
      <div id="design" className="design-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="design-content"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
                data-aos-once="true"
              >
                <div className="design-title">
                  <span>Cool & Amazing Design</span>
                  <h2>We Develop Amazing App For Startups</h2>
                </div>
                <div className="design-text">
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut
                    elit tellus, luc tus nec ullamcorper mattis, pulvinar
                    dapibus leo. Lorem ipsum dolor sit amet, consec tetur
                    adipiscing elit. Ut elit tellus, luc tus nec ullam corper.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut
                    elit tellus, luc tus nec ullamcorper mattis, pulvinar
                    dapibus leo. Lorem ipsum dolor.
                  </p>
                </div>
                <Link to="#" className="app-default-btn btn">
                  Discover More
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="design-image"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
                data-aos-once="true"
              >
                <img src={appDesign} alt="Image" />

                <div className="doller">
                  <img src={flagImg} alt="Image" />
                  <h1>
                    352 <span className="target">k</span>
                  </h1>
                  <p>US Dollar</p>
                </div>

                <div className="design-shape">
                  <img src={shape9} alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AmazingDesign
