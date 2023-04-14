import * as React from "react"

import contactImg from "../../images/contact-img.jpg"
import shape33 from "../../images/shape/shape-33.png"

const Contact = () => {
  return (
    <>
      <div id="contact" className="photography-contact-area ptb-100 bg-color-f9f9f9">
        <div className="container">
          <div className="photography-section-title">
            <span>CONTACT ME</span>
            <h2>Looking for a Photographer?</h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="photography-contact-form pr-20">
                <h3>Let’s Chat!</h3>
                <form onSubmit={e => e.preventDefault()}>
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Project Type</label>
                    <select
                      className="form-select form-control"
                    >
                      <option defaultselected="true">Wedding</option>
                      <option defaultValue="1">Modeling</option>
                      <option defaultValue="2">Newborn</option>
                      <option defaultValue="3">Travel</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Budget</label>
                    <select
                      className="form-select form-control"
                      aria-label="Default select example"
                    >
                      <option defaultselected="true">$1,000 - $6,000</option>
                      <option defaultValue="1">$1,500 - $8,000</option>
                      <option defaultValue="2">$2,000 - $9,000</option>
                      <option defaultValue="3">$1,200 - $5,000</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      placeholder="Type Message"
                      rows="4"
                    ></textarea>
                  </div>

                  <button type="submit" className="photography-default-btn btn">
                    Send Message <i className="flaticon-right-arrow-3"></i>
                  </button>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="photography-contact-img pl-20">
                <img src={contactImg} alt="Image" />
              </div>
            </div>
          </div>

          <img
            src={shape33}
            className="contact-shape-1"
            alt="Image"
          />
        </div>
      </div>
    </>
  )
}

export default Contact
