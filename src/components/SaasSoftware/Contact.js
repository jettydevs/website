import * as React from "react"

import newsletterImg1 from "../../images/newsletter-img.png"
import shape6 from "../../images/shape/shape-6.png"
import shape7 from "../../images/shape/shape-7.png"

const Contact = () => {
  return (
    <>
      <div id="contact" className="contact-and-subscribe-area pt-100 pb-70">
        <div className="container">
          <div className="sass-section-title">
            <span>Be The First To Know</span>
            <h2>Grow Your Brand Presence on Social Media</h2>
          </div>

          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300" 
              data-aos-once="true"
            >
              <div className="contact-widget">
                <div className="widget-content">
                  <div className="contact-title">
                    <span>Contact</span>
                    <h3>Write Message</h3>
                  </div>

                  <div className="contact-form">
                    <form id="contactForm" onSubmit={e => e.preventDefault()}>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="form-control"
                              placeholder="Your name"
                              required
                            />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className="form-control"
                              placeholder="Email Address"
                              required
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="form-group">
                            <textarea
                              name="message"
                              className="form-control"
                              id="message"
                              cols="30"
                              rows="6"
                              placeholder="Message"
                              required
                            ></textarea>
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <button
                            type="submit"
                            className="sass-default-btn btn"
                          >
                            <span>Send message</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="600" 
              data-aos-once="true"
            >
              <div className="contact-widget">
                <div className="widget-content">
                  <div className="contact-title">
                    <span>Subscribe</span>
                    <h3>Our Newsletter</h3>
                  </div>

                  <div className="newsletter-img">
                    <img src={newsletterImg1} alt="Image" />
                  </div>

                  <div className="contact-form">
                    <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        name="EMAIL"
                        required
                      />

                      <button className="sass-default-btn btn" type="submit">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shape">
          <img
            src={shape6}
            className="contact-shape-1"
            alt="Image"
          />
          <img
            src={shape7}
            className="contact-shape-2"
            alt="Image"
          />
        </div>
      </div>
    </>
  )
}

export default Contact
