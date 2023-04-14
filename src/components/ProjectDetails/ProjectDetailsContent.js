import * as React from "react"
import StickyBox from "react-sticky-box";

import projectPreviewImg from "../../images/portfolio/portfolio-11.jpg"
import projectImg2 from "../../images/services/services-5.jpg"
import projectImg3 from "../../images/services/services-6.jpg"

const BlogDetailsContent = () => {
  return (
    <>
      <div className="services-details-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="project-details-content">
                <div className="top-image">
                  <img src={projectPreviewImg} alt="Image" />
                </div>

                <div className="project-details-text">
                  <h3>
                    Real Health Care For Your Family And Our Good Doctor for You
                  </h3>

                  <p>
                    Distribution of letters, as opposedi to using 'Content here,
                    content here', making it look like reiadable English. Many
                    desktop the cites of the word in classNameical literature,
                    discovered the undoubtable.
                  </p>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. asdistribution of letters, as opposed to using
                    'Content here, content here', making it look like readiable
                    English. Many desiktop their default model text, and a
                    search for 'lorem ipsum' will uncover many web sites still
                    in their infancy. Various versions the cites of the word in
                    classNameical literature, discovered the undoubtable
                    (injected humour and the like).
                  </p>

                  <h3>What You Get Under This Service</h3>
                  <p>
                    Sistribution of letters, as opposedi to using 'Content here,
                    content here', making it look like reaidable English. Many
                    desktop the cites of the word in classNameical literature,
                    discovered the undoubtable source on.
                  </p>

                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed diam nonumy eirmod tempor.
                    </li>
                    <li>
                      Advisory membership elitr, sed diam nonumy eirmod tempor
                      invidunt ut labor et dolore magna.
                    </li>
                    <li>
                      If you do not have enough time, you will always be able to
                      work and do what you want.
                    </li>
                    <li>
                      Irmad temporarily involved labor and doll magna alicum
                      erat, sed diam voluptua. Vero Eos and accused and fair.
                    </li>
                    <li>
                      Labor and Love Magna Aliquam Irat, Sed Diam Valupatua.
                      Vero eos et accusam et justo.
                    </li>
                  </ul>

                  <h3>Our Treatment Plans And Strategies</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>

                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="services-img">
                        <img src={projectImg2} alt="Image" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="services-img">
                        <img src={projectImg3} alt="Image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <StickyBox offsetTop={90} offsetBottom={20}>
                <div className="project-details">
                  <h3>Project Details</h3>
                  <ul>
                    <li>
                      <span>Date:</span> 07 - Feb - 2022
                    </li>
                    <li>
                      <span>Technologies:</span> HTML/CSS/Wordpress
                    </li>
                    <li>
                      <span>Created By:</span> HiboTheme
                    </li>
                    <li>
                      <span>Client Name:</span> Talon Hudson
                    </li>
                    <li>
                      <span>Project Type:</span> Multipurpose Landing Page
                    </li>
                    <li>
                      <span>Live Project:</span>{" "}
                      <a href="#" target="_blank" rel="noreferrer">
                        klane.com
                      </a>
                    </li>
                  </ul>
                </div>
              </StickyBox>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogDetailsContent
