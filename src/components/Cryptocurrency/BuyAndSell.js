import * as React from "react"

import cryptocurrencyImg1 from "../../images/buy-and-sell/buy-1.png"
import cryptocurrencyImg2 from "../../images/buy-and-sell/buy-2.png"
import cryptocurrencyImg3 from "../../images/buy-and-sell/buy-3.png"

const BuyAndSell = () => {
  return (
    <>
      <div className="currency-buy-and-sell-area bg-color-1c2029 pt-100 pb-70">
        <div className="container">
          <div className="currency-section-title">
            <span>Buy & Sell</span>
            <h2>How to Buy & Sell Cryptocurrency</h2>
          </div>

          <div className="row justify-content-center">
            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200" 
              data-aos-once="true"
            >
              <div className="currency-buy-card">
                <div className="currency-buy-img">
                  <img src={cryptocurrencyImg1} alt="Image" />
                </div>
                <div className="curency-buy-content">
                  <h3>Bank Transfers</h3>
                  <p>
                    Lorem ipsum dolor sit amet consecter adpscing sed do eiusmod
                    ut labor psumet dolor magna aliqua enim ad minim venia
                  </p>
                </div>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400" 
              data-aos-once="true"
            >
              <div className="currency-buy-card">
                <div className="currency-buy-img">
                  <img src={cryptocurrencyImg2} alt="Image" />
                </div>
                <div className="curency-buy-content">
                  <h3>Online Wallets</h3>
                  <p>
                    Lorem ipsum dolor sit amet consecter adpscing sed do eiusmod
                    ut labor psumet dolor magna aliqua enim ad minim venia
                  </p>
                </div>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="500" 
              data-aos-once="true"
            >
              <div className="currency-buy-card">
                <div className="currency-buy-img">
                  <img src={cryptocurrencyImg3} alt="Image" />
                </div>
                <div className="curency-buy-content">
                  <h3>Cash Payment</h3>
                  <p>
                    Lorem ipsum dolor sit amet consecter adpscing sed do eiusmod
                    ut labor psumet dolor magna aliqua enim ad minim venia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BuyAndSell
