import * as React from "react"

const FunFacts = () => {
  return (
    <>
      <div className="counter-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300" 
              data-aos-once="true"
            >
              <div className="single-counter-box">
                <div className="counter-content">
                  <div className="icon">
                    <i className="flaticon-user-1"></i>
                  </div>
                  <h1>
                    9,637<span className="target">+</span>
                  </h1>
                  <p>Daily Active Users</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="500" 
              data-aos-once="true"
            >
              <div className="single-counter-box">
                <div className="counter-content">
                  <div className="icon">
                    <i className="flaticon-layers"></i>
                  </div>
                  <h1>
                    8,630<span className="target">+</span>
                  </h1>
                  <p>Project Completed</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="700" 
              data-aos-once="true"
            >
              <div className="single-counter-box">
                <div className="counter-content">
                  <div className="icon">
                    <i className="flaticon-review"></i>
                  </div>
                  <h1>
                    6,020<span className="target">+</span>
                  </h1>
                  <p>5 Star Rating Reviews</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="900" 
              data-aos-once="true"
            >
              <div className="single-counter-box">
                <div className="counter-content">
                  <div className="icon">
                    <i className="flaticon-down-arrow-5"></i>
                  </div>
                  <h1>
                    6,326<span className="target">+</span>
                  </h1>
                  <p>Download Software</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FunFacts
