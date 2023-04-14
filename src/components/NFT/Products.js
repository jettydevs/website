import * as React from "react"
import { Link } from "gatsby"

import productImg1 from "../../images/products/products-1.jpg"
import productImg2 from "../../images/products/products-2.jpg"
import productImg3 from "../../images/products/products-3.jpg"
import productImg4 from "../../images/products/products-4.jpg"
import productImg5 from "../../images/products/products-5.jpg"
import productImg6 from "../../images/products/products-6.jpg"

import smallImg1 from "../../images/tranding/tranding-sm-1.png"
import smallImg2 from "../../images/tranding/tranding-sm-2.png"
import smallImg3 from "../../images/tranding/tranding-sm-3.png"
import smallImg4 from "../../images/tranding/tranding-sm-4.png"

const Products = () => {
  return (
    <>
      <div id="products" className="nft-products-area pt-100 pb-70">
        <div className="container">
          <div className="trnding-top-content">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-8">
                <div className="nft-section-title">
                  <h2>Explore Products</h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-4">
                <div className="tranding-btn">
                  <Link to="#product" className="nft-default-btn mr-20 btn">
                    See More <i className="flaticon-right-arrow-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="nft-product-card">
                <div className="product-img">
                  <img
                    src={productImg1}
                    alt="Image"
                  />
                  <div className="number">
                    <span>
                      <i className="flaticon-heart-1"></i>303
                    </span>
                  </div>
                  <div className="products-bid-btn">
                    <a href="#" className="nft-default-btn mr-20 btn">
                      Place a Bid <i className="flaticon-right-arrow-2"></i>
                    </a>
                  </div>
                </div>

                <div className="product-content">
                  <div className="img-and-bid">
                    <ul className="img-list">
                      <li>
                        <img
                          src={smallImg1}
                          alt="Image"
                        />
                      </li>
                      <li>
                        <img
                          src={smallImg2}
                          alt="Image"
                        />
                      </li>
                      <li>
                        <img
                          src={smallImg3}
                          alt="Image"
                        />
                      </li>
                      <li>
                        <img
                          src={smallImg4}
                          alt="Image"
                        />
                      </li>
                    </ul>
                    <span>10+Place Bid.</span>
                  </div>

                  <h3>Exe Dream Hight</h3>
                  
                  <ul className="bottom-list d-flex justify-content-between">
                    <li>
                      <span>105 ETH 12/14</span>
                    </li>
                    <li>
                      <span>Bid 60 ETH</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="nft-product-card">
                <div className="product-img">
                  <img
                    src={productImg2}
                    alt="Image"
                  />
                  <div className="number">
                    <span>
                      <i className="flaticon-heart-1"></i>303
                    </span>
                  </div>
                  <div className="products-bid-btn">
                    <a href="#" className="nft-default-btn mr-20 btn">
                      Place a Bid <i className="flaticon-right-arrow-2"></i>
                    </a>
                  </div>
                </div>

                <div className="product-content">
                  <div className="img-and-bid">
                    <ul className="img-list">
                      <li>
                        <img
                          src={smallImg1}
                          alt="Image"
                        />
                      </li>
                      <li>
                        <img
                          src={smallImg2}
                          alt="Image"
                        />
                      </li>
                      <li>
                        <img
                          src={smallImg3}
                          alt="Image"
                        />
                      </li>
                      <li>
                        <img
                          src={smallImg4}
                          alt="Image"
                        />
                      </li>
                    </ul>
                    <span>10+Place Bid.</span>
                  </div>

                  <h3>Walking On Air</h3>

                  <ul className="bottom-list d-flex justify-content-between">
                    <li>
                      <span>105 ETH 12/14</span>
                    </li>
                    <li>
                      <span>Bid 60 ETH</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="nft-product-card">
                <div className="product-img">
                  <img
                    src={productImg3}
                    alt="Image"
                  />
                  <div className="number">
                    <span>
                      <i className="flaticon-heart-1"></i>303
                    </span>
                  </div>
                  <div className="products-bid-btn">
                    <a href="#" className="nft-default-btn mr-20 btn">
                      Place a Bid <i className="flaticon-right-arrow-2"></i>
                    </a>
                  </div>
                </div>

                <div className="product-content">
                  <div className="img-and-bid">
                    <ul className="img-list">
                      <li>
                        <img
                          src={smallImg1}
                          alt="Image"
                        />
                      </li>
                      <li>
                        <img
                          src={smallImg2}
                          alt="Image"
                        />
                      </li>
                      <li>
                        <img
                          src={smallImg3}
                          alt="Image"
                        />
                      </li>
                      <li>
                        <img
                          src={smallImg4}
                          alt="Image"
                        />
                      </li>
                    </ul>
                    <span>10+Place Bid.</span>
                  </div>

                  <h3>Dark-light Angel</h3>

                  <ul className="bottom-list d-flex justify-content-between">
                    <li>
                      <span>105 ETH 12/14</span>
                    </li>
                    <li>
                      <span>Bid 60 ETH</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="nft-product-card">
                <div className="product-img">
                  <img
                    src={productImg4}
                    alt="Image"
                  />
                  <div className="number">
                    <span>
                      <i className="flaticon-heart-1"></i>303
                    </span>
                  </div>
                  <div className="products-bid-btn">
                    <a href="#" className="nft-default-btn mr-20 btn">
                      Place a Bid <i className="flaticon-right-arrow-2"></i>
                    </a>
                  </div>
                </div>

                <div className="product-content">
                  <div className="img-and-bid">
                    <ul className="img-list">
                      <li>
                        <img
                          src={smallImg1}
                          alt="Image"
                        />
                      </li>
                      <li>
                        <img
                          src={smallImg2}
                          alt="Image"
                        />
                      </li>
                      <li>
                        <img
                          src={smallImg3}
                          alt="Image"
                        />
                      </li>
                      <li>
                        <img
                          src={smallImg4}
                          alt="Image"
                        />
                      </li>
                    </ul>
                    <span>10+Place Bid.</span>
                  </div>

                  <h3>Exe Dream Hight</h3>

                  <ul className="bottom-list d-flex justify-content-between">
                    <li>
                      <span>105 ETH 12/14</span>
                    </li>
                    <li>
                      <span>Bid 60 ETH</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="nft-product-card">
                <div className="product-img">
                  <img
                    src={productImg5}
                    alt="Image"
                  />
                  <div className="number">
                    <span>
                      <i className="flaticon-heart-1"></i>303
                    </span>
                  </div>
                  <div className="products-bid-btn">
                    <a href="#" className="nft-default-btn mr-20 btn">
                      Place a Bid <i className="flaticon-right-arrow-2"></i>
                    </a>
                  </div>
                </div>

                <div className="product-content">
                  <div className="img-and-bid">
                    <ul className="img-list">
                      <li>
                        <img
                          src={smallImg1}
                          alt="Image"
                        />
                      </li>
                      <li>
                        <img
                          src={smallImg2}
                          alt="Image"
                        />
                      </li>
                      <li>
                        <img
                          src={smallImg3}
                          alt="Image"
                        />
                      </li>
                      <li>
                        <img
                          src={smallImg4}
                          alt="Image"
                        />
                      </li>
                    </ul>

                    <span>10+Place Bid.</span>
                  </div>

                  <h3>Diamond Dog</h3>

                  <ul className="bottom-list d-flex justify-content-between">
                    <li>
                      <span>105 ETH 12/14</span>
                    </li>
                    <li>
                      <span>Bid 60 ETH</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="nft-product-card">
                <div className="product-img">
                  <img
                    src={productImg6}
                    alt="Image"
                  />
                  <div className="number">
                    <span>
                      <i className="flaticon-heart-1"></i>303
                    </span>
                  </div>
                  <div className="products-bid-btn">
                    <a href="#" className="nft-default-btn mr-20 btn">
                      Place a Bid <i className="flaticon-right-arrow-2"></i>
                    </a>
                  </div>
                </div>

                <div className="product-content">
                  <div className="img-and-bid">
                    <ul className="img-list">
                      <li>
                        <img
                          src={smallImg1}
                          alt="Image"
                        />
                      </li>
                      <li>
                        <img
                          src={smallImg2}
                          alt="Image"
                        />
                      </li>
                      <li>
                        <img
                          src={smallImg3}
                          alt="Image"
                        />
                      </li>
                      <li>
                        <img
                          src={smallImg4}
                          alt="Image"
                        />
                      </li>
                    </ul>
                    <span>10+Place Bid.</span>
                  </div>

                  <h3>Colorful Abstract</h3>

                  <ul className="bottom-list d-flex justify-content-between">
                    <li>
                      <span>105 ETH 12/14</span>
                    </li>
                    <li>
                      <span>Bid 60 ETH</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
