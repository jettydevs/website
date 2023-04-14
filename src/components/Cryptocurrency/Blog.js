import * as React from "react"
import { Link } from "gatsby"

import blogImg1 from "../../images/blog/blog-19.jpg"
import blogImg2 from "../../images/blog/blog-20.jpg"
import blogImg3 from "../../images/blog/blog-21.jpg"

const Blog = () => {
  return (
    <>
      <div id="blog" className="currency-blog-area bg-color-1c2029 ptb-100">
        <div className="container">
          <div className="currency-section-title">
            <span>Blog & News</span>
            <h2>Our Latest Articles</h2>
          </div>

          <div className="row justify-content-center">
            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400" 
              data-aos-once="true"
            >
              <div className="currency-blog-card">
                <div className="blog-img">
                  <Link to="/blog-details">
                    <img src={blogImg1} alt="Images" />
                  </Link>
                </div>
                <div className="blog-content">
                  <h2>
                    <Link to="/blog-details">
                      Who Is Buying Bitcoin And Pushing Its Price Higher In
                      2022?
                    </Link>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sdo
                    eiusmod ut labore magna aliqua. Ut enim ad.
                  </p>
                  <Link to="/blog-details">Ream More</Link>
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
              <div className="currency-blog-card">
                <div className="blog-img">
                  <Link to="/blog-details">
                    <img src={blogImg2} alt="Images" />
                  </Link>
                </div>
                <div className="blog-content">
                  <h2>
                    <Link to="/blog-details">
                      Can You Use Cryptocurrency to Gamble Online in 2022?
                    </Link>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sdo
                    eiusmod ut labore magna aliqua. Ut enim ad.
                  </p>
                  <Link to="/blog-details">Ream More</Link>
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
              <div className="currency-blog-card">
                <div className="blog-img">
                  <Link to="/blog-details">
                    <img src={blogImg3} alt="Images" />
                  </Link>
                </div>
                <div className="blog-content">
                  <h2>
                    <Link to="/blog-details">
                      Robinhood Or Coinbase? Which is Better For Crypto?
                    </Link>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sdo
                    eiusmod ut labore magna aliqua. Ut enim ad.
                  </p>
                  <Link to="/blog-details">Ream More</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="#">See all Articles</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
