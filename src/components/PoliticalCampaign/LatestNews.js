import * as React from "react"
import { Link } from "gatsby"

import blogImg1 from "../../images/blog/blog-15.jpg"
import blogImg2 from "../../images/blog/blog-16.jpg"
import blogImg3 from "../../images/blog/blog-17.jpg"

const LatestNews = () => {
  return (
    <>
      <div id="news" className="political-news-area pt-100 pb-70">
        <div className="container">
          <div className="political-section-title">
            <span>LATEST NEWS</span>
            <h2>Our Upcoming Campaigns</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="political-news-card">
                <div className="news-img">
                  <Link to="/blog-details">
                    <img src={blogImg1} alt="Image" />
                  </Link>
                </div>
                <div className="news-content">
                  <ul className="list">
                    <li>
                      <i className="flaticon-user"></i>By{" "}
                      <a href="#">Michael Brewer</a>
                    </li>
                    <li>
                      <i className="flaticon-calendar-1"></i>May 26, 2022
                    </li>
                  </ul>
                  <h2>
                    <Link to="/blog-details">
                      Action Organizing For Is A Movement Of Millions
                    </Link>
                  </h2>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="political-news-card">
                <div className="news-img">
                  <Link to="/blog-details">
                    <img src={blogImg2} alt="Image" />
                  </Link>
                </div>
                <div className="news-content">
                  <ul className="list">
                    <li>
                      <i className="flaticon-user"></i>By{" "}
                      <a href="#">Michael Brewer</a>
                    </li>
                    <li>
                      <i className="flaticon-calendar-1"></i>May 26, 2022
                    </li>
                  </ul>
                  <h2>
                    <Link to="/blog-details">
                      We’re The People Who Don’t Just Support Progressive
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="political-news-card">
                <div className="news-img">
                  <Link to="/blog-details">
                    <img src={blogImg3} alt="Image" />
                  </Link>
                </div>
                <div className="news-content">
                  <ul className="list">
                    <li>
                      <i className="flaticon-user"></i>By{" "}
                      <a href="#">Michael Brewer</a>
                    </li>
                    <li>
                      <i className="flaticon-calendar-1"></i>May 26, 2022
                    </li>
                  </ul>
                  <h2>
                    <Link to="/blog-details">
                      Annual Understanding Your Water Quality Report Of NYC
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LatestNews
