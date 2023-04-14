import * as React from "react"
import { Link } from "gatsby"

import portfolioImg1 from "../../images/portfolio/portfolio-7.jpg"
import portfolioImg2 from "../../images/portfolio/portfolio-8.jpg"
import portfolioImg3 from "../../images/portfolio/portfolio-9.jpg"
import portfolioImg4 from "../../images/portfolio/portfolio-10.jpg"
import portfolioImg5 from "../../images/portfolio/portfolio-11.jpg"
import portfolioImg6 from "../../images/portfolio/portfolio-12.jpg"

import shape32 from "../../images/shape/shape-32.png"

const Portfolio = () => {
  return (
    <>
      <div id="portfolio" className="photography-portfolio-area ptb-100">
        <div className="container">
          <div className="photography-section-title">
            <span>PORTFOLIO</span>
            <h2>Browse My Latest Work</h2>
          </div>

          <div className="row popup-gallery align-items-center justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="photography-portfolio-card">
                <div className="portfolio-img">
                  <img
                    src={portfolioImg1}
                    alt="Image"
                  />
                  <div className="icon">
                    <a href="/project-details">
                      <i className="ri-arrow-right-line"></i>
                    </a>
                  </div>
                </div>
                <div className="portfolio-content">
                  <Link to="/project-details">
                    <h3>Tracy & Aaron</h3>
                  </Link>
                  <p>Wedding</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="photography-portfolio-card">
                <div className="portfolio-img">
                  <img
                    src={portfolioImg2}
                    alt="Image"
                  />
                  <div className="icon">
                    <a href="/project-details">
                      <i className="ri-arrow-right-line"></i>
                    </a>
                  </div>
                </div>
                <div className="portfolio-content">
                  <Link to="/project-details">
                    <h3>Travel Photography</h3>
                  </Link>
                  <p>Travel</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="photography-portfolio-card">
                <div className="portfolio-img">
                  <img
                    src={portfolioImg3}
                    alt="Image"
                  />
                  <div className="icon">
                    <a href="/project-details">
                      <i className="ri-arrow-right-line"></i>
                    </a>
                  </div>
                </div>
                <div className="portfolio-content">
                  <Link to="/project-details">
                    <h3>Newborn Photography</h3>
                  </Link>
                  <p>Newborn</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="photography-portfolio-card">
                <div className="portfolio-img">
                  <img
                    src={portfolioImg4}
                    alt="Image"
                  />
                  <div className="icon">
                    <a href="/project-details">
                      <i className="ri-arrow-right-line"></i>
                    </a>
                  </div>
                </div>
                <div className="portfolio-content">
                  <Link to="/project-details">
                    <h3>Street People</h3>
                  </Link>
                  <p>Portrait</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="600"
              data-aos-once="true"
            >
              <div className="photography-portfolio-card">
                <div className="portfolio-img">
                  <img
                    src={portfolioImg5}
                    alt="Image"
                  />
                  <div className="icon">
                    <a href="/project-details">
                      <i className="ri-arrow-right-line"></i>
                    </a>
                  </div>
                </div>
                <div className="portfolio-content">
                  <Link to="/project-details">
                    <h3>Industry & Hunnam </h3>
                  </Link>
                  <p>Photography</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="photography-portfolio-card">
                <div className="portfolio-img">
                  <img
                    src={portfolioImg6}
                    alt="Image"
                  />
                  <div className="icon">
                    <a href="/project-details">
                      <i className="ri-arrow-right-line"></i>
                    </a>
                  </div>
                </div>
                <div className="portfolio-content">
                  <Link to="/project-details">
                    <h3>Studio Photos</h3>
                  </Link>
                  <p>Portrait</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="photography-default-btn btn"
            >
              View All Work <i className="flaticon-right-arrow-3"></i>
            </Link>
          </div>

          <img
            src={shape32}
            className="portfolio-shape-1"
            alt="Image"
          />
        </div>
      </div>
    </>
  )
}

export default Portfolio
