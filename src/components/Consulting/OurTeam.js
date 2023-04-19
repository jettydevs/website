import * as React from "react"

import walter from "../../images/team/team-8.jpg"
import jose from "../../images/team/jose.png"

const OurTeam = () => {
  return (
    <>
      <div id="team" className="consulting-team-area bg-color-f9f5f4 ptb-100">
        <div className="container">
          <div className="consulting-section-title">
            <span>Our Team</span>
            <h2>Meet Our Co-Founders</h2>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="consulting-team-card">
                <img src={walter} alt="Image" />
                <div className="team-content">
                  <h3>Walter Zalazar</h3>
                  <p>Co-Founder</p>
                </div>
                <div className="social-links">
                  <ul>
                    {/* <li>
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
                    </li> */}
                    <li>
                      <a href="https://www.linkedin.com/in/wzalazar/" target="_blank" rel="noreferrer">
                        <i className="flaticon-linkedin-1"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <div className="consulting-team-card">
                <img src={jose} alt="Image" />
                <div className="team-content">
                  <h3>José Casella</h3>
                  <p>Co-Founder</p>
                </div>
                <div className="social-links">
                  <ul>
                    {/* <li>
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
                    </li> */}
                    <li>
                      <a href="https://www.linkedin.com/in/jose-luis-casella-b48b0a108/" target="_blank" rel="noreferrer">
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

export default OurTeam
