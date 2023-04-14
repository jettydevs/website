import * as React from "react"
import { Link } from "gatsby"

import pageTitleBgImg from "../../images/page-title-bg1.jpg"

const PageTitle = () => {
  return (
    <>
      <div 
        className="page-banner-area" 
        style={{ backgroundImage: `url(${pageTitleBgImg})` }}
      >
        <div className="container">
          <div className="page-banner-content text-center">
            <h1>Privacy Policy</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageTitle
