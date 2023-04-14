import * as React from "react"
import { Link } from "gatsby"

import logo from "../../images/logo/white-logo.png"

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
      <nav id="navbar" className="navbar navbar-expand-md navbar-light nav-style9">
        <div className="container-fluid">
          <Link to="/app" onClick={toggleNavbar} className="navbar-brand">
            <img src={logo} alt="Logo" />
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
                  to="#home"
                  activeClassName="active"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="#tranding"
                  activeClassName="active"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  Tranding
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="#liveAuctions"
                  activeClassName="active"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  Live Auctions
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="#products"
                  activeClassName="active"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  Products
                </Link>
              </li>
  
              <li className="nav-item">
                <Link
                  to="#collections"
                  activeClassName="active"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  Collections
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="#contact"
                  activeClassName="active"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="others-options d-flex align-items-center style9">
            <div className="option-item">
              <Link to="#">Explore More</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
