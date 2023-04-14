import * as React from "react"
import { Link } from "gatsby"

import logo from "../../images/logo/white-logo.png"

const Navbar = () => {

  React.useEffect(() => {
    let elementId = document.getElementById("navbar")
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        elementId.classList.add("is-sticky")
      } else {
        elementId.classList.remove("is-sticky")
      }
    })
  })

  return (
    <>
      <nav id="navbar" className="navbar navbar-expand-lg navbar-light nav-style11">
        <div className="container position-relative">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" />
          </Link>

          <div className="others-options d-flex align-items-center right-15">
            <div className="option-item">
              <Link to="/">Back To Home</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
