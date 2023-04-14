import * as React from "react"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

import auctionImg1 from "../../images/auction/auction-1.jpg"
import auctionImg2 from "../../images/auction/auction-2.jpg"
import auctionImg3 from "../../images/auction/auction-3.jpg"
import auctionImg4 from "../../images/auction/auction-4.jpg"

import smallImg1 from "../../images/tranding/tranding-sm-1.png"
import smallImg2 from "../../images/tranding/tranding-sm-2.png"
import smallImg3 from "../../images/tranding/tranding-sm-3.png"
import smallImg4 from "../../images/tranding/tranding-sm-4.png"

const LiveAuctions = () => {
  return (
    <>
      <div id="liveAuctions" className="nft-live-auction-area ptb-100">
        <div className="container">
          <div className="auction-top-content">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-8">
                <div className="nft-section-title">
                  <h2>Live Auctions</h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-4">
                <div className="auction-btn">
                  <Link to="#" className="nft-default-btn mr-20 btn">
                    Place a Bid <i className="flaticon-right-arrow-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Swiper
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1199: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="live-action-slider"
          >
            <SwiperSlide>
              <div className="live-auction-card">
                <div className="auction-image">
                  <img src={auctionImg1} alt="Image" />
                </div>
                <div className="auction-content">
                  <div className="top-content">
                    <div className="row align-items-center">
                      <div className="col-5">
                        <ul className="img-list">
                          <li>
                            <img src={smallImg1} alt="Image" />
                          </li>
                          <li>
                            <img src={smallImg2} alt="Image" />
                          </li>
                          <li>
                            <img src={smallImg3} alt="Image" />
                          </li>
                          <li>
                            <img src={smallImg4} alt="Image" />
                          </li>
                        </ul>
                      </div>
                      <div className="col-4">
                        <span>10+Place Bid.</span>
                      </div>
                      <div className="col-3">
                        <div className="more-btn">
                          <a href="#">
                            <i className="ri-more-fill"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3>The Rusty Robots</h3>
                  <span>Highest Bid</span>
                  <div className="blottom-content">
                    <ul className="d-flex justify-content-between">
                      <li>105 ETH 12/14</li>
                      <li>
                        <i className="flaticon-heart-1"></i>303
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="live-auction-card">
                <div className="auction-image">
                  <img src={auctionImg2} alt="Image" />
                </div>
                <div className="auction-content">
                  <div className="top-content">
                    <div className="row align-items-center">
                      <div className="col-5">
                        <ul className="img-list">
                          <li>
                            <img src={smallImg1} alt="Image" />
                          </li>
                          <li>
                            <img src={smallImg2} alt="Image" />
                          </li>
                          <li>
                            <img src={smallImg3} alt="Image" />
                          </li>
                          <li>
                            <img src={smallImg4} alt="Image" />
                          </li>
                        </ul>
                      </div>
                      <div className="col-4">
                        <span>10+Place Bid.</span>
                      </div>
                      <div className="col-3">
                        <div className="more-btn">
                          <a href="#">
                            <i className="ri-more-fill"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3>Industrial Revolution</h3>
                  <span>Highest Bid</span>
                  <div className="blottom-content">
                    <ul className="d-flex justify-content-between">
                      <li>105 ETH 12/14</li>
                      <li>
                        <i className="flaticon-heart-1"></i>303
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="live-auction-card">
                <div className="auction-image">
                  <img src={auctionImg3} alt="Image" />
                </div>
                <div className="auction-content">
                  <div className="top-content">
                    <div className="row align-items-center">
                      <div className="col-5">
                        <ul className="img-list">
                          <li>
                            <img src={smallImg1} alt="Image" />
                          </li>
                          <li>
                            <img src={smallImg2} alt="Image" />
                          </li>
                          <li>
                            <img src={smallImg3} alt="Image" />
                          </li>
                          <li>
                            <img src={smallImg4} alt="Image" />
                          </li>
                        </ul>
                      </div>
                      <div className="col-4">
                        <span>10+Place Bid.</span>
                      </div>
                      <div className="col-3">
                        <div className="more-btn">
                          <a href="#">
                            <i className="ri-more-fill"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3>The Rusty Robots</h3>
                  <span>Highest Bid</span>
                  <div className="blottom-content">
                    <ul className="d-flex justify-content-between">
                      <li>105 ETH 12/14</li>
                      <li>
                        <i className="flaticon-heart-1"></i>303
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="live-auction-card">
                <div className="auction-image">
                  <img src={auctionImg4} alt="Image" />
                </div>
                <div className="auction-content">
                  <div className="top-content">
                    <div className="row align-items-center">
                      <div className="col-5">
                        <ul className="img-list">
                          <li>
                            <img src={smallImg1} alt="Image" />
                          </li>
                          <li>
                            <img src={smallImg2} alt="Image" />
                          </li>
                          <li>
                            <img src={smallImg3} alt="Image" />
                          </li>
                          <li>
                            <img src={smallImg4} alt="Image" />
                          </li>
                        </ul>
                      </div>
                      <div className="col-4">
                        <span>10+Place Bid.</span>
                      </div>
                      <div className="col-3">
                        <div className="more-btn">
                          <a href="#">
                            <i className="ri-more-fill"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3>Industrial Revolution</h3>
                  <span>Highest Bid</span>
                  <div className="blottom-content">
                    <ul className="d-flex justify-content-between">
                      <li>105 ETH 12/14</li>
                      <li>
                        <i className="flaticon-heart-1"></i>303
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="live-auction-card">
                <div className="auction-image">
                  <img src={auctionImg3} alt="Image" />
                </div>
                <div className="auction-content">
                  <div className="top-content">
                    <div className="row align-items-center">
                      <div className="col-5">
                        <ul className="img-list">
                          <li>
                            <img src={smallImg1} alt="Image" />
                          </li>
                          <li>
                            <img src={smallImg2} alt="Image" />
                          </li>
                          <li>
                            <img src={smallImg3} alt="Image" />
                          </li>
                          <li>
                            <img src={smallImg4} alt="Image" />
                          </li>
                        </ul>
                      </div>
                      <div className="col-4">
                        <span>10+Place Bid.</span>
                      </div>
                      <div className="col-3">
                        <div className="more-btn">
                          <a href="#">
                            <i className="ri-more-fill"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3>Industrial Revolution</h3>
                  <span>Highest Bid</span>
                  <div className="blottom-content">
                    <ul className="d-flex justify-content-between">
                      <li>105 ETH 12/14</li>
                      <li>
                        <i className="flaticon-heart-1"></i>303
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default LiveAuctions
