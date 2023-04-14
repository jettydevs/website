import * as React from "react"
import { Link } from "gatsby"

import aboutImg from "../../images/about/about-img-5.jpg"

const About = () => {
  return (
    <>
      <div id="about" className="political-about-area ptb-100 bg-color-eef1f6">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="political-about-image pr-20">
                <img 
                  src={aboutImg} 
                  alt="Image" 
                />
                <div className="description-box">
                  <h4>“We’re Here to Help You”</h4>
                  <p>
                    Lorem ipsum dolor sit cons adipis icing elit sed do eiusmod
                    tem ntutla etdolore magna eiusmod tem ntutla.
                  </p>
                  <h3>Evgeny Gerasim</h3>
                  <span>Business Developer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="political-about-content pl-20">
                <div className="political-about-title">
                  <span>WELCOME TO ABOUT</span>
                  <h2>Stand With Our Campaign For Working Political</h2>
                </div>

                <div className="text-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod tempor ntutlabo etdolore magna aliqua. Ut enim ad
                    minim veniam quis nostrud ercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod tempor ntutlabo etdolore magna aliqua enim ad
                    minim veniam quis nostrud ercitation.
                  </p>
                </div>

                <Link to="/about-us" className="political-default-btn mr-20 btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
