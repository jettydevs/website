import * as React from "react"
import { Link } from "gatsby"

import logo from "../../images/logo/logo.svg"
import AngelListIcon from "./assets/AngelListIcon"
import CrunchbaseIcon from "./assets/CrunchbaseIcon"

const Footer = () => {
  return (
    <>
      <div className="agency-footer-area bg-color-f9f5f4 pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="logo-area style3">
                <Link to="/consulting">
                  <img src={logo} className="logo-1" alt="Image" style={{ height: '40px', marginBottom: '13px' }}/>
                </Link>
                <p>
                We are dedicated to providing high-quality and innovative web development solutions to help businesses succeed."
                </p>

                <div className="social-links">
                  <ul>
                    <li>
                      <a
                        href="https://twitter.com/jettydevs"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="flaticon-twitter-3"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/jettydevs"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="flaticon-linkedin-1"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.crunchbase.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <CrunchbaseIcon />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.angellist.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <AngelListIcon />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6">
              <div className="footer-widjet style3">
                <h3>Company </h3>
                <div className="link-list">
                  <ul>
                    <li>
                      <Link to="/what-we-do">
                        <i className="flaticon-next"></i>What We Do
                      </Link>
                    </li>
                    <li>
                      <Link to="/services">
                        <i className="flaticon-next"></i>Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/team">
                        <i className="flaticon-next"></i>About Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="footer-widjet style3 pl-20">
                <h3>Useful Links</h3>
                <div className="link-list">
                  <ul>
                    <li>
                      <Link to="/terms-conditions">
                        <i className="flaticon-next"></i>Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">
                        <i className="flaticon-next"></i>Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="get-in-touch style3">
                <h3>Get In Touch</h3>
                <ul>
                  <li>
                    <a href="tel:+12023459999">
                      <i className="flaticon-phone-call-2"></i> +12023459999
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hi@jettydevs.com">
                      {" "}
                      <i className="flaticon-email"></i> hi@jettydevs.com
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

      <div className="copy-right-area style4 bg-color-f9f5f4">
        <div className="container">
          <p>
            ©JettyDevs LLC - 2023
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
