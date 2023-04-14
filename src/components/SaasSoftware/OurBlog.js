import * as React from "react"
import { Link } from "gatsby"
import blogImg1 from "../../images/blog/blog-1.jpg"
import blogImg2 from "../../images/blog/blog-2.jpg"
import shape8 from "../../images/shape/shape-8.png"

const OurBlog = () => {
  return (
    <>
      <div id="blog" className="blog-area bg-color-f8f8f8 pt-100 pb-70">
        <div className="container">
          <div className="sass-section-title">
            <span>Our Blog</span>
            <h2>Easy & Perfect Solution With Latest New’s & Posts</h2>
          </div>

          <div className="row">
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="single-blog-card">
                <div className="blog-img">
                  <img src={blogImg1} alt="Image" />
                  <span>Technology</span>
                </div>
                <div className="blog-content">
                  <div className="name-and-date">
                    <ul>
                      <li>
                        <i className="flaticon-user"></i>By
                        <Link to="#">Michael Brewer</Link>
                      </li>
                      <li>
                        <i className="flaticon-calendar-2"></i>May 26, 2022
                      </li>
                    </ul>
                  </div>
                  <h2>
                    <Link to="/blog-details">
                      5 Key Team Members For Delivering Analytics In Your SaaS
                      Product
                    </Link>
                  </h2>
                  <p>
                    Duis cursus, mi quis viverra ornare, eros dolor inte nulla
                    utimp erdiet com odo diam libero vitae erat Aenean faucibus
                    nibh et jus cursus.
                  </p>
                  <Link to="/blog-details" className="learn-more">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="600"
              data-aos-once="true"
            >
              <div className="single-blog-card">
                <div className="blog-img">
                  <img src={blogImg2} alt="Image" />
                  <span>Featured </span>
                </div>
                <div className="blog-content">
                  <div className="name-and-date">
                    <ul>
                      <li>
                        <i className="flaticon-user"></i>By
                        <Link to="#">Jhonel Breser</Link>
                      </li>
                      <li>
                        <i className="flaticon-calendar-2"></i>May 26, 2022
                      </li>
                    </ul>
                  </div>
                  <h2>
                    <Link to="/blog-details">
                      10 Top Tips For Making Your SaaS Product Sticky Companies
                      That About
                    </Link>
                  </h2>
                  <p>
                    Duis cursus, mi quis viverra ornare, eros dolor inte nulla
                    utimp erdiet com odo diam libero vitae erat Aenean faucibus
                    nibh et jus cursus.
                  </p>
                  <Link to="/blog-details" className="learn-more">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="shape">
            <img src={shape8} className="blog-shape-1" alt="Image" />
          </div>
        </div>
      </div>
    </>
  )
}

export default OurBlog
