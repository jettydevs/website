import * as React from "react"

import servicePreviewImg from "../../images/services/services-4.jpg"
import serviceImg2 from "../../images/services/services-5.jpg"
import serviceImg3 from "../../images/services/services-6.jpg"

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="services-details">
                <div className="top-image">
                  <img src={servicePreviewImg} alt="Image" />
                </div>

                <div className="services-details-content">
                  <h3>
                    Real Health Care For Your Family And Our Good Doctor for You
                  </h3>
                  <p>
                    Distribution of letters, as opposedi to using 'Content here,
                    content here', making it look like reiadable English. Many
                    desktop the cites of the word in classNameical literature,
                    discovered the undoubtable source on purpose.
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
                    discovered the undoubtable source on purpose.
                  </p>
                  <ul className="list">
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
                      Vero eos et accusam et justo dolores et ea ribam.
                    </li>
                  </ul>

                  <h3>Our Treatment Plans And Strategies</h3>
                  <p>
                    Established of letters, as opposedi to using 'Content here,
                    content here', making it look like readiable English. Many
                    desktop the cites of the word in classNameical literature,
                    discovered the undoubtable source on purpose.
                  </p>

                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="services-img">
                        <img src={serviceImg2} alt="Image" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="services-img">
                        <img src={serviceImg3} alt="Image" />
                      </div>
                    </div>
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

export default ServiceDetailsContent
