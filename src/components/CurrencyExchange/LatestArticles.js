import * as React from "react"
import { Link } from "gatsby"

import blogImg1 from "../../images/blog/blog-22.jpg"
import blogImg2 from "../../images/blog/blog-23.jpg"
import blogImg3 from "../../images/blog/blog-24.jpg"

const LatestArticles = () => {
  return (
    <>
      <div
        id="blog"
        className="exchange-blog-area bg-color-f5f5f5 pt-100 pb-70"
      >
        <div className="container">
          <div className="exchange-section-title">
            <span>Latest Articles</span>
            <h2>Our Latest News & Tutorials</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div 
                className="exchange-blog-card"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200" 
                data-aos-once="true"
              >
                <div className="blog-img">
                  <img src={blogImg1} alt="Image" />
                  <div className="icon-link">
                    <Link to="/blog-details">
                      <i className="flaticon-plus"></i>
                    </Link>
                  </div>
                </div>
                <div className="blog-contenet">
                  <ul className="list">
                    <li>
                      <i className="flaticon-user"></i> By{" "}
                      <a href="#">Michael Brewer</a>
                    </li>
                    <li>
                      <i className="flaticon-calendar-3"></i>May 26, 2022
                    </li>
                  </ul>
                  <h3>
                    <Link to="/blog-details">
                      How Can Exchange Movements Affect Your Business?
                    </Link>
                  </h3>
                  <Link to="/blog-details" className="read-more">
                    Read More <i className="flaticon-right-arrow-2"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div 
                className="exchange-blog-card"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400" 
                data-aos-once="true"
              >
                <div className="blog-img">
                  <img src={blogImg2} alt="Image" />
                  <div className="icon-link">
                    <Link to="/blog-details">
                      <i className="flaticon-plus"></i>
                    </Link>
                  </div>
                </div>
                <div className="blog-contenet">
                  <ul className="list">
                    <li>
                      <i className="flaticon-user"></i> By{" "}
                      <a href="#">Michael Brewer</a>
                    </li>
                    <li>
                      <i className="flaticon-calendar-3"></i>May 26, 2022
                    </li>
                  </ul>
                  <h3>
                    <Link to="/blog-details">
                      A Diversified Portfolio: 8 Intelligent Reasons to Buy Gold
                    </Link>
                  </h3>

                  <Link to="/blog-details" className="read-more">
                    Read More <i className="flaticon-right-arrow-2"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div 
                className="exchange-blog-card"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="600" 
                data-aos-once="true"
              >
                <div className="blog-img">
                  <img src={blogImg3} alt="Image" />
                  <div className="icon-link">
                    <Link to="/blog-details">
                      <i className="flaticon-plus"></i>
                    </Link>
                  </div>
                </div>
                <div className="blog-contenet">
                  <ul className="list">
                    <li>
                      <i className="flaticon-user"></i> By{" "}
                      <a href="#">Michael Brewer</a>
                    </li>
                    <li>
                      <i className="flaticon-calendar-3"></i>May 26, 2022
                    </li>
                  </ul>
                  <h3>
                    <Link to="/blog-details">
                      Check Out Our Full Range Of Ebooks, Videos And More
                    </Link>
                  </h3>
                  <Link to="/blog-details" className="read-more">
                    Read More <i className="flaticon-right-arrow-2"></i>
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
