import * as React from "react"

import teamImg1 from "../../images/team/team-8.jpg"
import teamImg2 from "../../images/team/team-9.jpg"
import teamImg3 from "../../images/team/team-10.jpg"

const OurTeam = () => {
  return (
    <>
      <div id="team" className="consulting-team-area bg-color-f9f5f4 pb-70">
        <div className="container">
          <div className="consulting-section-title">
            <span>Our Team</span>
            <h2>Meet Our Professional Experts Team Members</h2>
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
                <img src={teamImg1} alt="Image" />
                <div className="team-content">
                  <h3>Budimir Damien</h3>
                  <p>CEO & Founder</p>
                </div>
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

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <div className="consulting-team-card">
                <img src={teamImg2} alt="Image" />
                <div className="team-content">
                  <h3>Evgeny Gerasim</h3>
                  <p>Business Developer</p>
                </div>
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

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="600"
              data-aos-once="true"
            >
              <div className="consulting-team-card">
                <img src={teamImg3} alt="Image" />
                <div className="team-content">
                  <h3>Roman Veniamin</h3>
                  <p>Business Consultant</p>
                </div>
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

export default OurTeam
