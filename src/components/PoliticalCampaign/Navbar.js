import * as React from "react"
import { Link } from "gatsby"

import logo from "../../images/logo/logo.png"

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
      <nav id="navbar" className="navbar navbar-expand-md navbar-light nav-style7">
        <div className="container-fluid">
          <Link to="/political-campaign" onClick={toggleNavbar} className="navbar-brand">
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
                  to="#movement"
                  activeClassName="active"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  Movement
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="#about"
                  activeClassName="active"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="#projects"
                  activeClassName="active"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  Projects
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="#volunteer"
                  activeClassName="active"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  Volunteer
                </Link>
              </li>
  
              <li className="nav-item">
                <Link
                  to="#testimonials"
                  activeClassName="active"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  Testimonials
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="#news"
                  activeClassName="active"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>

          <div className="others-options d-flex align-items-center style7">
            <div className="option-item">
              <Link to="#contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
