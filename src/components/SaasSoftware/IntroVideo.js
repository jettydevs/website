import React, { useState } from "react"
import FsLightbox from "fslightbox-react"

import videoImg1 from "../../images/video-img/video-img.jpg"
import shape8 from "../../images/shape/shape-8.png"

const IntroVideo = () => {
  const [toggler, setToggler] = useState(false)
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div id="video" className="entro-video-area pt-100">
        <div className="container">
          <div className="sass-section-title">
            <span>Intro Video</span>
            <h2>See How Our Dedicated Team Can Help You</h2>
          </div>

          <div
            className="intro-video"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="500" 
            data-aos-once="true"
          >
            <div className="image">
              <img src={videoImg1} alt="Image" />
              <div className="icon">
                <div className="play-btn" onClick={() => setToggler(!toggler)}>
                  <i className="flaticon-play-button-arrowhead"></i>
                </div>
              </div>
            </div>
          </div>

          <img src={shape8} className="video-shape" alt="Image" />
        </div>
      </div>
    </>
  )
}

export default IntroVideo
