import React, { useState } from "react"
import { Link } from "gatsby"

import saasSoftware from "../../images/demos/saas-software.jpg"
import app from "../../images/demos/app.jpg"
import creativeAgency from "../../images/demos/creative-agency.jpg"
import consulting from "../../images/demos/consulting.jpg"
import photographyPortfolio from "../../images/demos/photography-portfolio.jpg"
import comingSoon from "../../images/demos/coming-soon.jpg"
import politicalCampaign from "../../images/demos/political-campaign.jpg"
import NFT from "../../images/demos/nft.jpg"
import cryptocurrency from "../../images/demos/cryptocurrency.jpg"
import currencyExchange from "../../images/demos/currency-exchange.jpg"

const DemoSidebar = () => {
  const [isActiveSidebarModal, setActiveSidebarModal] = useState("false")
  const handleToggleSidebarModal = () => {
    setActiveSidebarModal(!isActiveSidebarModal)
  }
  return (
    <>
      <div className="demos-btn" onClick={handleToggleSidebarModal}>
        Demos
      </div>

      <div
        className={`sidebar-demo-modal  ${
          isActiveSidebarModal ? "" : "show"
        }`}
      >
        <div className="close-icon" onClick={handleToggleSidebarModal}>
          <i className="ri-close-line"></i>
        </div>

        <div className="container">
          <div className="row g-5 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <Link to="/saas-software" className="d-block">
                  <img src={saasSoftware} alt="SaaS Software" />
                  <h4>SaaS Software</h4>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card">
                <Link to="/app" className="d-block">
                  <img src={app} alt="SaaS Software" />
                  <h4>App Landing</h4>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card">
                <Link to="/creative-agency" className="d-block">
                  <img src={creativeAgency} alt="SaaS Software" />
                  <h4>Creative Agency</h4>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card">
                <Link to="/consulting" className="d-block">
                  <img src={consulting} alt="SaaS Software" />
                  <h4>Consulting Landing</h4>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card">
                <Link to="/political-campaign" className="d-block">
                  <img src={politicalCampaign} alt="SaaS Software" />
                  <h4>Political Campaign</h4>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card">
                <Link to="/nft" className="d-block">
                  <img src={NFT} alt="SaaS Software" />
                  <h4>NFT Landing</h4>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card">
                <Link to="/photography-portfolio" className="d-block">
                  <img src={photographyPortfolio} alt="SaaS Software" />
                  <h4>Photography Portfolio</h4>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card">
                <Link to="/cryptocurrency" className="d-block">
                  <img src={cryptocurrency} alt="SaaS Software" />
                  <h4>Cryptocurrency Landing</h4>
                </Link>
              </div>
            </div>
 
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <Link to="/currency-exchange" className="d-block">
                  <img src={currencyExchange} alt="SaaS Software" />
                  <h4>Currency Exchange</h4>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="card">
                <Link to="/coming-soon" className="d-block">
                  <img src={comingSoon} alt="SaaS Software" />
                  <h4>Coming Soon</h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DemoSidebar;