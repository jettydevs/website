import * as React from "react"
import { Link } from "gatsby"

import logo from "../../images/logo/logo.png"

const Footer = () => {
  return (
    <>
      <div className="app-footer-area bg-color-efedf0 pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="logo-area style2">
                <Link to="/app">
                  <img src={logo} className="logo-1" alt="Image" />
                </Link>

                <p>
                  Duis cursus, mi quis viverra ornare, eros dolor interdum nulla
                  utimp erdiet commodo diam libero vitae nibh et jus cursus id
                  rutrum lore imperdiet ut sem vitae risus tristique posuere{" "}
                </p>

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
              <div className="footer-widjet style2 pl-30">
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
                        <i className="flaticon-next"></i> Services
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

            <div className="col-lg-2 col-sm-6">
              <div className="footer-widjet style2">
                <h3>Useful Links</h3>
                <div className="link-list">
                  <ul>
                    <li>
                      <Link to="#features">
                        <i className="flaticon-next"></i>Features
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">
                        <i className="flaticon-next"></i>Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="#download">
                        <i className="flaticon-next"></i>App Download
                      </Link>
                    </li>
                    <li>
                      <Link to="#reviews">
                        <i className="flaticon-next"></i>Reviews
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
              <div className="get-in-touch">
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

      <div className="app-copy-right-area bg-color-efedf0 text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>
                © Klane is Proudly Owned by{" "}
                <a
                  href="https://themeforest.net/user/hibotheme/portfolio"
                  target="_blank"
                >
                  HiboTheme
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
