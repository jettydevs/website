import * as React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import shape21 from "../../images/shape/shape-21.png"
import shape22 from "../../images/shape/shape-22.png"

const Pricing = () => {
  return (
    <>
      <div id="pricing" className="agency-pricing-area bg-color-f9f5f4 pt-100 pb-70 overflow-hidden">
        <div className="container">
          <div className="agency-section-title">
            <span>Our Pricing</span>
            <h2>Choose Our Price Plan</h2>
          </div>

          <div className="agency-pricing-tabs">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <Tabs>
                  <TabList>
                    <Tab>Monthly</Tab>
                    <Tab>Yearly</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="row justify-content-center">
                      <div
                        className="col-lg-3 col-md-6"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                        data-aos-once="true"
                      >
                        <div className="agency-pricing-box">
                          <div className="pricing-content">
                            <h1>
                              $20 <span>/month</span>
                            </h1>
                            <h6>Intro</h6>
                            <p>
                              For most businesses that want to optimize web
                              queries
                            </p>
                            <div className="pricing-list">
                              <ul>
                                <li>
                                  <i className="flaticon-check"></i> Powerful
                                  Customization
                                </li>
                                <li>
                                  <i className="flaticon-check"></i>Individual
                                  Solutions
                                </li>
                                <li>
                                  <i className="flaticon-cancel"></i>
                                  <del>Information Technology</del>
                                </li>
                                <li>
                                  <i className="flaticon-cancel"></i>
                                  <del>Unlimited Domains</del>
                                </li>
                                <li>
                                  <i className="flaticon-cancel"></i>
                                  <del>24/7 Support</del>
                                </li>
                              </ul>
                            </div>
                            <a
                              href="#"
                              className="agency-default-btn style4 btn"
                            >
                              Choose plan{" "}
                              <i className="flaticon-right-arrow-3"></i>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div
                        className="col-lg-3 col-md-6"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="400"
                        data-aos-once="true"
                      >
                        <div className="agency-pricing-box">
                          <div className="pricing-content">
                            <h1>
                              $40 <span>/month</span>
                            </h1>
                            <h6>Base</h6>
                            <p>
                              For most businesses that want to optimize web
                              queries
                            </p>
                            <div className="pricing-list">
                              <ul>
                                <li>
                                  <i className="flaticon-check"></i> Powerful
                                  Customization
                                </li>
                                <li>
                                  <i className="flaticon-check"></i>Individual
                                  Solutions
                                </li>
                                <li>
                                  <i className="flaticon-check"></i>
                                  Information Technology
                                </li>
                                <li>
                                  <i className="flaticon-cancel"></i>
                                  <del>Unlimited Domains</del>
                                </li>
                                <li>
                                  <i className="flaticon-cancel"></i>
                                  <del>24/7 Support</del>
                                </li>
                              </ul>
                            </div>
                            <a
                              href="#"
                              className="agency-default-btn style4 btn"
                            >
                              Choose plan{" "}
                              <i className="flaticon-right-arrow-3"></i>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div
                        className="col-lg-3 col-md-6"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="600"
                        data-aos-once="true"
                      >
                        <div className="agency-pricing-box active">
                          <div className="pricing-content">
                            <h1>
                              $120 <span>/month</span>
                            </h1>
                            <h6>Premium</h6>
                            <p>
                              For most businesses that want to optimize web
                              queries
                            </p>
                            <div className="pricing-list">
                              <ul>
                                <li>
                                  <i className="flaticon-check"></i> Powerful
                                  Customization
                                </li>
                                <li>
                                  <i className="flaticon-check"></i>Individual
                                  Solutions
                                </li>
                                <li>
                                  <i className="flaticon-check"></i>
                                  Information Technology
                                </li>
                                <li>
                                  <i className="flaticon-check"></i>Unlimited
                                  Domains
                                </li>
                                <li>
                                  <i className="flaticon-check"></i>24/7 Support
                                </li>
                              </ul>
                            </div>
                            <a
                              href="#"
                              className="agency-default-btn style4 btn"
                            >
                              Choose plan{" "}
                              <i className="flaticon-right-arrow-3"></i>
                            </a>
                            <div className="popular">MOST POPULAR</div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="col-lg-3 col-md-6"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="800"
                        data-aos-once="true"
                      >
                        <div className="agency-pricing-box">
                          <div className="pricing-content">
                            <h1>
                              $60 <span>/month</span>
                            </h1>
                            <h6>Enterprise</h6>
                            <p>
                              For most businesses that want to optimize web
                              queries
                            </p>
                            <div className="pricing-list">
                              <ul>
                                <li>
                                  <i className="flaticon-check"></i> Powerful
                                  Customization
                                </li>
                                <li>
                                  <i className="flaticon-check"></i>Individual
                                  Solutions
                                </li>
                                <li>
                                  <i className="flaticon-check"></i>
                                  Information Technology
                                </li>
                                <li>
                                  <i className="flaticon-check"></i>Unlimited
                                  Domains
                                </li>
                                <li>
                                  <i className="flaticon-cancel"></i>
                                  <del>24/7 Support</del>
                                </li>
                              </ul>
                            </div>
                            <a
                              href="#"
                              className="agency-default-btn style4 btn"
                            >
                              Choose plan{" "}
                              <i className="flaticon-right-arrow-3"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="row justify-content-center">
                      <div
                        className="col-lg-3 col-md-6"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                        data-aos-once="true"
                      >
                        <div className="agency-pricing-box">
                          <div className="pricing-content">
                            <h1>
                              $120 <span>/Yearly</span>
                            </h1>
                            <h6>Intro</h6>
                            <p>
                              For most businesses that want to optimize web
                              queries
                            </p>
                            <div className="pricing-list">
                              <ul>
                                <li>
                                  <i className="flaticon-check"></i> Powerful
                                  Customization
                                </li>
                                <li>
                                  <i className="flaticon-check"></i>Individual
                                  Solutions
                                </li>
                                <li>
                                  <i className="flaticon-cancel"></i>
                                  <del>Information Technology</del>
                                </li>
                                <li>
                                  <i className="flaticon-cancel"></i>
                                  <del>Unlimited Domains</del>
                                </li>
                                <li>
                                  <i className="flaticon-cancel"></i>
                                  <del>24/7 Support</del>
                                </li>
                              </ul>
                            </div>
                            <a
                              href="#"
                              className="agency-default-btn style4 btn"
                            >
                              Choose plan{" "}
                              <i className="flaticon-right-arrow-3"></i>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div
                        className="col-lg-3 col-md-6"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="400"
                        data-aos-once="true"
                      >
                        <div className="agency-pricing-box">
                          <div className="pricing-content">
                            <h1>
                              $240 <span>/Yearly</span>
                            </h1>
                            <h6>Base</h6>
                            <p>
                              For most businesses that want to optimize web
                              queries
                            </p>
                            <div className="pricing-list">
                              <ul>
                                <li>
                                  <i className="flaticon-check"></i> Powerful
                                  Customization
                                </li>
                                <li>
                                  <i className="flaticon-check"></i>Individual
                                  Solutions
                                </li>
                                <li>
                                  <i className="flaticon-check"></i>
                                  Information Technology
                                </li>
                                <li>
                                  <i className="flaticon-cancel"></i>
                                  <del>Unlimited Domains</del>
                                </li>
                                <li>
                                  <i className="flaticon-cancel"></i>
                                  <del>24/7 Support</del>
                                </li>
                              </ul>
                            </div>
                            <a
                              href="#"
                              className="agency-default-btn style4 btn"
                            >
                              Choose plan{" "}
                              <i className="flaticon-right-arrow-3"></i>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div
                        className="col-lg-3 col-md-6"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="600"
                        data-aos-once="true"
                      >
                        <div className="agency-pricing-box active">
                          <div className="pricing-content">
                            <h1>
                              $1220 <span>/Yearly</span>
                            </h1>
                            <h6>Premium</h6>
                            <p>
                              For most businesses that want to optimize web
                              queries
                            </p>
                            <div className="pricing-list">
                              <ul>
                                <li>
                                  <i className="flaticon-check"></i> Powerful
                                  Customization
                                </li>
                                <li>
                                  <i className="flaticon-check"></i>Individual
                                  Solutions
                                </li>
                                <li>
                                  <i className="flaticon-check"></i>
                                  Information Technology
                                </li>
                                <li>
                                  <i className="flaticon-check"></i>Unlimited
                                  Domains
                                </li>
                                <li>
                                  <i className="flaticon-check"></i>24/7 Support
                                </li>
                              </ul>
                            </div>
                            <a
                              href="#"
                              className="agency-default-btn style4 btn"
                            >
                              Choose plan{" "}
                              <i className="flaticon-right-arrow-3"></i>
                            </a>
                            <div className="popular">MOST POPULAR</div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="col-lg-3 col-md-6"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="800"
                        data-aos-once="true"
                      >
                        <div className="agency-pricing-box">
                          <div className="pricing-content">
                            <h1>
                              $560 <span>/Yearly</span>
                            </h1>
                            <h6>Enterprise</h6>
                            <p>
                              For most businesses that want to optimize web
                              queries
                            </p>
                            <div className="pricing-list">
                              <ul>
                                <li>
                                  <i className="flaticon-check"></i> Powerful
                                  Customization
                                </li>
                                <li>
                                  <i className="flaticon-check"></i>Individual
                                  Solutions
                                </li>
                                <li>
                                  <i className="flaticon-check"></i>
                                  Information Technology
                                </li>
                                <li>
                                  <i className="flaticon-check"></i>Unlimited
                                  Domains
                                </li>
                                <li>
                                  <i className="flaticon-cancel"></i>
                                  <del>24/7 Support</del>
                                </li>
                              </ul>
                            </div>
                            <a
                              href="#"
                              className="agency-default-btn style4 btn"
                            >
                              Choose plan{" "}
                              <i className="flaticon-right-arrow-3"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>

          <img src={shape21} className="pricing-shape-1" alt="Image" />
          <img src={shape22} className="pricing-shape-2" alt="Image" />
        </div>
      </div>
    </>
  )
}

export default Pricing
