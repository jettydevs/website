import React, { useState } from "react"
import FsLightbox from "fslightbox-react"
import { Link } from "gatsby"

import manImg from "../../images/banner/banner-img-8.png"
import bannerBgImg from "../../images/banner/banner-bg-4.jpg"

const MainBanner = () => {
  const [toggler, setToggler] = useState(false)
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div 
        id="home" 
        className="political-banner-area" 
        style={{ backgroundImage: `url(${bannerBgImg})` }}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="political-banner-content">
                <span>Welcome To Our Leadership Campaign</span>
                <h1>Together, We Will Move Forward!</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolor magna aliqua. Ut enim ad minim
                  venia mquis ctetur adipisc.
                </p>
                <div className="banner-btn">
                  <ul>
                    <li>
                      <Link to="#about" className="political-default-btn btn">
                        Our Campaign
                      </Link>
                    </li>
                    <li>
                      <div
                        className="play-btn"
                        onClick={() => setToggler(!toggler)}
                      >
                        <i className="flaticon-play-button-arrowhead"></i>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="political-banner-img">
                <img src={manImg} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainBanner
