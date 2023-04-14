import React, { useState } from "react"
import FsLightbox from "fslightbox-react"

import videoThumbImg from "../../images/video-img/video-img-3.jpg"

import videoShape1 from "../../images/video-img/video-shape-1.png"
import shape26 from "../../images/shape/shape-26.png"
import shape27 from "../../images/shape/shape-27.png"

const IntroVideo = () => {
  const [toggler, setToggler] = useState(false)
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="agency-intro-video-area bg-color-f9f5f4 pb-100">
        <div className="container">
          <div className="agency-section-title">
            <span>Intro Video</span>
            <h2>Watch How We Work</h2>
          </div>

          <div
            className="agrncy-video"
            data-aos="zoom-out-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <img src={videoThumbImg} alt="Image" />
            <div className="icon">
              <div className="play-btn" onClick={() => setToggler(!toggler)}>
                <i className="flaticon-play-button-arrowhead"></i>
              </div>
            </div>
          </div>

          {/* Shape Images */}
          <img
            src={videoShape1}
            className="video-shape"
            alt="Image"
          />
          <img
            src={shape26}
            className="video-shape-2"
            alt="Image"
          />
          <img
            src={shape27}
            className="video-shape-3"
            alt="Image"
          />
        </div>
      </div>
    </>
  )
}

export default IntroVideo
