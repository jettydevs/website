import * as React from "react"
import { Link } from "gatsby"

import logo from "../../images/logo/logo.png"
import footerShape3 from "../../images/footer/footer-3.jpg"
import footerShape4 from "../../images/footer/footer-4.jpg"

const Footer = () => {
  return (
    <>
      <div className="agency-footer-area bg-color-f9f5f4 pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="logo-area style2">
                <Link to="/creative-agency">
                  <img
                    src={logo}
                    className="logo-1"
                    alt="Image"
                  />
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
              <div className="footer-widjet style2">
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
                      <Link to="#pricing">
                        <i className="flaticon-next"></i>Pricing Plan
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="footer-widjet style2 pl-30">
                <h3>Useful Links</h3>
                <div className="link-list">
                  <ul>
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
                      <Link to="/projects">
                        <i className="flaticon-next"></i> Projects
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
              <div className="agency-subscribe">
                <h3>Subscribe Newsletter</h3>
                <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    name="EMAIL"
                    required
                  />

                  <button className="agency-default-btn btn" type="submit">
                    Join Us!
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Shape Images */}
          <img
            src={footerShape3}
            className="footer-shape-1"
            alt="Image"
          />
          <img
            src={footerShape4}
            className="footer-shape-2"
            alt="Image"
          />
        </div>
      </div>

      <div className="copy-right-area style3 bg-color-f9f5f4">
        <div className="container">
          <p>
            © Klane is Proudly Owned by{" "}
            <a
              href="https://hibotheme.com/"
              target="_blank" 
              rel="noreferrer"
            >
              HiboTheme
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
