import * as React from "react"
import { Link } from "gatsby"

import logo from "../../images/logo/logo.png"
import footer1 from "../../images/footer/footer-1.jpg"
import footer2 from "../../images/footer/footer-2.jpg"

const Footer = () => {
  return (
    <>
      <div className="footer-area bg-color-f8f8f8 pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="logo-area">
                <Link to="/">
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
                        href="https://linkedin.com/"
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
              <div className="footer-widjet pl-30">
                <h3>Company</h3>
                <div className="link-list">
                  <ul>
                    <li>
                      <Link to="/about-us">
                        <i className="flaticon-next"></i> About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        <i className="flaticon-next"></i> Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/team">
                        <i className="flaticon-next"></i> Our Team
                      </Link>
                    </li>
                    <li>
                      <Link to="/services">
                        <i className="flaticon-next"></i> Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">
                        <i className="flaticon-next"></i> Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="footer-widjet">
                <h3>Useful Links</h3>
                <div className="link-list">
                  <ul>
                    <li>
                      <Link to="#pricing">
                        <i className="flaticon-next"></i> Pricing
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="flaticon-next"></i> App Download
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="flaticon-next"></i> How It Works
                      </Link>
                    </li>
                    <li>
                      <Link to="/terms-conditions">
                        <i className="flaticon-next"></i> Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">
                        <i className="flaticon-next"></i> Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6">
              <div className="download-link">
                <h3>Download Link</h3>
                <div className="fotter-img">
                  <a
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={footer1} alt="Image" />
                  </a>
                  <a href="https://play.google.com/store/apps?hl=en&gl=GB" target="_blank" rel="noreferrer">
                    <img src={footer2} alt="Image" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copy-right-area bg-color-f8f8f8">
        <div className="container">
          <p>
            © Klane is Proudly Owned by{" "}
            <a
              href="https://hibotheme.com/"
              target="_blank"
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
