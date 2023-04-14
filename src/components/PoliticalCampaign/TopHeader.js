import * as React from "react"

const TopHeader = () => {
  return (
    <>
      <div className="political-top-header-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="political-header-left-content">
                <ul>
                  <li>
                    <a href="tel:+095552348765">
                      <i className="flaticon-phone-call-1"></i>Call for help:
                      (+09)555 234-8765
                    </a>
                  </li>
                  <li>
                    <a href="mailto:contact@klane.com">
                      <i className="flaticon-paper-plane"></i>Mail to us:
                      contact@klane.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="political-header-right-content">
                <div className="social-links">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                        <i className="flaticon-facebook-1"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                        <i className="flaticon-twitter-3"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://google.com" target="_blank" rel="noreferrer">
                        <i className="flaticon-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://linkedin.com/?lang=en" target="_blank" rel="noreferrer">
                        <i className="flaticon-linkedin-1"></i>
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

export default TopHeader
