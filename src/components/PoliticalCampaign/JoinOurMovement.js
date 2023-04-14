import * as React from "react"
import { Link } from "gatsby"

import movementImg1 from "../../images/movement/movement-1.jpg"
import movementImg2 from "../../images/movement/movement-2.jpg"
import movementImg3 from "../../images/movement/movement-3.jpg"
import movementImg4 from "../../images/movement/movement-4.jpg"

const JoinOurMovement = () => {
  return (
    <>
      <div id="movement" className="political-movement-area ptb-100">
        <div className="container">
          <div className="political-section-title">
            <span>JOIN OUR MOVEMENT</span>
            <h2>We, Will, Make History Together!</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="political-movement-card">
                <div className="movement-img">
                  <img
                    src={movementImg1}
                    alt="Image"
                  />
                </div>
                <div className="movement-content">
                  <h1>
                    610,000 <span className="target">+</span>
                  </h1>
                  <p>Active voters</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="political-movement-card">
                <div className="movement-img">
                  <img
                    src={movementImg2}
                    alt="Image"
                  />
                </div>
                <div className="movement-content">
                  <h1>
                    30,000 <span className="target">+</span>
                  </h1>
                  <p>Our Volunteers</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="political-movement-card">
                <div className="movement-img">
                  <img
                    src={movementImg3}
                    alt="Image"
                  />
                </div>
                <div className="movement-content">
                  <h1>
                    169 <span className="target">+</span>
                  </h1>
                  <p>Days in campaign</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="political-movement-card">
                <div className="movement-img">
                  <img
                    src={movementImg4}
                    alt="Image"
                  />
                </div>
                <div className="movement-content">
                  <h1>
                    400,000 <span className="target">+</span>
                  </h1>
                  <p>Active Donors</p>
                </div>
              </div>
            </div>
          </div>

          <div className="movement-btn text-center">
            <Link to="#video" className="political-default-btn mr-20 btn">
              Join Our Movement
            </Link>
            <Link to="#video" className="political-default-btn style2 btn">
              Donate
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default JoinOurMovement
