import * as React from "react"
import { Link } from "gatsby"

import blogImg1 from "../../images/blog/blog-12.jpg"
import blogImg2 from "../../images/blog/blog-13.jpg"
import blogImg3 from "../../images/blog/blog-14.jpg"

const Blog = () => {
  return (
    <>
      <div id="blog" className="photograpy-blog-area pt-100 pb-70">
        <div className="container">
          <div className="photography-section-title">
            <span>MY BLOG</span>
            <h2>My Blog and News.</h2>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="photography-blog-card">
                <div className="blog-img">
                  <img src={blogImg1} alt="Image" />
                </div>
                <div className="blog-content">
                  <span>March 13, 2022</span>
                  <h2>
                    <Link to="/blog-details">
                      The Best Design Tools in 2022 for Prototyping
                    </Link>
                  </h2>
                  <Link to="/blog-details">
                    <i className="flaticon-right-arrow-3"></i>
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
              <div className="photography-blog-card">
                <div className="blog-img">
                  <img src={blogImg2} alt="Image" />
                </div>
                <div className="blog-content">
                  <span>March 13, 2022</span>
                  <h2>
                    <Link to="/blog-details">
                      The Best New Mobile Photo Editing Software in 2022
                    </Link>
                  </h2>
                  <Link to="/blog-details">
                    <i className="flaticon-right-arrow-3"></i>
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
              <div className="photography-blog-card">
                <div className="blog-img">
                  <img src={blogImg3} alt="Image" />
                </div>
                <div className="blog-content">
                  <span>March 13, 2022</span>
                  <h2>
                    <Link to="/blog-details">
                      How to Build Rapport with Your Web Design Clients
                    </Link>
                  </h2>
                  <Link to="/blog-details">
                    <i className="flaticon-right-arrow-3"></i>
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

export default Blog
