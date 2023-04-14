import * as React from "react"

import teamImg1 from "../../images/team/team-17.jpg"
import teamImg2 from "../../images/team/team-18.jpg"
import teamImg3 from "../../images/team/team-19.jpg"

const Team = () => {
  return (
    <>
      <div
        id="team"
        className="currency-team-area bg-color-0e1013 pt-100 pb-70"
      >
        <div className="container">
          <div className="currency-section-title">
            <span>OUR TEAM</span>
            <h2>Meet Our Professionals</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div 
                className="currency-team-card"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400" 
              >
                <div className="team-image">
                  <img src={teamImg1} alt="Image" />
                </div>
                <div className="team-content">
                  <h3>Immanuil Iosif</h3>
                  <span>Crypto Developer</span>
                  <div className="social-links">
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="flaticon-facebook-1"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.twitter.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="flaticon-twitter-3"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://google.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="flaticon-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://linkedin.com/?lang=en"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="flaticon-linkedin-1"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div 
                className="currency-team-card"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="600" 
              >
                <div className="team-image">
                  <img src={teamImg2} alt="Image" />
                </div>
                <div className="team-content">
                  <h3>Samuil Semyon</h3>
                  <span>Crypto Developer</span>
                  <div className="social-links">
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="flaticon-facebook-1"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.twitter.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="flaticon-twitter-3"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://google.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="flaticon-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://linkedin.com/?lang=en"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="flaticon-linkedin-1"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div 
                className="currency-team-card"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="800" 
              >
                <div className="team-image">
                  <img src={teamImg3} alt="Image" />
                </div>
                <div className="team-content">
                  <h3>Roman Rostislav</h3>
                  <span>Crypto Developer</span>
                  <div className="social-links">
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="flaticon-facebook-1"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.twitter.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="flaticon-twitter-3"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://google.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="flaticon-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://linkedin.com/?lang=en"
                          target="_blank"
                          rel="noreferrer"
                        >
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
      </div>
    </>
  )
}

export default Team
