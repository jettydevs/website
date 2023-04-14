import * as React from "react"

import appImg from "../../images/download/download-img-2.png"
import appStore from "../../images/app-store.png"
import googlePlay from "../../images/google-play.png"

const DownloadApp = () => {
  return (
    <>
      <div id="downloadApp" className="currency-download-area bg-color-1c2029 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="currency-download-image">
                <img
                  src={appImg}
                  alt="Image"
                />
              </div>
            </div>

            <div className="col-lg-7">
              <div className="currency-download-content">
                <div className="download-title">
                  <span>Download App</span>
                  <h2>Trade On The Mobile App</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore etdolo magna aliqua. Ut enim ad minim
                  venia mquis ctetur adipisc.
                </p>

                <div className="download-btn">
                  <ul>
                    <li>
                      <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
                        <img
                          src={appStore}
                          alt="Image"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://play.google.com/store/games?hl=en&gl=US" target="_blank" rel="noreferrer">
                        <img
                          src={googlePlay}
                          alt="Image"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DownloadApp
