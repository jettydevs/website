import * as React from "react"

import avatorImg1 from "../../images/collection/avator-img-1.png"
import avatorImg2 from "../../images/collection/avator-img-2.png"
import avatorImg3 from "../../images/collection/avator-img-3.png"

import hotCollectionImg1 from "../../images/collection/hot-collection1.png"
import hotCollectionImg2 from "../../images/collection/hot-collection2.png"
import hotCollectionImg3 from "../../images/collection/hot-collection3.png"

const HotCollections = () => {
  return (
    <>
      <div id="collections" className="nft-collection-card pt-100 pb-70">
        <div className="container">
          <div className="nft-section-title">
            <h2>Hot Collections</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="collection-card">
                <div className="collction-top-content">
                  <div className="row">
                    <div className="col-lg-7 col-md-8">
                      <div className="author-profile">
                        <img
                          src={avatorImg1}
                          alt="Image"
                        />
                        <h3>Art Blocks</h3>
                        <span>Created by Konx</span>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-4">
                      <div className="heart-and-number">
                        <span>
                          <i className="flaticon-heart-1"></i>303
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="collection-img-wrap">
                  <img src={hotCollectionImg1} alt="Image" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="collection-card">
                <div className="collction-top-content">
                  <div className="row">
                    <div className="col-lg-7 col-md-8">
                      <div className="author-profile">
                        <img
                          src={avatorImg2}
                          alt="Image"
                        />
                        <h3>Art Blocks</h3>
                        <span>Created by Konx</span>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-4">
                      <div className="heart-and-number">
                        <span>
                          <i className="flaticon-heart-1"></i>303
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="collection-img-wrap">
                  <img src={hotCollectionImg2} alt="Image" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="collection-card">
                <div className="collction-top-content">
                  <div className="row">
                    <div className="col-lg-7 col-md-8">
                      <div className="author-profile">
                        <img
                          src={avatorImg3}
                          alt="Image"
                        />
                        <h3>Art Blocks</h3>
                        <span>Created by Konx</span>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-4">
                      <div className="heart-and-number">
                        <span>
                          <i className="flaticon-heart-1"></i>303
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="collection-img-wrap">
                  <img src={hotCollectionImg3} alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HotCollections
