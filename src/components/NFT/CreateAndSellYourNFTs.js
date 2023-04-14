import * as React from "react"

import icon1 from "../../images/buy-and-sell/sell-10.png"
import icon2 from "../../images/buy-and-sell/sell-11.png"
import icon3 from "../../images/buy-and-sell/sell-12.png"

const CreateAndSellYourNFTs = () => {
  return (
    <>
      <div className="create-and-sell-area bg-color-0a0a0a pt-100 pb-70">
        <div className="container">
          <div className="nft-section-title style2">
            <h2>Create & Sell Your NFTs</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="creat-and-sell-card">
                <img src={icon1} alt="Image" />
                <h3>Set Up Your Wallet</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus errorc cusan sit
                  volup tatem accu santium dolorem que laud antium, totam rem.
                </p>
                <div className="number">01</div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="creat-and-sell-card">
                <img src={icon2} alt="Image" />
                <h3>Add Your NFT's</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus errorc cusan sit
                  volup tatem accu santium dolorem que laud antium, totam rem.
                </p>
                <div className="number">02</div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="creat-and-sell-card">
                <img src={icon3} alt="Image" />
                <h3>Sell Your NFT's</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus errorc cusan sit
                  volup tatem accu santium dolorem que laud antium, totam rem.
                </p>
                <div className="number">03</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateAndSellYourNFTs
