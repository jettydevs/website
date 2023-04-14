import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import TopHeader from "../components/PoliticalCampaign/TopHeader"
import Navbar from "../components/PoliticalCampaign/Navbar"
import MainBanner from "../components/PoliticalCampaign/MainBanner"
import JoinOurMovement from "../components/PoliticalCampaign/JoinOurMovement"
import About from "../components/PoliticalCampaign/About"
import Projects from "../components/PoliticalCampaign/Projects"
import IntroVideo from "../components/PoliticalCampaign/IntroVideo"
import BecomeAVolunteer from "../components/PoliticalCampaign/BecomeAVolunteer"
import Testimonials from "../components/PoliticalCampaign/Testimonials"
import Volunteer from "../components/PoliticalCampaign/Volunteer"
import JoinAsVolunteer from "../components/PoliticalCampaign/JoinAsVolunteer"
import LatestNews from "../components/PoliticalCampaign/LatestNews"
import Footer from "../components/PoliticalCampaign/Footer"
import ContactForm from "../components/PoliticalCampaign/ContactForm"
 
const PoliticalCampaign = () => {
  return (
    <Layout>

      <Seo title="Political Campaign" />

      <div className="plitical-header-area">

        <TopHeader />

        <Navbar />

      </div>

      <MainBanner />

      <JoinOurMovement />

      <About />

      <Projects />

      <IntroVideo />

      <Volunteer />

      <BecomeAVolunteer />

      <Testimonials />

      <JoinAsVolunteer />

      <LatestNews />

      <ContactForm />

      <Footer />
 
    </Layout>
  )
}

export default PoliticalCampaign
