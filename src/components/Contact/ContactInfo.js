import * as React from "react"
import { Link } from "gatsby"

const ContactInfo = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="contact-info-card">
                <i className="ri-smartphone-line"></i>
                <p><a href="tel:+1 650 5187322">+1 650 5187322</a></p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="contact-info-card">
                <i className="ri-mail-line"></i>
                <p><a href="mailto:hi@jettydevs.com">hi@jettydevs.com</a></p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="contact-info-card">
                <i className="ri-map-pin-2-fill"></i>
                <p><a href="#" target="_blank" rel="noreferrer">3004 3rd Ln, Los Angeles, California, 11</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;