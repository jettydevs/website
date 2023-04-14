import * as React from "react"
import { Link } from "gatsby"

const TopCryptocurrencies = () => {
  return (
    <>
      <div className="buy-and-value-area bg-color-1c2029 ptb-100">
        <div className="container">
          <div className="currency-section-title">
            <span>Buy & Values</span>
            <h2>Top Cryptocurrencies</h2>
          </div>

          <div className="buy-and-value-table">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">24hr Change</th>
                  <th scope="col">Trade</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="serial">01</td>

                  <td className="name">
                    <Link to="#">
                      <i className="ri-bit-coin-fill"></i>
                      <p>
                        Bitcoin <span>BTC</span>
                      </p>
                    </Link>
                  </td>

                  <td className="price">
                    <p>
                      33,53487.80 <span>USD</span>
                    </p>
                  </td>

                  <td className="change">
                    <span>+5.14%</span>
                  </td>

                  <td className="trade">
                    <Link to="#" className="currency-default-btn btn">
                      Buy Now
                    </Link>
                  </td>
                </tr>
                
                <tr>
                  <td className="serial">02</td>

                  <td className="name">
                    <Link to="#">
                      <i className="ri-copper-diamond-line"></i>
                      <p>
                        Ethereum <span>ETH</span>
                      </p>
                    </Link>
                  </td>

                  <td className="price">
                    <p>
                      5,456.09 <span>USD</span>
                    </p>
                  </td>

                  <td className="change">
                    <span>+9.78%</span>
                  </td>

                  <td className="trade">
                    <Link to="#" className="currency-default-btn btn">
                      Buy Now
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td className="serial">03</td>

                  <td className="name">
                    <Link to="#">
                      <i className="ri-copper-diamond-fill"></i>
                      <p>
                        Bnb <span>BNB</span>
                      </p>
                    </Link>
                  </td>

                  <td className="price">
                    <p>
                      345.56 <span>USD</span>
                    </p>
                  </td>

                  <td className="change">
                    <span>+8.09%</span>
                  </td>

                  <td className="trade">
                    <Link to="#" className="currency-default-btn btn">
                      Buy Now
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td className="serial">04</td>

                  <td className="name">
                    <Link to="#">
                      <i className="ri-money-cny-circle-line"></i>
                      <p>
                        Stellar <span>XLM</span>
                      </p>
                    </Link>
                  </td>

                  <td className="price">
                    <p>
                      25.89 <span>USD</span>
                    </p>
                  </td>

                  <td className="change">
                    <span>+15.23%</span>
                  </td>

                  <td className="trade">
                    <Link to="#" className="currency-default-btn btn">
                      Buy Now
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td className="serial">05</td>

                  <td className="name">
                    <Link to="#">
                      <i className="ri-bit-coin-fill"></i>
                      <p>
                        Amp <span>AMP</span>
                      </p>
                    </Link>
                  </td>

                  <td className="price">
                    <p>
                      200.26 <span>USD</span>
                    </p>
                  </td>

                  <td className="change">
                    <span>+4.56%</span>
                  </td>

                  <td className="trade">
                    <Link to="#" className="currency-default-btn btn">
                      Buy Now
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center">
            <Link to="#" className="currency-default-btn style2 btn">
              See More Prices
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopCryptocurrencies
