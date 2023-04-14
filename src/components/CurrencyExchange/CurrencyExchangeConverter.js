import * as React from "react"
import { Link } from "gatsby"

import USAFlag from "../../images/flag/flag-2.jpg"
import UKFlag from "../../images/flag/flag-3.jpg"
import AustraliaFlag from "../../images/flag/flag-4.jpg"
import BrazilFlag from "../../images/flag/flag-5.jpg"
import JapanFlag from "../../images/flag/flag-6.jpg"
import MexicoFlag from "../../images/flag/flag-7.jpg"

import downIcon from "../../images/svg-icon/icon-6.png"

const CurrencyExchangeConverter = () => {
  return (
    <>
      <div id="converter" className="converter-area pt-100">
        <div id="particles-js"></div>
        <div className="container">
          <div className="exchange-section-title style2">
            <span>Our Converter</span>
            <h2>Currency Exchange Converter</h2>
          </div>

          <div className="input-area">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <div className="row g-0">
                    <div className="col-lg-6 col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="I Pay"
                      />
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <select
                        className="form-select form-control" 
                        style={{ backgroundImage: `url(${downIcon})` }}
                      >
                        <option defaultselected="true">GBP (United Kingdom)</option>
                        <option defaultValue="1">JPY (Japan)</option>
                        <option defaultValue="2">AUD (Australia)</option>
                        <option defaultValue="3">JPY (Japan)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <div className="row g-0">
                    <div className="col-lg-6 col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="I Need"
                      />
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <select
                        className="form-select form-control"
                        style={{ backgroundImage: `url(${downIcon})` }}
                      >
                        <option defaultselected="true">AUD (Australia)</option>
                        <option defaultValue="1">USD (USA)</option>
                        <option defaultValue="2">MXN (Mexico)</option>
                        <option defaultValue="3">BRL (Brazil)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bgb">
            <ul>
              <li>1 BGP = 0.786 AUD</li>
              <li>1 AUD = 1.2722 BGP</li>
            </ul>
          </div>

          <div className="converter-form">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Flag</th>
                  <th scope="col">Code</th>
                  <th scope="col">Country </th>
                  <th scope="col">We Buy</th>
                  <th scope="col">We Sell</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="flag">
                    <img src={USAFlag} alt="Image" />
                  </td>

                  <td className="code">
                    <a href="#">USD</a>
                  </td>

                  <td className="country">
                    <p>United States of America</p>
                  </td>

                  <td className="buy">
                    <span className="text-success">+1.50</span>
                  </td>

                  <td className="sell">
                    <span className="text-success">+1.50234</span>
                  </td>
                </tr>
                
                <tr>
                  <td className="flag">
                    <img src={UKFlag} alt="Image" />
                  </td>

                  <td className="code">
                    <a href="#">GBP</a>
                  </td>

                  <td className="country">
                    <p>United Kingdom</p>
                  </td>

                  <td className="buy">
                    <span className="text-success">+1.50405</span>
                  </td>

                  <td className="sell">
                    <span className="text-success">+1.60234</span>
                  </td>
                </tr>

                <tr>
                  <td className="flag">
                    <img src={AustraliaFlag} alt="Image" />
                  </td>

                  <td className="code">
                    <a href="#">AUD</a>
                  </td>

                  <td className="country">
                    <p>Australia</p>
                  </td>

                  <td className="buy">
                    <span className="text-success">+0.8950</span>
                  </td>

                  <td className="sell">
                    <span className="text-success">+1.9023</span>
                  </td>
                </tr>

                <tr>
                  <td className="flag">
                    <img src={BrazilFlag} alt="Image" />
                  </td>

                  <td className="code">
                    <a href="#">BRL</a>
                  </td>

                  <td className="country">
                    <p>Brazil</p>
                  </td>

                  <td className="buy">
                    <span className="text-danger">-0.54670</span>
                  </td>

                  <td className="sell">
                    <span className="text-danger">-1.20234</span>
                  </td>
                </tr>

                <tr>
                  <td className="flag">
                    <img src={JapanFlag} alt="Image" />
                  </td>

                  <td className="code">
                    <a href="#">JPY</a>
                  </td>

                  <td className="country">
                    <p>Japan</p>
                  </td>

                  <td className="buy">
                    <span className="text-success">+0.0102</span>
                  </td>

                  <td className="sell">
                    <span className="text-success">+1.01023</span>
                  </td>
                </tr>
                
                <tr>
                  <td className="flag">
                    <img src={MexicoFlag} alt="Image" />
                  </td>

                  <td className="code">
                    <a href="#">MXN</a>
                  </td>

                  <td className="country">
                    <p>Mexico</p>
                  </td>

                  <td className="buy">
                    <span className="text-success">+1.1045</span>
                  </td>

                  <td className="sell">
                    <span className="text-success">+1.0234</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="list">
              <ul className="d-flex justify-content-between">
                <li>
                  <span>Last Updated Jan 22, 2022</span>
                </li>
                <li>
                  <Link to="#">
                    More Currencies <i className="flaticon-right-arrow-1"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CurrencyExchangeConverter
