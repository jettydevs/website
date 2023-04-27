import * as React from "react"

import walter from "../images/team/walter.png"
import jose from "../images/team/jose.png"

const TeamMember = () => {
  return (
    <>
      <div
        id="team"
        className="currency-team-area pt-100 pb-70"
      >
        <div className="container">
          <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12 pb-70">
              <p>JettyDevs is a development company dedicated to delivering cutting-edge solutions worldwide. As part of our expansion strategy, we are actively working towards establishing a strong presence in the United States. Our goal is to bring our innovative services to businesses in the U.S. market.</p>
              <p>With a client-centric approach and a focus on bridging technology and business, we empower businesses to thrive. Our team of experts is committed to delivering exceptional results and exceeding client expectations. We are driven by a passion for helping businesses succeed by leveraging the power of technology.</p>
              <p>While we currently do not have clients in the United States, we are excited to develop and grow our business in this market. We are actively seeking partnerships and opportunities to collaborate with businesses in the United States, with the aim of providing them with our top-notch services and solutions. </p>
              <p>Trust JettyDevs to be your strategic technology partner and unlock your business's full potential. Contact us today to discuss how we can help you achieve your goals in the United States and beyond.              </p>
            </div>
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
