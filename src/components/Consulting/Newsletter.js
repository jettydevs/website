import * as React from "react"

import shapeImg from "../../images/newsletter-img/shape-2.png"

const Newsletter = () => {
  return (
    <>
      <div id="join" className="consulting-join-us-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="consulting-join-content">
                <h2>Join Our Newsletter</h2>
                <p>
                  For receiving our news and updates in your inbox directly.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="consulting-join-us-form">
                <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email Address"
                    name="EMAIL"
                    required
                  />
                  <button className="consulting-default-btn btn" type="submit">
                    Subscribe <i className="flaticon-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <img
            src={shapeImg}
            className="join-us-shape-1"
            alt="Image"
          />
        </div>
      </div>
    </>
  )
}

export default Newsletter
