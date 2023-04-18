import React, { useEffect, useState } from "react"

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState();
  const [isError, setIsError] = useState(true);
  const [isSuccess, setIsSuccess] = useState();
  const isDisabled = isLoading || isError || isSuccess;

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        setIsError(false)
      }, 1000 * 3)
    }
  }, [isError])


  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setIsSuccess(false)
      }, 1000 * 3)
    }
  }, [isSuccess])

  const onSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true)
    const formData = new FormData(event.target);

    try {
      await fetch('https://script.google.com/macros/s/AKfycbyJEn7Yob-SfDAVq7swgkJVHfjsGULCBKSAhgiNaLmb8oN55Xtr1o62BC0mGgtWdpM2Fg/exec', {
        method: 'post',
        mode: 'no-cors',
        body: formData,
      })

      setIsSuccess(true)
      event.target.reset();
    }
    catch(error) {
      setIsError(true)
    }
    finally {
      setIsLoading(false)
    }
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
                          disabled={isDisabled}
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
                          disabled={isDisabled}
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
                          disabled={isDisabled}
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
                          disabled={isDisabled}
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
                          disabled={isDisabled}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-center" style={{ position: 'relative'}}>
                    <button type="submit" className="btn consulting-default-btn" disabled={isDisabled} style={{ position: 'relative'}}>
                      Send Message {isLoading && <div class="lds-dual-ring"></div>}
                    </button>
                    
                    <div style={{ 
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      width: '100%',
                      bottom: '-55px'}}
                    >
                      {isError && <p style={{ color:'#FF1744'}}>Sorry, there was an error with your submission. Please check the following fields and try again.</p>}
                      {isSuccess && <p style={{ color:'#00C853'}}>Thank you for submitting your information. Your request has been received and we will get back to you as soon as possible.</p>}
                    </div>
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
