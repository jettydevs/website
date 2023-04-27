import * as React from "react"
import { Link } from "gatsby"

import blogImg1 from "../../images/blog/blog-8.jpg"
import blogImg2 from "../../images/blog/blog-9.jpg"
import blogImg3 from "../../images/blog/blog-10.jpg"

const LatestArticles = () => {
  return (
    <>
      <div id="blog" className="consultig-blog-area pt-100 pb-70">
        <div className="container">
          <div className="consulting-section-title">
            <span>Latest Articles</span>
            <h2>Latest News & Tutorials From Our Team</h2>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="consulting-blog-card">
                <div className="blog-img">
                  <Link to="/blog-details">
                    <img src={blogImg1} alt="Image" />
                  </Link>
                </div>
                <div className="blog-content">
                  <ul className="list">
                    <li>
                      <i className="flaticon-user"></i> by{" "}
                      <a href="#">Michael Brewer</a>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> May 26, 2022
                    </li>
                  </ul>
                  <h3>
                    <Link to="/blog-details">
                      Analytics to Help You Understand Your Customers
                    </Link>
                  </h3>
                  <Link to="/blog-details" className="read-more-2">
                    Read More <i className="flaticon-right-arrow-1"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <div className="consulting-blog-card">
                <div className="blog-img">
                  <Link to="/blog-details">
                    <img src={blogImg2} alt="Image" />
                  </Link>
                </div>
                <div className="blog-content">
                  <ul className="list">
                    <li>
                      <i className="flaticon-user"></i> by{" "}
                      <a href="#">Michael Brewer</a>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> May 26, 2022
                    </li>
                  </ul>
                  <h3>
                    <Link to="/blog-details">
                      Business Strategy for Large Scale Simulations
                    </Link>
                  </h3>
                  <Link to="/blog-details" className="read-more-2">
                    Read More <i className="flaticon-right-arrow-1"></i>
                  </Link>
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
              <div className="consulting-blog-card">
                <div className="blog-img">
                  <Link to="/blog-details">
                    <img src={blogImg3} alt="Image" />
                  </Link>
                </div>
                <div className="blog-content">
                  <ul className="list">
                    <li>
                      <i className="flaticon-user"></i> by{" "}
                      <a href="#">Michael Brewer</a>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> May 26, 2022
                    </li>
                  </ul>
                  <h3>
                    <Link to="/blog-details">
                      Shared Time Human Resources Management
                    </Link>
                  </h3>
                  <Link to="/blog-details" className="read-more-2">
                    Read More <i className="flaticon-right-arrow-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LatestArticles
