import React, { useEffect, useState } from "react"

import shapeImg from "../../images/newsletter-img/shape-2.png"

const Newsletter = () => {
  const [isLoading, setIsLoading] = useState();
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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
      await fetch('https://script.google.com/macros/s/AKfycbyHKEO1v1DfzvHyFSHD3asxIGOTF--108vvVr8BUy6icWH5XbGugrqRsbbqN2Obw8Br3w/exec', {
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
              <div className="consulting-join-us-form" style={{ position: 'relative'}}>
                <form className="newsletter-form" onSubmit={onSubmit}>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email Address"
                    name="email"
                    required
                    disabled={isDisabled}
                  />
                  <button className="consulting-default-btn btn" type="submit" disabled={isDisabled}>
                    Subscribe {isLoading ? <div class="lds-dual-ring"></div> : <i className="flaticon-paper-plane"></i>} 
                  </button>
                  <div style={{ 
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      width: '100%',
                      bottom: '-35px'}}
                    >
                      {isError && <p style={{ color:'#FF1744'}}>Sorry, there was an error with your submission.</p>}
                      {isSuccess && <p style={{ color:'#00C853'}}>Thank you for submitting your information.</p>}
                    </div>
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
