import * as React from "react"

import teamImg1 from "../../images/team/team-11.jpg"
import teamImg2 from "../../images/team/team-12.jpg"
import teamImg3 from "../../images/team/team-13.jpg"

import shape33 from "../../images/shape/shape-33.png"

const Team = () => {
  return (
    <>
      <div className="photography-team-area pt-100 pb-70">
        <div className="container">
          <div className="photography-section-title">
            <span>PHOTOGRAPHER</span>
            <h2>My Awesome Team</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div 
                className="photography-team-card"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
                data-aos-once="true"
              >
                <div className="team-img">
                  <img src={teamImg1} alt="Image" />
                </div>
                <div className="team-caption1">
                  <h3>Evgeny Gerasim</h3>
                  <p>Wedding Photographer</p>
                </div>
                <div className="team-caption2">
                  <h3>Evgeny Gerasim</h3>
                  <p>Wedding Photographer</p>
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

            <div className="col-lg-4 col-md-6">
              <div 
                className="photography-team-card"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
                data-aos-once="true"
              >
                <div className="team-img">
                  <img src={teamImg2} alt="Image" />
                </div>
                <div className="team-caption1">
                  <h3>Evgeny Gerasim</h3>
                  <p>Wedding Photographer</p>
                </div>
                <div className="team-caption2">
                  <h3>Evgeny Gerasim</h3>
                  <p>Wedding Photographer</p>
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

            <div className="col-lg-4 col-md-6">
              <div 
                className="photography-team-card"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="600"
                data-aos-once="true"
              >
                <div className="team-img">
                  <img src={teamImg3} alt="Image" />
                </div>
                <div className="team-caption1">
                  <h3>Evgeny Gerasim</h3>
                  <p>Wedding Photographer</p>
                </div>
                <div className="team-caption2">
                  <h3>Evgeny Gerasim</h3>
                  <p>Wedding Photographer</p>
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

          <img
            src={shape33}
            className="team-shape-1"
            alt="Image"
          />
        </div>
      </div>
    </>
  )
}

export default Team
