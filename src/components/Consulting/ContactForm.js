import * as React from "react"

const ContactForm = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://script.google.com/macros/s/AKfycbyJEn7Yob-SfDAVq7swgkJVHfjsGULCBKSAhgiNaLmb8oN55Xtr1o62BC0mGgtWdpM2Fg/exec', true);
    xhr.send(formData);
  }
  return (
    <>
      <div id="contact" className="ptb-100 bg-f7f7f7">
        <div className="container">
          <div className="consulting-section-title">
            <span>Contact</span>
            <h2>Get In Touch</h2>
          </div>
 
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="contact_form" onSubmit={onSubmit}>
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-4">
                        <input
                          name="name"
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
                          name="email"
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
                          name="phone"
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
                          name="subject"
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
                          name="message"
                          className="form-control"
                          rows="5"
                          placeholder="Your Message..."
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn consulting-default-btn">
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
