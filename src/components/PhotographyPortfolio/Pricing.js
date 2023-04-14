import * as React from "react"
import { Link } from "gatsby"

import shape32 from "../../images/shape/shape-32.png"

const Pricing = () => {
  return (
    <>
      <div
        id="pricing"
        className="photography-pricing-area bg-color-f9f9f9 pt-100 pb-70"
      >
        <div className="container">
          <div className="photography-section-title">
            <span>PRICING TABLE</span>
            <h2>Simple Pricing Structure</h2>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="photography-pricing-card">
                <span>Standard</span>
                <h1>$250</h1>
                
                <ul className="pricing-list">
                  <li>
                    3 Hours Session <i className="flaticon-basic-tick"></i>
                  </li>
                  <li>
                    Photo Editing <i className="flaticon-basic-tick"></i>
                  </li>
                  <li>
                    50 Images Soft Copy <i className="flaticon-basic-tick"></i>
                  </li>
                  <li>
                    50 Hard Copy <i className="flaticon-basic-tick"></i>
                  </li>
                </ul>

                <Link to="#" className="photography-default-btn style2 btn">
                  Buy Now <i className="flaticon-right-arrow-3"></i>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <div className="photography-pricing-card active">
                <span>Premium</span>
                <h1>$350</h1>

                <ul className="pricing-list">
                  <li>
                    3 Hours Session <i className="flaticon-basic-tick"></i>
                  </li>
                  <li>
                    Photo Editing <i className="flaticon-basic-tick"></i>
                  </li>
                  <li>
                    50 Images Soft Copy <i className="flaticon-basic-tick"></i>
                  </li>
                  <li>
                    50 Hard Copy <i className="flaticon-basic-tick"></i>
                  </li>
                </ul>

                <Link to="#" className="photography-default-btn style2 btn">
                  Buy Now <i className="flaticon-right-arrow-3"></i>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="600"
              data-aos-once="true"
            >
              <div className="photography-pricing-card">
                <span>Platinum</span>
                <h1>$550</h1>

                <ul className="pricing-list">
                  <li>
                    3 Hours Session <i className="flaticon-basic-tick"></i>
                  </li>
                  <li>
                    Photo Editing <i className="flaticon-basic-tick"></i>
                  </li>
                  <li>
                    50 Images Soft Copy <i className="flaticon-basic-tick"></i>
                  </li>
                  <li>
                    50 Hard Copy <i className="flaticon-basic-tick"></i>
                  </li>
                </ul>

                <Link to="#" className="photography-default-btn style2 btn">
                  Buy Now <i className="flaticon-right-arrow-3"></i>
                </Link>
              </div>
            </div>
          </div>

          <img src={shape32} className="pricing-shape-1" alt="Image" />
        </div>
      </div>
    </>
  )
}

export default Pricing
