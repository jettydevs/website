import * as React from "react"
import { Link } from "gatsby"

import logo from "../../images/logo/white-logo.png"

const Footer = () => {
  return (
    <>
      <div className="agency-footer-area bg-color-0e1013 pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="logo-area style5">
                <Link to="/cryptocurrency">
                  <img src={logo} alt="Image" />
                </Link>
                <p>
                  Duis cursus, mi quis viverra ornare, eros dolor nulla utimp
                  erdiet commodo.
                </p>
                
                <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    name="EMAIL"
                    required
                  />
                  <button className="currency-default-btn btn" type="submit">
                    Subscribe Now
                  </button>
                </form>

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

            <div className="col-lg-3 col-sm-6">
              <div className="footer-widjet style5 copany pl-20">
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
                      <Link to="/blog">
                        <i className="flaticon-next"></i>Blog
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6">
              <div className="footer-widjet style5">
                <h3>Useful Links</h3>
                <div className="link-list">
                  <ul>
                    <li>
                      <Link to="#features">
                        <i className="flaticon-next"></i>Features
                      </Link>
                    </li>
                    <li>
                      <Link to="#downloadApp">
                        <i className="flaticon-next"></i>App Download
                      </Link>
                    </li>
                    <li>
                      <Link to="#testimonials">
                        <i className="flaticon-next"></i>Testimonials
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
              <div className="get-in-touch style4 pl-30">
                <h3>Get In Touch</h3>
                <ul>
                  <li>
                    <a href="tel:+12023459999">
                      <i className="flaticon-phone-call-2"></i> +12023459999
                    </a>
                  </li>
                  <li>
                    <a href="mailto:support@klane.com">
                      {" "}
                      <i className="flaticon-email"></i> support@klane.com
                    </a>
                  </li>
                  <li>
                    <a href="mailto:contact@klane.com">
                      {" "}
                      <i className="flaticon-email"></i> contact@klane.com
                    </a>
                  </li>
                  <li>
                    <i className="flaticon-map-1"></i>
                    <p>3004 3rd Ln, Los Angeles, California, 11</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copy-right-area style8 bg-color-0e1013">
        <div className="container">
          <p>
            © Klane is Proudly Owned by{" "}
            <a href="https://hibotheme.com/" target="_blank" rel="noreferrer">
              HiboTheme
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
