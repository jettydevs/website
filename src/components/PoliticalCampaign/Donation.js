import * as React from "react"

import videoShapeImg from "../../images/video-img/video-shape-2.png"

const Donation = () => {
  return (
    <>
      <div 
        className="political-donation-content"
        style={{ backgroundImage: `url(${videoShapeImg})` }}
      >
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="donate-text">
              <span>Contribute For Us</span>
              <h2>Make A Donation For Your Country</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="select-and-donate">
              <form onSubmit={e => e.preventDefault()}>
                <ul>
                  <li>
                    <input type="checkbox" className="btn-check" id="check1" />
                    <label className="btn btn-outline-primary" htmlFor="check1">
                      $25
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" className="btn-check" id="check2" />
                    <label className="btn btn-outline-primary" htmlFor="check2">
                      $50
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" className="btn-check" id="check3" />
                    <label className="btn btn-outline-primary" htmlFor="check3">
                      $100
                    </label>
                  </li>
                  <li>
                    <button
                      type="submit"
                      className="political-default-btn style2 btn"
                    >
                      {" "}
                      Donate Now
                    </button>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Donation
