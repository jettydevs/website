import * as React from "react"
import { Link } from "gatsby"

import portfolioImg1 from "../../images/portfolio/portfolio-1.jpg"
import portfolioImg2 from "../../images/portfolio/portfolio-2.jpg"
import portfolioImg3 from "../../images/portfolio/portfolio-3.jpg"
import portfolioImg4 from "../../images/portfolio/portfolio-4.jpg"

const ProjectItems = () => {
  return (
    <>
      <div id="portfolio" className="portfolio-area bg-color-f9f5f4 pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="portfolio-card">
                <div className="portfolio-img">
                  <img
                    src={portfolioImg1}
                    alt="Image"
                  />
                  <div className="caption-two">
                    <h3>Buzzworthy Studio</h3>
                    <p>
                      Lorem ipsum dolor sit amet ecter do pis cing elit. Susp
                      endisse
                    </p>
                    <Link to="/project-details">
                      Read More <i className="flaticon-right-arrow-3"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-card">
                <div className="portfolio-img">
                  <img
                    src={portfolioImg2}
                    alt="Image"
                  />
                  <div className="caption-two">
                    <h3>UI/UX Design</h3>
                    <p>
                      Lorem ipsum dolor sit amet ecter do pis cing elit. Susp
                      endisse
                    </p>
                    <Link to="/project-details">
                      Read More <i className="flaticon-right-arrow-3"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-card">
                <div className="portfolio-img">
                  <img
                    src={portfolioImg3}
                    alt="Image"
                  />
                  <div className="caption-two">
                    <h3>Web Development</h3>
                    <p>
                      Lorem ipsum dolor sit amet ecter do pis cing elit. Susp
                      endisse
                    </p>
                    <Link to="/project-details">
                      Read More <i className="flaticon-right-arrow-3"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-card">
                <div className="portfolio-img">
                  <img
                    src={portfolioImg4}
                    alt="Image"
                  />
                  <div className="caption-two">
                    <h3>App Development</h3>
                    <p>
                      Lorem ipsum dolor sit amet ecter do pis cing elit. Susp
                      endisse
                    </p>
                    <Link to="/project-details">
                      Read More <i className="flaticon-right-arrow-3"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-card">
                <div className="portfolio-img">
                  <img
                    src={portfolioImg1}
                    alt="Image"
                  />
                  <div className="caption-two">
                    <h3>Gatsby JS Development</h3>
                    <p>
                      Lorem ipsum dolor sit amet ecter do pis cing elit. Susp
                      endisse
                    </p>
                    <Link to="/project-details">
                      Read More <i className="flaticon-right-arrow-3"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectItems
