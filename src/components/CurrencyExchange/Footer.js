import * as React from "react"
import { Link } from "gatsby"

import logo from "../../images/logo/white-logo.png"

const Footer = () => {
  return (
    <>
      <div className="nft-footer-area bg-color-0a0a0a pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="logo-area style6">
                <Link to="/currency-exchange">
                  <img src={logo} alt="Image" />
                </Link>
                <p>
                  Duis cursus, mi quis viverra ornare, eros dolor nulla utimp
                  erdiet commodo diam libero vita faucibus nibh et jus cursus id
                  rutrum lore ut sem vitae risus tristique posuere
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
              <div className="footer-widjet style6 pl-20">
                <h3>Company</h3>
                <div className="link-list">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="flaticon-next"></i>Klane Currency Exchange
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="flaticon-next"></i>Klane Currency Services
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="flaticon-next"></i>Compliance FAQ
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="flaticon-next"></i>Online Payment
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="flaticon-next"></i>Master Card
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6">
              <div className="footer-widjet style6">
                <h3>Useful Links</h3>
                <div className="link-list">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="flaticon-next"></i>Outgoing Transfer
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="flaticon-next"></i>Incoming Transfer
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="flaticon-next"></i>Transfer Disclaimer
                      </Link>
                    </li>
                    <li>
                      <Link to="/terms-conditions">
                        <i className="flaticon-next"></i>Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">
                        <i className="flaticon-next"></i>Privacy & Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="agency-subscribe style3">
                <h3>Subscribe Newsletter</h3>
                <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    name="EMAIL"
                    required
                  />
                  <button className="exchange-default-btn btn" type="submit">
                    Join Us!
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copy-right-area style9 bg-color-0a0a0a">
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
