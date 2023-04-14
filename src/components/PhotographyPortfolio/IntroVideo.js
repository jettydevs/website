import React, { useState } from "react"
import FsLightbox from "fslightbox-react"
import { Link } from "gatsby"

import videoThumbImg from "../../images/video-img/video-img-4.jpg"

const IntroVideo = () => {
  const [toggler, setToggler] = useState(false)
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="photography-video-area" >
        <div className="container">
          <div 
            className="photography-bg" 
            style={{ backgroundImage: `url(${videoThumbImg})` }}
          >
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="photograpy-video-content">
                  <div className="video-text">
                    <h2>
                      Need Help with Professional Photography? Let's Work
                      Together!
                    </h2>
                    <Link to="#contact" className="photography-default-btn btn">
                      Contact Me <i className="flaticon-right-arrow-3"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="video-icon-content">
                  <div className="icon">
                    <div className="icon">
                      <div
                        className="play-btn"
                        onClick={() => setToggler(!toggler)}
                      >
                        <i className="flaticon-play-button-arrowhead"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IntroVideo
