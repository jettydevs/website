import * as React from "react"
import { Link } from "gatsby"

import logo from "../../images/logo/logo.svg"

const Navbar = () => {
  const [menu, setMenu] = React.useState(true)

  const toggleNavbar = () => {
    setMenu(!menu)
  }

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

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show"
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  return (
    <>
      <nav id="navbar" className="navbar navbar-expand-md navbar-light nav-style3">
        <div className="container-fluid">
          <Link to="/" onClick={toggleNavbar} className="navbar-brand">
            <img style={{ height: '50px' }} src={logo} alt="Logo" />
          </Link>

          <button
            onClick={toggleNavbar}
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>

          <div className={classOne} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  activeClassName="active"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/what-we-do"
                  activeClassName="active"
                  className="nav-link"
                >
                  What We Do
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/services"
                  activeClassName="active"
                  className="nav-link"
                >
                  Services
                </Link>
              </li>
  
              <li className="nav-item">
                <Link
                  to="/about-us"
                  activeClassName="active"
                  className="nav-link"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  activeClassName="active"
                  className="nav-link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="others-options d-flex align-items-center">
            <div className="option-item">
              <Link to="#contact">Get Started</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
