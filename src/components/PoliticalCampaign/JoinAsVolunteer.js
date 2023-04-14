import * as React from "react"

const JoinAsVolunteer = () => {
  return (
    <>
      <div className="pt-100">
        <div className="container">
          <div className="political-section-title">
            <span>VOLUNTEER</span>
            <h2>Join As Volunteer</h2>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="political-join-us-form">
                <form onSubmit={e => e.preventDefault()}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Subject</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
                          required
                        />
                      </div>
                    </div>
                  </div>
 
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      placeholder="Type Message"
                      rows="5"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="political-default-btn btn">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default JoinAsVolunteer
