import * as React from "react"

import appStore from "../../images/app-store.png"
import googlePlay from "../../images/google-play.png"
import bannerAppImg from "../../images/banner/banner-img-2.png"

import shape11 from "../../images/shape/shape-11.png"
import shape12 from "../../images/shape/shape-12.png"
import downloadShape4 from "../../images/download/download-shape-4.png"

const MainBanner = () => {
  return (
    <>
      <div id="home" className="app-banner-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="app-banner-content">
                <span
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200" 
                  data-aos-once="true"
                >
                  Best Mobile App Free For 12 Days!
                </span>

                <h1
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300" 
                  data-aos-once="true"
                >
                  Make an Impression & Drive More Downloads With Klane
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400" 
                  data-aos-once="true"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididu ut labore et dolore magna aliqua.
                  Ut enim ad minim veniamquis nostrud
                </p>

                <div
                  className="download-links"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="500" 
                  data-aos-once="true"
                >
                  <ul>
                    <li>
                      <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={appStore} alt="app Store" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://play.google.com/store/games?hl=en&gl=US"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={googlePlay} alt="google Play" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="600" 
              data-aos-once="true"
            >
              <div className="app-banner-img">
                <img src={bannerAppImg} alt="Image" />
              </div>
            </div>
          </div>

          {/* Shape Images */}
          <img src={shape11} className="app-banner-shape-1" alt="Image" />
          <img src={shape12} className="app-banner-shape-2" alt="Image" />
          <img
            src={downloadShape4}
            className="app-banner-shape-3"
            alt="Image"
          />
        </div>
      </div>
    </>
  )
}

export default MainBanner
