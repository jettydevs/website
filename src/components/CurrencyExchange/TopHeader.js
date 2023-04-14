import * as React from "react"

const TopHeader = () => {
  return (
    <>
      <div className="currency-exchange-top-header-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-8">
              <div className="exchange-header-left-content">
                <ul>
                  <li>
                    <a href="tel:+095552348765">
                      <i className="flaticon-phone-call-1"></i>Call:(+09)555
                      234-8765
                    </a>
                  </li>
                  <li>
                    <a href="mailto:contact@klane.com">
                      <i className="flaticon-paper-plane"></i>Mail:
                      contact@klane.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-4">
              <div className="exchange-header-right-content">
                <ul>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopHeader
