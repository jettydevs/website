import * as React from "react"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

import trendingArtworkImg1 from "../../images/tranding/tranding-1.jpg"
import trendingArtworkImg2 from "../../images/tranding/tranding-2.jpg"
import trendingArtworkImg3 from "../../images/tranding/tranding-3.jpg"

import smallImg1 from "../../images/tranding/tranding-sm-1.png"
import smallImg2 from "../../images/tranding/tranding-sm-2.png"
import smallImg3 from "../../images/tranding/tranding-sm-3.png"
import smallImg4 from "../../images/tranding/tranding-sm-4.png"

const TrendingArtwork = () => {
  return (
    <>
      <div id="tranding" className="nft-tranding-area pt-100 pb-70">
        <div className="container">
          <div className="trnding-top-content">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-8">
                <div className="nft-section-title">
                  <h2>Trending Artwork</h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-4">
                <div className="tranding-btn">
                  <Link to="#" className="nft-default-btn mr-20 btn">
                    Explore More <i className="flaticon-right-arrow-2"></i>
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
            }}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="tranding-slider"
          >
            <SwiperSlide>
              <div className="nft-tranding-card">
                <div className="tanding-img">
                  <img src={trendingArtworkImg1} alt="Image" />

                  <div className="tranding-list">
                    <ul>
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
                </div>

                <div className="tranding-content">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <div className="left-content">
                        <h3>To Infinity</h3>
                        <span>105 ETH 12/14</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="right-content">
                        <h4>
                          <i className="flaticon-heart-1"></i> 303
                        </h4>
                        <span>Bid 60 ETH</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="nft-tranding-card">
                <div className="tanding-img">
                  <img src={trendingArtworkImg2} alt="Image" />
                  <div className="tranding-list">
                    <ul>
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
                </div>

                <div className="tranding-content">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <div className="left-content">
                        <h3>Les Immortal's</h3>
                        <span>105 ETH 12/14</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="right-content">
                        <h4>
                          <i className="flaticon-heart-1"></i> 303
                        </h4>
                        <span>Bid 60 ETH</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="nft-tranding-card">
                <div className="tanding-img">
                  <img src={trendingArtworkImg3} alt="Image" />
                  <div className="tranding-list">
                    <ul>
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
                </div>

                <div className="tranding-content">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <div className="left-content">
                        <h3>Walking on Air</h3>
                        <span>105 ETH 12/14</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="right-content">
                        <h4>
                          <i className="flaticon-heart-1"></i> 303
                        </h4>
                        <span>Bid 60 ETH</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="nft-tranding-card">
                <div className="tanding-img">
                  <img src={trendingArtworkImg2} alt="Image" />
                  <div className="tranding-list">
                    <ul>
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
                </div>

                <div className="tranding-content">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <div className="left-content">
                        <h3>Les Immortal's</h3>
                        <span>105 ETH 12/14</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="right-content">
                        <h4>
                          <i className="flaticon-heart-1"></i> 303
                        </h4>
                        <span>Bid 60 ETH</span>
                      </div>
                    </div>
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

export default TrendingArtwork
