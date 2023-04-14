import React, { useState } from "react"
import FsLightbox from "fslightbox-react"

import videoThumbImg from "../../images/video-img/video-img-6.jpg"

const IntroVideo = () => {
  const [toggler, setToggler] = useState(false)
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="currency-intro-video-area bg-color-1c2029">
        <div className="container">
          <div className="video-image">
            <img src={videoThumbImg} alt="Image" />
            <div className="icon">
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
