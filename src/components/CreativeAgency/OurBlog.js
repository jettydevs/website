import * as React from "react"
import { Link } from "gatsby"

import blog1 from "../../images/blog/blog-6.jpg"
import blog2 from "../../images/blog/blog-7.jpg"
import blog3 from "../../images/blog/blog-8.jpg"

import shape18 from "../../images/shape/shape-18.png"

const OurBlog = () => {
  return (
    <>
      <div id="blog" className="agency-blog-area pt-100 pb-70">
        <div className="container">
          <div className="agency-section-title">
            <span>Our Blog</span>
            <h2>Our Latest News & Blog</h2>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <div className="agency-blog-card">
                <div className="blog-img">
                  <Link to="/blog-details">
                    <img src={blog1} alt="Image" />
                  </Link>
                  <span className="date">May 22, 2022</span>
                </div>
                <div className="blog-content">
                  <h3>
                    <Link to="/blog-details">
                      Tech Designer John Doe's Latest Design Of 2022
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipi elit et fames
                    maecen amet est scelerisq tortor sit lorem aecen.
                  </p>
                  <ul className="list">
                    <li>
                      <i className="flaticon-account-manager"></i>By{" "}
                      <a href="#"> Adamm Jon</a>
                    </li>
                    <li>
                      <i className="flaticon-comment-1"></i>04 Comment
                    </li>
                  </ul>
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
              <div className="agency-blog-card">
                <div className="blog-img">
                  <Link to="/blog-details">
                    <img src={blog2} alt="Image" />
                  </Link>
                  <span className="date">May 22, 2022</span>
                </div>
                <div className="blog-content">
                  <h3>
                    <Link to="/blog-details">
                      An Incredibly Easy Method That Works For All
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipi elit et fames
                    maecen amet est scelerisq tortor sit lorem aecen.
                  </p>
                  <ul className="list">
                    <li>
                      <i className="flaticon-account-manager"></i>By{" "}
                      <a href="#"> Adamm Jon</a>
                    </li>
                    <li>
                      <i className="flaticon-comment-1"></i>04 Comment
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="800"
              data-aos-once="true"
            >
              <div className="agency-blog-card">
                <div className="blog-img">
                  <Link to="/blog-details">
                    <img src={blog3} alt="Image" />
                  </Link>
                  <span className="date">May 22, 2022</span>
                </div>
                <div className="blog-content">
                  <h3>
                    <Link to="/blog-details">
                      15 Unheard Ways To Achieve Greater Walker
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipi elit et fames
                    maecen amet est scelerisq tortor sit lorem aecen.
                  </p>
                  <ul className="list">
                    <li>
                      <i className="flaticon-account-manager"></i>By{" "}
                      <a href="#"> Adamm Jon</a>
                    </li>
                    <li>
                      <i className="flaticon-comment-1"></i>04 Comment
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <img src={shape18} className="blog-shape-1" alt="Image" />
        </div>
      </div>
    </>
  )
}

export default OurBlog
