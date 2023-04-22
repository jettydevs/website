import * as React from "react"

import walter from "../../images/team/walter.png"
import jose from "../../images/team/jose.png"

const TeamMember = () => {
  return (
    <>
      <div
        id="team"
        className="currency-team-area pt-100 pb-70"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="currency-team-card">
                <div className="team-image">
                  <img src={walter} alt="Walter" />
                </div>
                <div className="team-content">
                  <h3>Walter Zalazar</h3>
                  <p>Co-Founder</p>
                  <div className="social-links">
                    <ul>
                      {/* <li>
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
                      </li> */}
                      <li>
                        <a
                          href="https://www.linkedin.com/in/wzalazar/"
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
              <div className="currency-team-card">
                <div className="team-image">
                  <img src={jose} alt="Jose" />
                </div>
                <div className="team-content">
                  <h3>José Casella</h3>
                  <p>Co-Founder</p>
                  <div className="social-links">
                    <ul>
                      {/* <li>
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
                      </li> */}
                      <li>
                        <a
                          href="https://www.linkedin.com/in/jose-luis-casella-b48b0a108/"
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

            {/* <div className="col-lg-4 col-md-6">
              <div className="currency-team-card">
                <div className="team-image">
                  <img src={teamImg3} alt="Image" />
                </div>
                <div className="team-content">
                  <h3>Charlie Thomas</h3>
                  <span>React Developer</span>
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
              <div className="currency-team-card">
                <div className="team-image">
                  <img src={teamImg4} alt="Image" />
                </div>
                <div className="team-content">
                  <h3>Oscar James</h3>
                  <span>Gatsby Developer</span>
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
              <div className="currency-team-card">
                <div className="team-image">
                  <img src={teamImg5} alt="Image" />
                </div>
                <div className="team-content">
                  <h3>William Isla</h3>
                  <span>QA Engineer</span>
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamMember
