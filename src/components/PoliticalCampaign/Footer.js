import * as React from "react"
import { Link } from "gatsby"

import logo from "../../images/logo/white-logo.png"
import footerBgImg from "../../images/footer/footer-bg-1.png"

const Footer = () => {
  return (
    <>
      <div 
        className="political-footer-area pt-100 pb-70" 
        style={{ backgroundImage: `url(${footerBgImg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="logo-area style4">
                <Link to="/political-campaign">
                  <img src={logo} alt="Image" />
                </Link>
                <p>
                  Duis cursus, mi quis viverra ornare, eros dolor interdum nulla
                  utimp erdiet commodo diam libero vitae nibh et jus cursus id
                  rutrum lore imperdiet ut sem vitae risus tristique posuere{" "}
                </p>

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

            <div className="col-lg-2 col-sm-6">
              <div className="footer-widjet style4">
                <h3>Company</h3>
                <div className="link-list">
                  <ul>
                    <li>
                      <Link to="/about-us">
                        <i className="flaticon-next"></i>About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">
                        <i className="flaticon-next"></i>Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/services">
                        <i className="flaticon-next"></i>Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/team">
                        <i className="flaticon-next"></i>Our Team
                      </Link>
                    </li>
                    <li>
                      <Link to="#movement">
                        <i className="flaticon-next"></i>Movement
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="footer-widjet style4">
                <h3>Useful Links</h3>
                <div className="link-list">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="flaticon-next"></i>Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link to="#testimonials">
                        <i className="flaticon-next"></i>Testimonials
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        <i className="flaticon-next"></i>Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">
                        <i className="flaticon-next"></i>Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/terms-conditions">
                        <i className="flaticon-next"></i>Terms & Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="agency-subscribe style2">
                <h3>Subscribe Newsletter</h3>
                <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    name="EMAIL"
                    required
                  />
                  <button className="political-default-btn btn" type="submit">
                    Join Us!
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
