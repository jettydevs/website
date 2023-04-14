import * as React from "react"
import { Link } from "gatsby"

import authorBgImg1 from "../../images/author/author-1.jpg"
import authorBgImg2 from "../../images/author/author-2.jpg"
import authorBgImg3 from "../../images/author/author-3.jpg"

import authorImg1 from "../../images/author/author-4.png"
import authorImg2 from "../../images/author/author-5.png"
import authorImg3 from "../../images/author/author-6.png"

const TopAuthors = () => {
  return (
    <>
      <div id="author" className="nft-author-area bg-color-0a0a0a pt-100 pb-70">
        <div className="container">
          <div className="nft-author-top-content">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-8">
                <div className="nft-section-title style2">
                  <h2>Top Author</h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-4">
                <div className="author-btn">
                  <Link to="#collections" className="nft-default-btn mr-20 btn">
                    Place a Bid <i className="flaticon-right-arrow-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="nft-author-card">
                <div className="author-img">
                  <img src={authorBgImg1} alt="Image" />
                  <div className="author-profile-img">
                    <img src={authorImg1} alt="Image" />
                  </div>
                </div>
                <div className="author-content">
                  <h3>Jhones Nickey</h3>
                  <span>@jhonartist</span>
                  <ul className="d-flex justify-content-between">
                    <li>
                      <h3>315</h3>
                      <span>Followers</span>
                    </li>
                    <li>
                      <h3>230</h3>
                      <span>Following</span>
                    </li>
                    <li>
                      <h3>132</h3>
                      <span>Artworks</span>
                    </li>
                  </ul>
                  <Link to="#" className="nft-default-btn mr-20 btn">
                    Follow <i className="flaticon-right-arrow-2"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="nft-author-card">
                <div className="author-img">
                  <img src={authorBgImg2} alt="Image" />
                  <div className="author-profile-img">
                    <img src={authorImg2} alt="Image" />
                  </div>
                </div>
                <div className="author-content">
                  <h3>Isabella Ava</h3>
                  <span>@avaartist</span>
                  <ul className="d-flex justify-content-between">
                    <li>
                      <h3>315</h3>
                      <span>Followers</span>
                    </li>
                    <li>
                      <h3>230</h3>
                      <span>Following</span>
                    </li>
                    <li>
                      <h3>132</h3>
                      <span>Artworks</span>
                    </li>
                  </ul>
                  <Link to="#" className="nft-default-btn mr-20 btn">
                    Follow <i className="flaticon-right-arrow-2"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="nft-author-card">
                <div className="author-img">
                  <img src={authorBgImg3} alt="Image" />
                  <div className="author-profile-img">
                    <img src={authorImg3} alt="Image" />
                  </div>
                </div>
                <div className="author-content">
                  <h3>Michael William</h3>
                  <span>@williamartist</span>
                  <ul className="d-flex justify-content-between">
                    <li>
                      <h3>315</h3>
                      <span>Followers</span>
                    </li>
                    <li>
                      <h3>230</h3>
                      <span>Following</span>
                    </li>
                    <li>
                      <h3>132</h3>
                      <span>Artworks</span>
                    </li>
                  </ul>
                  <Link to="#" className="nft-default-btn mr-20 btn">
                    Follow <i className="flaticon-right-arrow-2"></i>
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

export default TopAuthors
