import * as React from "react"
import { Link } from "gatsby"

import joinUsImg from "../../images/newsletter-img/join-us-3.jpg"
import shapeImg from "../../images/newsletter-img/shape-3.png"

const BecomeAVolunteer = () => {
  return (
    <>
      <div className="political-freedom-area pb-100">
        <div className="container">
          <div 
            className="political-freedom-content"
            style={{ backgroundImage: `url(${shapeImg})` }}
          >
            <div className="row g-0 align-items-center">
              <div className="col-lg-7">
                <div className="freedom-contet">
                  <span>Join the Fight for Freedom</span>
                  <h2>We Have a Big, Committed Community</h2>
                  <Link
                    to="#"
                    className="political-default-btn mr-20 btn"
                  >
                    Become a Volunteer
                  </Link>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="freedom-img">
                  <img
                    src={joinUsImg}
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BecomeAVolunteer
