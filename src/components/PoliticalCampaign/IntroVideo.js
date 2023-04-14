import React, { useState } from "react"
import FsLightbox from "fslightbox-react"
import Donation from "./Donation"

import videoBgImg from "../../images/video-img/video-img-5.jpg"

const IntroVideo = () => {
  const [toggler, setToggler] = useState(false)
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div 
        id="video" 
        className="political-donation-and-video-area" 
        style={{ backgroundImage: `url(${videoBgImg})` }}
      >
        <div className="container">
          {/* Donation */}
          <Donation />

          <div className="political-intro-video ptb-100">
            <div className="political-section-title">
              <span>Intro Video</span>
              <h2>People Political Solutions For You Election</h2>
            </div>
            <div className="video-icon">
              <div className="play-btn" onClick={() => setToggler(!toggler)}>
                <i className="flaticon-play-button-arrowhead"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IntroVideo
