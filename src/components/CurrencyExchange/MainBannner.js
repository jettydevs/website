import * as React from "react"
import { Link } from "gatsby"

import bannerMainImg from "../../images/banner/banner-img-11.png"
import bannerBgImg from "../../images/banner/banner-bg-7.jpg"

import flagImg1 from "../../images/flag/flag-8.jpg"
import flagImg2 from "../../images/flag/flag-9.jpg"

import bannerShape10 from "../../images/banner/banner-shape-10.png"
import bannerShape11 from "../../images/banner/banner-shape-11.png"
import bannerShape12 from "../../images/banner/banner-shape-12.png"

import userImg1 from "../../images/reviews/reviews-17.png"
import userImg2 from "../../images/reviews/reviews-18.png"
import userImg3 from "../../images/reviews/reviews-19.png"
import userImg4 from "../../images/reviews/reviews-20.png"
 
const MainBannner = () => {
  return (
    <>
      <div 
        id="home" 
        className="currency-exchaange-banner"
        style={{ backgroundImage: `url(${bannerBgImg})` }}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div 
              className="col-lg-6" 
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200" 
              data-aos-once="true"
            >
              <div className="currency-exchange-banner-content">
                <span>Welcome to Currency Exchange</span>
                <h1>Best Foreign Currency Exchange</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolor magna aliqua. Ut enim ad minim
                  venia mquis ctetur adipisc.
                </p>

                <div className="banner-btn">
                  <Link
                    to="#converter"
                    className="exchange-default-btn style2 mr-20 btn"
                  >
                    Get A Wallet <i className="flaticon-right-arrow-2"></i>
                  </Link>
                  <Link to="#converter" className="exchange-default-btn btn">
                    Register Now <i className="flaticon-right-arrow-2"></i>
                  </Link>
                </div>

                <div className="riviews">
                  <ul className="img-list">
                    <li>
                      <img
                        src={userImg1}
                        alt="Image"
                      />
                    </li>
                    <li>
                      <img
                        src={userImg2}
                        alt="Image"
                      />
                    </li>
                    <li>
                      <img
                        src={userImg3}
                        alt="Image"
                      />
                    </li>
                    <li>
                      <img
                        src={userImg4}
                        alt="Image"
                      />
                    </li>
                  </ul>
                  <span>23k Client Review</span>
                </div>

                <img
                  src={bannerShape12}
                  className="banner-shape-4"
                  alt="Image"
                />
              </div>
            </div>

            <div 
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400" 
              data-aos-once="true"
            >
              <div className="currency-exchange-banner-image">
                <img src={bannerMainImg} alt="Image" />

                <div className="currency-converter-form">
                  <h3>Currency Converter</h3>
                  <form onSubmit={e => e.preventDefault()}>
                    <div className="form-group">
                      <label className="form-label">I'd Like to Exchange</label>
                      <select
                        className="form-select form-control"
                      >
                        <option efaultselected="true">$5.00</option>
                        <option defaultValue="1">One</option>
                        <option defaultValue="2">Two</option>
                        <option defaultValue="3">Three</option>
                      </select>
                    </div>

                    <div className="form-group icon-add1">
                      <label className="form-label">Country From</label>
                      <select
                        className="form-select form-control"
                      >
                        <option efaultselected="true">USD-US Dollar</option>
                        <option defaultValue="1">One</option>
                        <option defaultValue="2">Two</option>
                        <option defaultValue="3">Three</option>
                      </select>
                      <img src={flagImg1} alt="Image" />
                    </div>

                    <div className="form-group icon-add2">
                      <label className="form-label">Country To</label>
                      <select
                        className="form-select form-control"
                      >
                        <option efaultselected="true">EUR-Euro</option>
                        <option defaultValue="1">One</option>
                        <option defaultValue="2">Two</option>
                        <option defaultValue="3">Three</option>
                      </select>
                      <img src={flagImg2} alt="Image" />
                    </div>

                    <button type="submit" className="exchange-default-btn btn">
                      Explore More <i className="flaticon-right-arrow-2"></i>
                    </button>
                  </form>
                </div>

                {/* Shape Images */}
                <img
                  src={bannerShape10}
                  className="banner-shape-1"
                  alt="Image"
                />
                <img
                  src={bannerShape11}
                  className="banner-shape-2"
                  alt="Image"
                />
                <img
                  src={bannerShape12}
                  className="banner-shape-3"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainBannner
