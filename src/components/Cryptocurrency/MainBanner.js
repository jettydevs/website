import * as React from "react"
import { Link } from "gatsby"

import bannerMainImg from "../../images/banner/banner-img-9.png"
import bannerBgImg from "../../images/banner/banner-bg-5.jpg"
import bannerShape6 from "../../images/banner/banner-shape-6.png"
import bannerShape7 from "../../images/banner/banner-shape-7.png"
import bannerShape8 from "../../images/banner/banner-shape-8.png"
import bannerShape9 from "../../images/banner/banner-shape-9.png"

const MainBanner = () => {
  return (
    <>
      <div
        id="home"
        className="currency-banner-area"
        style={{ backgroundImage: `url(${bannerBgImg})` }}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div 
                className="currency-banner-content" 
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400" 
                data-aos-once="true"
              >
                <span>Welcome To Our Cryptocurrency</span>
                <h1>Easy Buy & Sell Cryptocurrency!</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolor magna aliqua. Ut enim ad minim
                  venia mquis ctetur adipisc.
                </p>

                <Link to="#" className="currency-default-btn btn">
                  Register Now
                </Link>

                {/* Shape Images */}
                <img
                  src={bannerShape8}
                  className="banner-shape-3"
                  alt="Image"
                />
                <img
                  src={bannerShape9}
                  className="banner-shape-4"
                  alt="Image"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div 
                className="currency-banner-image"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="600" 
                data-aos-once="true"
              >
                <img src={bannerMainImg} alt="Image" />

                {/* Shape Images */}
                <img
                  src={bannerShape6}
                  className="banner-shape-1"
                  alt="Image"
                />
                <img
                  src={bannerShape7}
                  className="banner-shape-2"
                  alt="Image"
                />

                {/* Form */}
                <div className="currency-form">
                  <form onSubmit={e => e.preventDefault()}>
                    <div className="form-group">
                      <label className="form-label">Your Pay</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="1"
                      />
                      <select className="form-select">
                        <option defaultselected="true">Bitcoin</option>
                        <option defaultValue="1">One</option>
                        <option defaultValue="2">Two</option>
                        <option defaultValue="3">Three</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Your Receive</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="30356.67"
                      />
                      <select className="form-select">
                        <option defaultselected="true">USD</option>
                        <option defaultValue="1">One</option>
                        <option defaultValue="2">Two</option>
                        <option defaultValue="3">Three</option>
                      </select>
                    </div>

                    <button type="submit" className="currency-default-btn btn">
                      Buy With Visa
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainBanner
