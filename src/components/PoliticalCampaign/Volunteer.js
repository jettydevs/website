import * as React from "react"

import volunteerImg1 from "../../images/team/team-14.jpg"
import volunteerImg2 from "../../images/team/team-15.jpg"
import volunteerImg3 from "../../images/team/team-16.jpg"

const Volunteer = () => {
  return (
    <>
      <div id="volunteer" className="political-volunteer-area pt-100 pb-70">
        <div className="container">
          <div className="political-section-title">
            <span>OUR VOLUNTEER</span>
            <h2>Meet Our Workers</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="political-volunteer-card">
                <div className="volunteer-image">
                  <img src={volunteerImg1} alt="Image" />
                </div>
                <div className="volunteer-content">
                  <h3>George Konstantin</h3>
                  <p>Party President</p>
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
              <div className="political-volunteer-card">
                <div className="volunteer-image">
                  <img src={volunteerImg2} alt="Image" />
                </div>
                <div className="volunteer-content">
                  <h3>Vladimir Fyodor</h3>
                  <p>Party Chairman</p>
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
              <div className="political-volunteer-card">
                <div className="volunteer-image">
                  <img src={volunteerImg3} alt="Image" />
                </div>
                <div className="volunteer-content">
                  <h3>Konstantin Nikolay </h3>
                  <p>Party Management</p>
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

export default Volunteer
