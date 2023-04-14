import * as React from "react"
import { Link } from "gatsby"

import sellerImg1 from "../../images/buy-and-sell/sell-2.png"
import sellerImg2 from "../../images/buy-and-sell/sell-3.png"
import sellerImg3 from "../../images/buy-and-sell/sell-4.png"
import sellerImg4 from "../../images/buy-and-sell/sell-5.png"
import sellerImg5 from "../../images/buy-and-sell/sell-6.png"
import sellerImg6 from "../../images/buy-and-sell/sell-7.png"
import sellerImg7 from "../../images/buy-and-sell/sell-8.png"
import sellerImg8 from "../../images/buy-and-sell/sell-9.png"

import icon1 from "../../images/buy-and-sell/sell-icon.png"

const TopSellers = () => {
  return (
    <>
      <div className="nft-top-sellers-area bg-color-0a0a0a ptb-100">
        <div className="container-fluid">
          <div className="container">
            <div className="top-sellers-top-content">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-8">
                  <div className="nft-section-title style2">
                    <h2>Top Sellers This Month</h2>
                  </div>
                </div>
                <div className="col-lg-6 col-md-4">
                  <div className="top-sellers-btn">
                    <a href="#" className="nft-default-btn mr-20 btn">
                      Explore More <i className="flaticon-right-arrow-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="top-sellers-box">
                <div className="row align-items-center">
                  <div className="col-8">
                    <div className="seller-address">
                      <img src={sellerImg1} alt="Image" />
                      <h3>Savannah Ngu</h3>
                      <span>
                        <img src={icon1} alt="Image" /> 18599
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="sell">
                      <span>+468.48%</span>
                    </div>
                  </div>
                </div>
                <div className="number">01</div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="top-sellers-box">
                <div className="row align-items-center">
                  <div className="col-8">
                    <div className="seller-address">
                      <img src={sellerImg2} alt="Image" />
                      <h3>Arlene McCoy</h3>
                      <span>
                      <img src={icon1} alt="Image" />
                        18599
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="sell">
                      <span>+468.48%</span>
                    </div>
                  </div>
                </div>
                <div className="number">02</div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="top-sellers-box">
                <div className="row align-items-center">
                  <div className="col-8">
                    <div className="seller-address">
                      <img src={sellerImg3} alt="Image" />
                      <h3>Esther Howard</h3>
                      <span>
                      <img src={icon1} alt="Image" />
                        18599
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="sell">
                      <span>+468.48%</span>
                    </div>
                  </div>
                </div>
                <div className="number">03</div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="top-sellers-box">
                <div className="row align-items-center">
                  <div className="col-8">
                    <div className="seller-address">
                      <img src={sellerImg4} alt="Image" />
                      <h3>Esther Howard</h3>
                      <span>
                      <img src={icon1} alt="Image" />
                        18599
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="sell">
                      <span>+468.48%</span>
                    </div>
                  </div>
                </div>
                <div className="number">04</div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="top-sellers-box">
                <div className="row align-items-center">
                  <div className="col-8">
                    <div className="seller-address">
                      <img src={sellerImg5} alt="Image" />
                      <h3>Jacob Jones</h3>
                      <span>
                      <img src={icon1} alt="Image" />
                        18599
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="sell">
                      <span>+468.48%</span>
                    </div>
                  </div>
                </div>
                <div className="number">05</div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="top-sellers-box">
                <div className="row align-items-center">
                  <div className="col-8">
                    <div className="seller-address">
                      <img src={sellerImg6} alt="Image" />
                      <h3>Jerome Bell</h3>
                      <span>
                      <img src={icon1} alt="Image" />
                        18599
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="sell">
                      <span>+468.48%</span>
                    </div>
                  </div>
                </div>
                <div className="number">06</div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="top-sellers-box">
                <div className="row align-items-center">
                  <div className="col-8">
                    <div className="seller-address">
                      <img src={sellerImg7} alt="Image" />
                      <h3>Wade Warren</h3>
                      <span>
                      <img src={icon1} alt="Image" />
                        18599
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="sell">
                      <span>+468.48%</span>
                    </div>
                  </div>
                </div>
                <div className="number">07</div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="top-sellers-box">
                <div className="row align-items-center">
                  <div className="col-8">
                    <div className="seller-address">
                      <img src={sellerImg8} alt="Image" />
                      <h3>Esther Howard</h3>
                      <span>
                        <img src={icon1} alt="Image" />
                        18599
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="sell">
                      <span>+468.48%</span>
                    </div>
                  </div>
                </div>
                <div className="number">08</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopSellers
