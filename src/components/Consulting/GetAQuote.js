import * as React from "react"
import { Link } from "gatsby"
import quoteImg from "../../images/quote-img.png"

const GetAQuote = () => {
  return (
    <>
      <div className="consulting-quote-area pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="quote-content">
                <div className="quote-title">
                  <span>Get A Quote</span>
                  <h2>
                    Feel Any Project For Business Consulting Get Started Us
                  </h2>
                </div>

                <Link to="#contact" className="consulting-default-btn mr-20 btn">
                  Get Started <i className="flaticon-right-arrow-3"></i>
                </Link>

                <Link to="#contact" className="consulting-default-btn style2 btn">
                  Get A Quote <i className="flaticon-right-arrow-3"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="quote-img">
                <img src={quoteImg} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GetAQuote
