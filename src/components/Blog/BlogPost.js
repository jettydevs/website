import * as React from "react"
import { Link } from "gatsby"
import blogImg1 from "../../images/blog/blog-img1.jpg"
import blogImg2 from "../../images/blog/blog-img2.jpg"
import blogImg3 from "../../images/blog/blog-img3.jpg"
import blogImg4 from "../../images/blog/blog-img4.jpg"
import blogImg5 from "../../images/blog/blog-img5.jpg"
import blogImg6 from "../../images/blog/blog-img6.jpg"
import shape8 from "../../images/shape/shape-8.png"

const BlogPost = () => {
  return (
    <>
      <div id="blog" className="blog-area bg-color-f8f8f8 pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
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
                      The Most Popular New top Business Apps
                    </Link>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <Link to="/blog-details" className="learn-more">
                    Learn More
                  </Link>
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
              <div className="single-blog-card">
                <div className="blog-img">
                  <img src={blogImg2} alt="Image" />
                  <span>Agency</span>
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
                      The Best Marketing top use Management Tools
                    </Link>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <Link to="/blog-details" className="learn-more">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="single-blog-card">
                <div className="blog-img">
                  <img src={blogImg3} alt="Image" />
                  <span>IT Agency</span>
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
                      3 WooCommerce Plugins to Boost Sales
                    </Link>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <Link to="/blog-details" className="learn-more">
                    Learn More
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
              <div className="single-blog-card">
                <div className="blog-img">
                  <img src={blogImg4} alt="Image" />
                  <span>Development</span>
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
                      Top 21 Must-Read Blogs For Creative Agencies
                    </Link>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <Link to="/blog-details" className="learn-more">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <div className="single-blog-card">
                <div className="blog-img">
                  <img src={blogImg5} alt="Image" />
                  <span>App</span>
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
                      The Most Popular New top Business Apps
                    </Link>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <Link to="/blog-details" className="learn-more">
                    Learn More
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
              <div className="single-blog-card">
                <div className="blog-img">
                  <img src={blogImg6} alt="Image" />
                  <span>Marketing</span>
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
                      The Best Marketing top use Management Tools
                    </Link>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
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

export default BlogPost
