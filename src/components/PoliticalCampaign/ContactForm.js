import * as React from "react"

const ContactForm = () => {
  return (
    <>
      <div id="contact" className="ptb-100 bg-f7f7f7">
        <div className="container">
          <div className="political-section-title">
            <span>Contact</span>
            <h2>Get In Touch</h2>
          </div>
 
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="contact_form">
                <form onSubmit={e => e.preventDefault()}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="mb-4">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="mb-4">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Phone Number"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="mb-4">
                        <textarea 
                          className="form-control"
                          rows="5"
                          placeholder="Your Message..."
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn political-default-btn">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactForm
