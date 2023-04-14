import * as React from "react"
import { Link } from "gatsby"

import bannerMainImg from "../../images/banner/banner-img-10.png"
import authorImg from "../../images/reviews/reviews-16.png"
import bannerBgImg from "../../images/banner/banner-bg-6.jpg"

const MainBanner = () => {
  return (
    <>
      <div 
        id="home" 
        className="nft-banner-area"
        style={{ backgroundImage: `url(${bannerBgImg})` }}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div 
                className="nft-banner-content"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200" 
              >
                <span>NFT Marketplace</span>
                <h1>Discover Rare Artworks By World Class Artists</h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolor magna aliqua. Ut enim ad minim
                  venia mquis ctetur adipisc.
                </p>

                <Link to="#product" className="nft-default-btn mr-20 btn">
                  Explore More <i className="flaticon-right-arrow-2"></i>
                </Link>

                <Link to="#trading" className="nft-default-btn style2 btn">
                  Start Trading <i className="flaticon-right-arrow-2"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div 
                className="nft-banner-image"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400" 
              >
                <img src={bannerMainImg} alt="Image" />

                <div className="current-bid">
                  <div className="profile">
                    <img
                      src={authorImg}
                      alt="Image"
                    />
                    <h3>Willum Victor</h3>
                  </div>

                  <ul className="bid-list d-flex justify-content-between">
                    <li>
                      <p>Ends In</p>
                      <span>22.22</span>
                    </li>
                    <li>
                      <p>Current Bid</p>
                      <span>2.43 ETH</span>
                    </li>
                  </ul>

                  <Link to="#">
                    Place a Bid <i className="flaticon-right-arrow-2"></i>
                  </Link>
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
