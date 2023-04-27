import * as React from "react"

import aboutImg from "../images/about-img.jpg"

const AboutContent = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="about-image">
                <img
                  src={aboutImg}
                  alt="image"
                  className="rounded"
                />
                <div className="video-box">
                  <div className="video-btn">
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-content">
                <div className="about-title">
                  <h2>What we do</h2>
  <p>At JettyDevs, we believe in bridging the gap between technology and business by leveraging our expertise in software development and business strategy. We are a team of dedicated professionals committed to delivering innovative solutions that help our clients achieve their goals. With a focus on quality and customer satisfaction, we strive to create lasting partnerships that drive business success.</p>
  <ul>
    <li style={{marginBottom: '10px'}}>We provide custom web and mobile development services using the latest technologies such as React, Node.js, and React Native.</li>
    <li style={{marginBottom: '10px'}}>We specialize in app optimization and maintenance to ensure your product is always running smoothly.</li>
    <li style={{marginBottom: '10px'}}>Our Agile software consulting and guidance helps ensure the success of your project from start to finish.</li>
    <li style={{marginBottom: '10px'}}>We offer software consulting and guidance to help you streamline your business processes and improve your bottom line.</li>
    <li style={{marginBottom: '10px'}}>Our team of experienced professionals is dedicated to providing you with the highest level of customer service and support.</li>
  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutContent
